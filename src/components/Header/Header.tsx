import React from "react";

import HeaderLogo from "./HeaderLogo";
import { Box } from "@mui/material";


const Header = () => (
    <Box sx={{ bgcolor: '#0F5A47' }}>
        <Box textAlign={["center", "left"]} sx={{ borderBottom: 5, borderColor: 'divider'}}>
            <HeaderLogo />
        </Box>

    </Box>
);


export default Header;