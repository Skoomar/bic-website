import React from "react";

function NavBar(props) {

    const button = (<button className="nav-button">Two</button> )

    // ToDo: generate the buttons from props, props should have the openTab(...) thing from the limewire website to open tabs within the page and also the text for the button
    // ToDo: get rid of NavButton if it's not needed
    let navButtons = []

    return (
        <div id="nav-bar">
            {button}
            <button className="nav-button" onClick="openTab(event, ">Hello</button>
        </div>
    )
}

export default NavBar