import React from 'react';
import './App.css';
import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}

      {/*</header>*/}

        <div className="header-logo">
            <img style={{width:"12%", height:"auto"}} alt="Header Logo" src="header-logo.png" />
        </div>

        <NavBar/>
        {/*<div id="nav-bar">*/}
        {/*    <button onClick="openTab(event, ">Hello</button>*/}
        {/*    <NavButton text="Home" />*/}
        {/*    <NavButton text="About Us" />*/}
        {/*</div>*/}

        <div className="top">
            <img style={{width:"40%", height:"auto"}} alt="Logo" src="logo.png" />
        </div>

        <div id="site-message">
            <h1>Thank you for visiting</h1>
            <h2>Site currently under construction, please visit again soon</h2>
            <p>Contact: info@bilboroughislamiccentre.org.uk<br/><br/>
                <strong>Please donate generously</strong><br/><br/>
                <u>Bank details:</u><br/>
                Bilborough Islamic Centre Trust<br/>
                Sort code: 51-70-06<br/>
                Account No.: 80859356
            </p>
        </div>

    </div>
  );
}

export default App;
