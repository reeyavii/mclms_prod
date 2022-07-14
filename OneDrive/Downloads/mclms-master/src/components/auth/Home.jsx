import React from 'react'
import "./Auth.styles.css";
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Home = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/stalls" activeStyles>
                    Stall
                </NavLink>
                <NavLink to="/applicationForm" activeStyles>
                    Application Form
                </NavLink>
                <NavLink to="/payments" activeStyles>
                    Payments
                </NavLink>
                <NavLink to="/aboutUs" activeStyles>
                    About Us
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">

                </NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  );
}

export default Home;