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
                <Box  display="flex" justifyContent="center">
                    <Box sx={{ width: '80%', bgcolor: '#EDFFEC', p: 10 }}>
                        <Typography>{children}</Typography>
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default TabContent;