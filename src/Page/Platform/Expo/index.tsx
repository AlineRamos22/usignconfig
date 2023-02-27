import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export default function AdditionalSettings() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ p: 1 }}>
                <Stack>
                    <Typography>
                        Bateria <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </Typography>
                    <Typography>
                        Tipo de media player <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </Typography>
                </Stack>
            </Box>
        </React.Fragment>
    );
}
