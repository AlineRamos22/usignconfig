import { Box, Typography, CssBaseline, Grid, Tabs, Tab } from '@mui/material';
import React from 'react';
import Page from '../../../Page';
import Platforms from '../../../Page/Platform';
import EditorMonaco from '../editor';
// import AppBarHome from '../appBar/AppBar';
import MiniDrawer from '../drawer/MenuDrawer';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface TabProps {
    open: boolean;
}

export const TabApp = ({ open }: TabProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <MiniDrawer />
            <Grid marginTop={2} marginLeft={() => (open ? 35 : 15)} marginRight={20} marginBottom={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Platforms" {...a11yProps(0)} />
                            <Tab label="Page" {...a11yProps(1)} />
                            <Tab label="Code" {...a11yProps(2)} />
                        </Tabs>
                    </Grid>

                    <Grid item xs={12}>
                        <TabPanel value={value} index={0}>
                            <Platforms />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Page />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <EditorMonaco />
                        </TabPanel>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
