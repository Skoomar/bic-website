import React from "react";
import { Navbar } from "@nextui-org/react";
import HeaderLogo from "../Logo/HeaderLogo";

const Header = () => {
    return (
        <div>
            <Navbar isBordered variant="static">
                <Navbar.Brand>
                    <HeaderLogo width="10rem" height="10rem" />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;