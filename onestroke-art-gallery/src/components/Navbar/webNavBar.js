import React, { Component } from "react";
import { Navbar, Nav, } from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../../assets/img/Logo/WebLogo.png';
import './NavbarStyle.css'

export class webNavBar extends Component {
    render() {
        return (
            <Navbar className="shadow mb-1 rounded" style={{ background: 'white', height: '63px' }} expand="sm" sticky="top" >
                <Navbar.Brand ><img
                    src={logo}
                    height="50px"
                    className="d-inline-block align-top"
                    alt="One Stroke Art Gallery"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav">
                        <Link to="/">HOME</Link>
                        <Link to="/Gallery">PAINTINGS</Link>
                        <Link to="/Artist">ARTIST</Link>
                        <Link to="/GalleryService">GALLARY SERVICES</Link>
                        <Link to="/ContactUS">CONTACT US</Link>
                        <Link to="/AboutUS">ABOUT US</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default webNavBar;