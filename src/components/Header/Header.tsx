import React from "react";

import HeaderLogo from "./HeaderLogo";
import { Box } from "@mui/material";


const Header = () => (
    <div className="header">
        <Box textAlign={["center", "left"]}>
            <HeaderLogo />
        </Box>

    </div>
);


export default Header;