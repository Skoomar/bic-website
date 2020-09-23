import React from 'react';
import './App.css';
import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";

import headerLogo from "./images/header-logo.png"
import logo from "./images/logo.png"
import timetableImg from "./images/prayer-timetable.jpeg"

function App() {

    return (
        <div className="App">
            {/*<header className="App-header">*/}

            {/*</header>*/}

            <div className="header-logo">
                <img style={{width: "250px", height: "auto"}} alt="Header Logo"
                     src={headerLogo}/>
            </div>

            {/*<NavBar/>*/}
            {/*<div id="nav-bar">*/}
            {/*    <button onClick="openTab(event, ">Hello</button>*/}
            {/*    <NavButton text="Home" />*/}
            {/*    <NavButton text="About Us" />*/}
            {/*</div>*/}

            <TabBar>
                <div label="Home">
                    <div className="top">
                        <img style={{width: "40%", height: "auto"}} alt="Logo" src={logo}/>
                    </div>

                </div>
                <div label="Prayer Timetable">
                    <img src={timetableImg} alt="Prayer Timetable"/>
                </div>
                <div label="Donate">
                    <p>
                        <strong>Please donate generously</strong><br/><br/>
                        <u>Bank details:</u><br/>
                        Bilborough Islamic Centre Trust<br/>
                        Sort code: 51-70-06<br/>
                        Account No.: 80859356
                    </p>
                </div>
                <div label="Contact Us">
                    <h2>Email: info@bilboroughislamiccentre.org.uk</h2>
                    <h2>Address: Wigman Road, Bilborough, Nottingham, NG8 4PB</h2>
                </div>
            </TabBar>

            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default App;
