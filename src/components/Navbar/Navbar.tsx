import * as React from 'react';
import { Box, Tabs, Tab, Button, Stack } from '@mui/material';
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
            <Button href="/" variant="outlined">Home</Button>
            <Button href="/prayer-timetable" variant="text">Prayer Timetable</Button>
            <Button href="/donate" variant="text">Donate</Button>
            <Button href="/contact-us" variant="text">Contact Us</Button>
            {/*<Box sx={{ bgcolor: '#0F5A47', borderBottom: 3, borderColor: '#000000' }}>*/}
            {/*    <Tabs*/}
            {/*        centered*/}
            {/*        value={currentTab}*/}
            {/*        onChange={handleChange}*/}
            {/*        aria-label="navigation bar"*/}
            {/*        textColor="secondary"*/}
            {/*        indicatorColor="secondary"*/}
            {/*    >*/}
            {/*        <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />*/}
            {/*        <Tab icon={<CalendarIcon />} label="Prayer Timetable" {...a11yProps(1)} />*/}
            {/*        <Tab icon={<DonateIcon />} label="Donate" {...a11yProps(2)} />*/}
            {/*        <Tab icon={<ContactUsIcon />} label="Contact Us" {...a11yProps(3)} />*/}
            {/*    </Tabs>*/}
            {/*</Box>*/}
            {/*<Section tabId={0} currentTab={currentTab}>*/}
            {/*    <Home />*/}
            {/*</Section>*/}
            {/*<Section tabId={1} currentTab={currentTab}>*/}
            {/*    <Timetable />*/}
            {/*</Section>*/}
            {/*<Section tabId={2} currentTab={currentTab}>*/}
            {/*    Donate*/}
            {/*</Section>*/}
            {/*<Section tabId={3} currentTab={currentTab}>*/}
            {/*    Contact Us*/}
            {/*</Section>*/}
        </Stack>
    );

export default Navbar;