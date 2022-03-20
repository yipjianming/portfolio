import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import { Typography } from '@mui/material';
import AboutMe from '../pages/AboutMe';
import Achievements from '../pages/Achievements';
import Projects from '../pages/Projects';

export default function TabSelector() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="scrollable auto tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        <Tab label="About me" value="1" />
                        <Tab label="Achievements" value="2" />
                        <Tab label="Projects" value="3" />
                    </Tabs>
                </Box>

                <TabPanel sx={{ p: 0 }} value="1"><AboutMe /></TabPanel>
                <TabPanel sx={{ p: 0 }} value="2"><Achievements/></TabPanel>
                <TabPanel sx={{ p: 0 }} value="3"><Projects/></TabPanel>

            </TabContext>
        </Box>
    );
}