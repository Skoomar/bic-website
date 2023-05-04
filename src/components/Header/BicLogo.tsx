import React, { FC } from "react";
import { Box } from "@mui/material";
import bicLogo from "./bic-logo.png"

const BicLogo: FC = () => {
    return (
        <Box
            component="img"
            src={bicLogo}
            alt="logo"
            width="auto"
            height={["10rem", "10rem"]}
        />
    );
};

export default BicLogo;