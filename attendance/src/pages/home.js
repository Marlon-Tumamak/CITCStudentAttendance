import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column' }}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="ID Number" variant="outlined" />
            </Box>
            <Button variant="contained" endIcon={<SendIcon />}>
                Login
            </Button>
        </div>
    );
}