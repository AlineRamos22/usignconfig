import * as React from 'react';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Editor from '@monaco-editor/react';
import { defaultValue } from './state';

export default function EditorMonaco() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ p: 1 }}>
                <Stack>
                    <Editor
                        theme="vs-dark"
                        line={1}
                        height="600px"
                        defaultValue={JSON.stringify(defaultValue, null, 4)}
                        width="900px"
                        language="json"
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                    />
                </Stack>
            </Box>
        </React.Fragment>
    );
}
