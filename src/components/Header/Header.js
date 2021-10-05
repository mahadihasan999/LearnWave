import React from 'react';
import { Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <Navbar expand="lg" className="nav">
            <div className="container">
                <Navbar.Brand><NavLink className="logo" to="/home">LearnWave</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="header-text">
                    <div>
                        <Nav
                            className="mr-auto my-2my-lg-0  justify-content-end"
                            style={
                                { maxHeight: '100px' }

                            }
                            navbarScroll
                        >
                            <NavLink className="header-section " to="/home">Home</NavLink>
                            <NavLink className="header-section " to="/courses">Courses</NavLink>
                            <NavLink className="header-section " to="/resources">Resources</NavLink>
                        </Nav>
                    </div>
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
            </div>
        </Navbar>

    );
};

export default Header;