import React from "react";

import Navbar from "../Navbar/Navbar";
import HeaderLogo from "./HeaderLogo";
import { Box } from "@mui/material";


const Header = () => (
    <Box sx={{ bgcolor: '#0F5A47' }}>
        <Box display="flex" textAlign={["center", "left"]} >
            <HeaderLogo />
            <Navbar />
            {/* TODO: the tab content from the navbar is currently connected to the Navbar so the layout is weird.
                Need to make it so the content is under both the navbar and the logo    */}
            {/* TODO: make sure logo is on left on desktop but centred at top on mobile   */}
        </Box>

    </Box>
);


export default Header;