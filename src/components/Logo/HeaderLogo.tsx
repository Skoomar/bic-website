import React, { FC } from "react";
import headerLogoImg from "./header-logo.png";
import { Box } from "@mui/material";


const HeaderLogo: FC = () => {
    return (
        <Box
            component="img"
            src={headerLogoImg} 
            alt="header-logo"
            width="auto"
            height={["12rem", "18rem"]}
        />
            // <Image src={headerLogoImg} alt="Header Logo" w="auto" h={["12rem", "18rem"]} />
    );
};

export default HeaderLogo;