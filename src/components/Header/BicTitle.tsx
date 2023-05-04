import React, { FC } from "react";
import { Box } from "@mui/material";
import bicTitle from "./bic-title.png"

const BicTitle: FC = () => {
    return (
        <Box
            component="img"
            src={bicTitle}
            alt="logo"
            width="auto"
            height={["10rem", "5rem"]}
        />
    );
};

export default BicTitle;