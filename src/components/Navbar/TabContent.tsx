import * as React from "react";
import { Box, Typography } from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    tabId: number;
    currentTab: number;
}

const TabContent = (props: TabPanelProps) => {
    const { children, currentTab, tabId, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={currentTab !== tabId}
            id={`tabpanel-${tabId}`}
            aria-labelledby={`tabpanel-${tabId}`}
            {...other}
        >
            {currentTab === tabId && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export default TabContent;