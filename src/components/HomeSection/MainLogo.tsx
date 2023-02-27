import React, { FC } from "react";
import { Box } from "@mui/material";
import mainLogoImg from "./main-logo.png";


const MainLogo: FC = () => {
    return (
        <Box
            component="img"
            src={mainLogoImg}
            alt="main-logo"
            width="auto"
            height={["20rem", "50rem"]}
        />
    );
};

export default MainLogo;