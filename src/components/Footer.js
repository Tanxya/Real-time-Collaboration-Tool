import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About CollabTool</h5>
                        <p>
                            CollabTool is a platform designed to simplify teamwork with
                            real-time collaboration, document sharing, and effective
                            communication tools. Stay productive, organized, and connected.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="/register" className="text-dark">
                                    Register
                                </a>
                            </li>
                            <li>
                                <a href="/login" className="text-dark">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className="text-dark">
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: support@collabtool.com</li>
                            <li>Phone: +91 123-456-7890</li>
                            <li>Location: Hyderabad, Telangana, India</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 bg-dark text-light">
                © {new Date().getFullYear()} CollabTool. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
