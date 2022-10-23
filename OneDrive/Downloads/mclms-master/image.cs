https://github.com/raivex21/API/blob/master/API/Controllers/ProductImagesController.

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using API.Auth;
using static System.IO.Path;


namespace API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ProductImagesController : ControllerBase
    {
        public static IWebHostEnvironment _webHostEnvironment;
        private readonly DatabaseContext _context;

        public ProductImagesController(IWebHostEnvironment webHostEnvironment, DatabaseContext context)
        {
            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }
        [HttpGet("{imageName}")]
        public IActionResult Get(string imageName)
        {
            try
            {
                var image = System.IO.File.OpenRead(_webHostEnvironment.WebRootPath + "\\uploads\\" + imageName);
                return File(image, "image/jpeg");
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        
        [HttpPost]
        public async Task<ActionResult<Product>> PostImage([FromForm] ProductImage objectFile)
        {
            try
            {
                if (objectFile.Image.Length > 0)
                {
                    string path = _webHostEnvironment.WebRootPath + "\\uploads\\";
                    if (!Directory.Exists(path))
                    {
                        
                        Directory.CreateDirectory(path);
                        
                    }
                    Console.WriteLine($"path={path}");
                    string fileName = "";

                    if (objectFile.Image.FileName.Contains(" "))
                    {
                        fileName = string.Join("", objectFile.Image.FileName.Split(" "));
                    }
                    else
                    {
                        fileName = objectFile.Image.FileName;
                    }
                    var productImg = await _context.ProductImages.Where(i => i.Name == fileName).FirstOrDefaultAsync();
                    var exist = productImg != null;
                    int num = 0;
                    if (exist)
                    {
                        fileName = GetFileNameWithoutExtension(fileName) + num.ToString() + GetExtension(fileName);

                        var checkProductImg = await _context.ProductImages.Where(i => i.Name == fileName).FirstOrDefaultAsync();
                        if (checkProductImg != null)
                        {
                            exist = false;
                        }
                        else
                        {
                            num++;
                        }
                    }
                    ProductImage image = new()
                    {
                        Id = objectFile.Id,
                        ProductId = objectFile.ProductId,
                        Name = fileName,
                    };
                    
                    using (FileStream fileStream = System.IO.File.Create(path + fileName))
                    {
                        objectFile.Image.CopyTo(fileStream);
                        fileStream.Flush();
                        _context.ProductImages.Add(image);
                        await _context.SaveChangesAsync();
                        var product = await _context.Products.Where(p => p.Id == objectFile.ProductId)
                            .Include("Ratings")
                            .Include("Images")
                            .Include("Store")
                            .FirstOrDefaultAsync();

                        return product;
                    }
                }
                else
                {
                    return NoContent();
                }
            }
            catch (Exception ex)
            {
                return NoContent();
            }
        }
    }
}