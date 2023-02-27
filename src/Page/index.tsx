import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { Autocomplete, Button, FormControl, Grid, MenuItem, Select } from '@mui/material';

export default function AdditionalSettings() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid marginTop={2} marginLeft={2}>
                <Grid>
                    <Typography variant="h6" gutterBottom>
                        Status Debug
                        <Typography
                            variant="body2"
                            gutterBottom
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                            Debug <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                            Done <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        </Typography>
                    </Typography>
                </Grid>

                <Grid>
                    <Typography variant="h6" gutterBottom style={{ marginTop: 10, marginBottom: 10 }}>
                        Endereço
                    </Typography>
                    <Typography
                        variant="body2"
                        gutterBottom
                        style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                        Assets:
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ marginLeft: 10 }} />
                        <Typography variant="body2" gutterBottom>
                            Billing:
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                style={{ marginLeft: 10 }}
                            />
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                            Config:
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                            />
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                            Heartbeat:
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                            />
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                            Publisher:
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                            />
                        </Typography>
                    </Typography>
                </Grid>

                <Grid>
                    <Typography variant="h6" gutterBottom style={{ marginTop: 10, marginBottom: 10 }}>
                        Polling
                    </Typography>
                    <Typography
                        variant="body2"
                        gutterBottom
                        style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                        Config:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography
                        variant="body2"
                        gutterBottom
                        style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                        Heartbeat:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography
                        variant="body2"
                        gutterBottom
                        style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
                        Publisher:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Billing:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Location:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Config Timeout:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Heartbeat Timeout:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Heartbeat Counter Less Frequently:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Billing Timeout:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Billing Time Range:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Publisher Timeout:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>

                    <Typography>
                        Publisher Time Range:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Cache Download Polling:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Cache Cleanup Polling:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                    <Typography>
                        Trigger Debounce:
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
