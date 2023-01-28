import React from "react";
import { Navbar } from "@nextui-org/react";
import headerLogo from "./header-logo.png";

const Header = () => {
    return (
        <div>
            <Navbar isBordered variant="static">
                <Navbar.Brand>
                    <img src={headerLogo} alt="Header Logo" />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;