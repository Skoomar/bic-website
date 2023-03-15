import * as React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Section from "../Section";
import HomeIcon from "./icons/HomeIcon";
import DonateIcon from "./icons/DonateIcon";
import CalendarIcon from "./icons/CalendarIcon";
import ContactUsIcon from "./icons/ContactUsIcon";
import HomeSection from "../HomeSection/HomeSection";
import Timetable from "../Timetable/Timetable";


const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-Section-${index}`,
    };
};

// TODO: different colour of tab on mouse hover
// TODO: make the default text colour contrast to background colour

export default function BasicTabs() {
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
        setCurrentTab(newTab);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ bgcolor: '#0F5A47', borderBottom: 3, borderColor: '#000000' }}>
                <Tabs
                    centered
                    variant="fullWidth"
                    value={currentTab}
                    onChange={handleChange}
                    aria-label="navigation bar"
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
                    <Tab icon={<CalendarIcon />} label="Prayer Timetable" {...a11yProps(1)} />
                    <Tab icon={<DonateIcon />} label="Donate" {...a11yProps(2)} />
                    <Tab icon={<ContactUsIcon />} label="Contact Us" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <Section tabId={0} currentTab={currentTab}>
                <HomeSection />
            </Section>
            <Section tabId={1} currentTab={currentTab}>
                <Timetable />
            </Section>
            <Section tabId={2} currentTab={currentTab}>
                Donate
            </Section>
            <Section tabId={3} currentTab={currentTab}>
                Contact Us
            </Section>
        </Box>
    );
}
