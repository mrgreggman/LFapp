import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmailForm() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="standard-search"
                    label="Email"
                    type="Email"
                    variant="standard"
                    onChange={(e) => handleEmailChange(e.target.value)}
                />

            </div>
        </Box>
    );
}