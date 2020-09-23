import React from "react";

function NavBar() {

    const button = (<button className="nav-button">Two</button> )

    // ToDo: generate the buttons from props, props should have the openTab(...) thing from the limewire website to open tabs within the page and also the text for the button
    // ToDo: get rid of NavButton if it's not needed
    // let navButtons = [(<button className="nav-button">One</button>), (<button className="nav-button">Two</button>)]
    let navButtonSpec = [["Home", "home"], ["About Us", "about-us"], ["Prayer Timetable", "time-table"]]
    let navButtons = []

    for (const x in navButtonSpec) {
        // navButtons.push((<button className="nav-button" onClick={openTab(event, {x[0]}} )
        navButtons.push(<button className="nav-button" onClick="openTab(event, {x[0]}"></button> )
    }

    return (
        <div id="nav-bar">
            {navButtons}
            <button className="nav-button" onClick="openTab(event, ">Hello</button>
        </div>
    )
}

export default NavBar