import * as React from 'react';
import {Box, Tabs, Tab} from '@mui/material';
import TabContent from "./TabContent";


const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-TabContent-${index}`,
    };
}

export default function BasicTabs() {
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
        setCurrentTab(newTab);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Prayer Timetable" {...a11yProps(1)} />
                    <Tab label="Donate" {...a11yProps(2)} />
                    <Tab label="Contact Us" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabContent tabId={0} currentTab={currentTab}>
               Home
            </TabContent>
            <TabContent tabId={1} currentTab={currentTab}>
                Prayer Timetable
            </TabContent>
            <TabContent tabId={2} currentTab={currentTab}>
                Donate
            </TabContent>
            <TabContent tabId={3} currentTab={currentTab}>
                Contact Us
            </TabContent>
        </Box>
    );
}
