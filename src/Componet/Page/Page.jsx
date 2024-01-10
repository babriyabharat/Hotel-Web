import React from "react";
import { Calendar, EnvelopeFill, Facebook, GeoAlt, Instagram, Person, Pinterest, TelephoneFill, Twitter } from "react-bootstrap-icons";
import Logo from '../Image/logo.png';
import { Link } from "react-router-dom";

function Page(){
    return(
        <>
            <div className="body">
                <div className="Header">
                    <section className="top-bar">
                        <div className="container">
                            <div className="row">
                                <div className="top-bar-contant d-flex py-3 pb-0">
                                    <div className="top-bar-contant col-6 d-flex">
                                        <div className="top-bar-contant-1 d-flex">
                                            <div className="top-bar-contant-icon color-2 pe-3">
                                                <TelephoneFill />
                                            </div>
                                            <span className="pe-2">250 Main Street, 2nd Floor, USA</span>
                                        </div>
                                        <div className="top-bar-contant-2 d-flex">
                                            <div className="top-bar-contant-icon color-2 px-3">
                                                <EnvelopeFill />
                                            </div>
                                            <span>support@example.com</span>
                                        </div>
                                    </div>
                                    <div className="top-bar-icon col-6 d-flex justify-content-end ">
                                        <Facebook className='me-4 color-2 align-self-center' />
                                        <Twitter className='me-4 align-self-center' />
                                        <Instagram className='me-4 align-self-center' />
                                        <Pinterest className="me-4 align-self-center" />
                                        <button className="ms-4">Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="menu-bar">
                        <div className="container">
                            <div className="row">
                                <div className="menu-bar-contant d-flex align-items-center">
                                    <div className="logo col-4">
                                        <img src={Logo} alt="logo" width={250} height={100} />
                                    </div>
                                    <div className="menu-bar-1 col-8">
                                    <ul className="d-flex  justify-content-end align-items-center">
                                            <Link to="/" class="nav-item text-decoration-none pe-5">
                                                <a class="nav-link active color-1" aria-current="page" href="#">Home</a>
                                            </Link>
                                            <Link to="/Room" class="nav-item text-decoration-none pe-5">
                                                <a class="nav-link" href="#">Room</a>
                                            </Link>
                                            <Link to="/Galleries" class="nav-item text-decoration-none pe-5">
                                                <a class="nav-link" href="#">Galleries</a>
                                            </Link>
                                            <Link to="/Page" class="nav-item text-decoration-none pe-5">
                                                <a class="nav-link" href="#">Page</a>
                                            </Link>
                                            <Link to="/Blog" class="nav-item text-decoration-none pe-5">
                                                <a class="nav-link" href="#">Blog</a>
                                            </Link>
                                            <Link to="/Booking" class="nav-item text-decoration-none pe-2">
                                                <a class="nav-link" href="#">booking</a>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
export default Page;