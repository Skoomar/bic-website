import React from "react";

import Navbar from "../Navbar/Navbar";
import HeaderLogo from "./HeaderLogo";
import { Box } from "@mui/material";


const Header = () => (
    <Box
        textAlign={["center", "left"]} pb="1rem" mb="2rem"
        sx={{ bgcolor: '#0F5A47', borderBottom: 4, borderColor: '#D29C45', boxShadow: 10 }}
    >

        <HeaderLogo />
        <Navbar />
        {/* TODO: the tab content from the navbar is currently connected to the Navbar so the layout is weird.
                Need to make it so the content is under both the navbar and the logo    */}
        {/* TODO: make sure logo is on left on desktop but centred at top on mobile   */}
    </Box>

);


export default Header;