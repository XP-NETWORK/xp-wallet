import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import Logo from '../assets/img/xp.net-logo.svg';
import GreenDot from '../assets/images/greenDot.svg';
import menuBtn from '../assets/img/menu_ham.svg';
import Logout from '../assets/img/log-out.svg';
import {Link, NavLink} from "react-router-dom";
import Classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar>
            <div className="navContainer"> 
                <Link to="/" className={"navbar-brand"}>
                    <Image src={Logo} fluid/>
                </Link>
                <div className="navTabs">
                    <Link to="#" className="navTab active" id="navTab_1">Testnet <span className="comiSoonL">Coming Soon</span></Link>    
                    <Link to="#" className="navTab" id="navTab_2">Devnet <span className="comiSoonL">Coming Soon</span></Link>    
                    <Link to="#" className="navTab" id="navTab_3">Mainnet <span className="comiSoonL">Coming Soon</span></Link>    
                </div>
                <div class="navRight">
                    <span class="menu_btn"><Image src={menuBtn} fluid/></span>
                    <Link to="#" className="logOut">Close <Image src={Logout} fluid/></Link>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;
