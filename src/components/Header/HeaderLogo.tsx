import React, { FC } from "react";
import { Box } from "@mui/material";
import headerLogoImg from "./header-logo.png";


const HeaderLogo: FC = () => {
    return (
        <Box
            component="img"
            src={headerLogoImg} 
            alt="header-logo"
            width="auto"
            height={["12rem", "18rem"]}
        />
    );
};

export default HeaderLogo;