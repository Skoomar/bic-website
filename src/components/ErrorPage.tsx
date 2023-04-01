import React from "react";

import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <Box>
            <Typography component="h1">Oops</Typography>
            <Typography variant="body1">An unexpected error has occurred.</Typography>
        </Box>
    );
};

export default ErrorPage;