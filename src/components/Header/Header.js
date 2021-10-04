import React from 'react';
import { Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <Navbar expand="lg" className="nav">
            <Navbar.Brand className="logo text-light" to="#">LearnWave</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end header-text">
                <Nav
                    className="mr-auto my-2my-lg-0 header-section"
                    style={
                        { maxHeight: '100px' }

                    }
                    navbarScroll
                >
                    <NavLink className="header-section m-2" to="/home">Home</NavLink>

                    <NavLink className="header-section m-2" to="/courses">Courses</NavLink>
                    <NavLink className="header-section m-2" to="/resources">Resources</NavLink>
                    <NavLink className="header-section m-2" to="/contact">Contact</NavLink>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <button className="button" variant={""}>Search</button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;