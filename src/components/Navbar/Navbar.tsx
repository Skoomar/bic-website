import * as React from 'react';
import { Box, Tabs, Tab, Button, Stack, ButtonGroup } from '@mui/material';
import Section from "../Section";
import HomeIcon from "./icons/HomeIcon";
import DonateIcon from "./icons/DonateIcon";
import CalendarIcon from "./icons/CalendarIcon";
import ContactUsIcon from "./icons/ContactUsIcon";
import Home from "../Sections/Home/Home";
import Timetable from "../Sections/Timetable/Timetable";
import HeaderLogo from '../Header/HeaderLogo';
import { Link } from "react-router-dom";

// TODO: Turn this shit into an SPA (Single Page Application)


// TODO: different colour of tab on mouse hover
// TODO: make the default text colour contrast to background colour

const Navbar = () =>
    (
        <Stack spacing={2} direction="row" justifyContent="center">
        {/*<ButtonGroup variant="text" aria-label="Navigation buttons">*/}
            <Button href="/" variant="text">Home</Button>
            <Button href="/prayer-timetable" variant="text">Prayer Timetable</Button>
            <Button href="/donate" variant="text">Donate</Button>
            <Button href="/contact-us" variant="text">Contact Us</Button>
        {/*</ButtonGroup>*/}
        </Stack>
    );

export default Navbar;