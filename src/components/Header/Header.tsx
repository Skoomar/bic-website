import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import HeaderLogo from "../Logo/HeaderLogo";


const Header = () => {
    return (
        <div>
            <HeaderLogo size="18rem" />
            <Tabs size="lg" variant="soft-rounded" align="center">
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Prayer Timetable</Tab>
                    <Tab>Donate</Tab>
                    <Tab>Contact Us</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>Home</TabPanel>
                    <TabPanel>Prayer Timetable</TabPanel>
                    <TabPanel>Donate</TabPanel>
                    <TabPanel>Contact Us</TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default Header;