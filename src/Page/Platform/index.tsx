import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';

interface PlatformOptions {
    title: string;
}

const platforms = [{ title: 'Expo' }, { title: 'Tauri' }, { title: 'Electron' }];

export default function Platforms() {
    const defaultProps = {
        options: platforms,
        getOptionLabel: (option: PlatformOptions) => option.title,
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid spacing={2}>
                <Grid item xs={12}>
                    <Box>
                        <Autocomplete
                            {...defaultProps}
                            id="auto-complete"
                            autoComplete
                            includeInputInList
                            renderInput={(params) => (
                                <TextField {...params} label="Platform" variant="standard" sx={{ width: 200 }} />
                            )}
                        />
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

{
    /* <Box sx={{ p: 1 }}>
    <h3>Platforms</h3>
    <Stack spacing={1} sx={{ width: 400 }}>
        <Autocomplete
            {...defaultProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => <TextField {...params} label="Platforms" variant="standard" sx={{ width: 200 }} />}
        />
        {/* <AdditionalSettings /> */
}
//     </Stack>
// </Box>; */}
