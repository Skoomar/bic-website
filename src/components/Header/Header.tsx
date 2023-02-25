import React from "react";

import HeaderLogo from "../Logo/HeaderLogo";
import { Box, Tab, Tabs } from "@mui/material";
import Navbar from "./Navbar";


const Header = () => (
    <div>
        <Box textAlign={["center", "left"]}>
            <HeaderLogo />
        </Box>
        <Navbar />

    </div>
);


export default Header;