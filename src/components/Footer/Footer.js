import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import "./Footer.css"
const Footer = () => {
    return (
        <MDBFooter className="font-small p-2">
            <div className="container">
                <div className=" text-center py-2">
                    <MDBContainer>

                        &copy; {new Date().getFullYear()} Copyright: <a to="">LearnWave</a>
                    </MDBContainer>
                </div>
            </div>
        </MDBFooter >
    );
};

export default Footer;