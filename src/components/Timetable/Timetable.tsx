import React from "react";
import { Box } from "@mui/material";
import timetableImg from "./prayer-timetable.jpg";

const Timetable = () => {
    return (
        <Box sx={{ width: '100%' }} display='flex' justifyContent='center'>
            <Box
                component="img"
                src={timetableImg}
                alt="prayer-timetable"
                // width="auto"
                // height={["12rem", "18rem"]}

            />
            {/*<img src="./prayer-timetable.jpg" alt="Prayer Timetable"/>*/}
        </Box>
    );
};

export default Timetable;
