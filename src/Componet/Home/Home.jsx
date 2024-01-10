import React, { useState } from "react";
import './Home.css';
import { Calendar, EnvelopeFill, Facebook, GeoAlt, Instagram, Person, Pinterest, TelephoneFill, Twitter } from "react-bootstrap-icons";
import Logo from '../Image/logo.png';
import { Link, useNavigation } from "react-router-dom";
import Banner from '../Image/Banner.png';
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from "date-fns/format";

function Home() {
    const [destination, setDestination] = useState()
    const [opendate, setOpendate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOption, setOpenOption] = useState(false)
    const [option, setOption] = useState({
        adult: 1,
        children: 1,
        room: 1,
    })

    const handelOption = (name, opretion) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: opretion === 'i' ? option[name] + 1 : option[name] - 1,
            }
        })
    }
    const history = useNavigation();
    const handleSearch = () =>{
        history("/Booking" ,{state:{ destination , date , option}} );
    }

    return (
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
                <div className="main">
                    <section className="banner">
                        <div className="img-fluid">
                            <div className="row">
                                <div className="banner-contant">
                                    <div className="banner-image">
                                        <div className="align-items-center ">
                                            <img src={Banner} alt="banner" width={1519} height={700} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="serch-bar">
                        <div className="container">
                            <div className="row">
                                <div className="serch-bar-contant d-flex align-item-center justify-content-around">
                                    <div className="serch-bar-item">
                                        <GeoAlt className="serch-bar-icon" />
                                        <input type="text" placeholder="where are you going ?" className="serch-bar-input" onChange={(e) => setDestination(e.target.value)} />
                                    </div>
                                    <div className="serch-bar-item">
                                        <Calendar className="serch-bar-icon" />
                                        <span onClick={() => setOpendate(!opendate)} className="serch-bar-text">{format(date[0].startDate, 'mm/dd/yyyy')} to {format(date[0].endDate, 'mm/dd/yyyy')}</span>
                                        {opendate && <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className="date"
                                        />}
                                    </div>
                                    <div className="serch-bar-item">
                                        <Person className="serch-bar-icon" />
                                        <span onClick={() => setOpenOption(!openOption)} className="serch-bar-text">{option.adult} adult {option.children} children {option.room} room</span>
                                        {openOption && <div className="option">
                                            <div className="optionitem">
                                                <span className="optiontext">Adult</span>
                                                <div className="optioncounter">
                                                    <button className="optioncounterbutton" disabled={option.adult <= 1} onClick={() => handelOption('adult', 'd')}>-</button>
                                                    <span className="option-counter-number">{option.adult}</span>
                                                    <button className="optioncounterbutton" onClick={() => handelOption('adult', 'i')}>+</button>
                                                </div>
                                            </div>
                                            <div className="optionitem">
                                                <span className="optiontext">Children</span>
                                                <div className="optioncounter">
                                                    <button className="optioncounterbutton" disabled={option.children <= 1} onClick={() => handelOption('children', 'd')}>-</button>
                                                    <span className="option-counter-number">{option.children}</span>
                                                    <button className="optioncounterbutton" onClick={() => handelOption('children', 'i')}>+</button>
                                                </div>
                                            </div>
                                            <div className="optionitem">
                                                <span className="optiontext">Room</span>
                                                <div className="optioncounter">
                                                    <button className="optioncounterbutton" disabled={option.children <= 1} onClick={() => handelOption('room', 'd')}>-</button>
                                                    <span className="option-counter-number">{option.room}</span>
                                                    <button className="optioncounterbutton" onClick={() => handelOption('room', 'i')}>+</button>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                    <div className="serch-bar-item">
                                        <button type="button" class="btn btn-primary"  onClick={handleSearch}>Search</button>
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

export default Home;