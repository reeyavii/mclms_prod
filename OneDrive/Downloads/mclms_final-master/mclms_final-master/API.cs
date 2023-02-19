        [HttpPost]
        [Route("forgot-password-verify")]
        public async Task<IActionResult> ForgotPassRequest(ForgotPasswordVerify forgotPassVerify)
        {
            var user = await _userManager.FindByNameAsync(forgotPassVerify.Username);
            var verification = await _context.ForgotPasswordVerifications.Where(ver => ver.Username == forgotPassVerify.Username && forgotPassVerify.RequestDateTime < ver.ExpirationDateTime && forgotPassVerify.RequestDateTime > ver.IssuedDateTime).OrderByDescending(ver => ver.IssuedDateTime).FirstOrDefaultAsync();
            if (user != null && verification.Pin == forgotPassVerify.Pin)
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }
                var userId = new Guid(user.Id);
                var token = GetToken(authClaims);


                bool isAdmin = false;
                if (userRoles.Contains("Admin"))
                {
                    isAdmin = true;
                }

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    id = user.Id,
                    username = user.UserName,
                    email = user.Email,
                    phoneNumber = user.PhoneNumber,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    IsAdmin = isAdmin,
                    verified = user.Verified,
                });
            }
            else
            {
                return BadRequest();
            }

        }





        
        [HttpGet]
        [Route("request-forgot-password/{username}")]
        public async Task<IActionResult> RequestForgotPass(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            string phoneNumber = user.PhoneNumber;
            if (phoneNumber.Count() == 11)
            {
                phoneNumber = phoneNumber[1..];
            }
            phoneNumber = "+63" + phoneNumber;
            DateTime dt = DateTime.Now;

            Random r = new Random();
            var x = r.Next(0, 1000000);
            string pin = x.ToString("000000");
            Verification verification = new Verification
            {
                UserId = user.Id,
                Pin = pin,
                IssuedDateTime = dt,
                ExpirationDateTime = dt.AddMinutes(10),
            };
            _context.Verifications.Add(verification);
            await _context.SaveChangesAsync();

            await _sms.SendPin(pin, phoneNumber);


            return Ok();
        }
