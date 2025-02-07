import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import http from './../axios';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const [idNumber, setIdNumber] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setIdNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await http.get('students/');
            const students = response.data;
            const student = students.find(student => student.idNumber === idNumber);
            navigate(`/student/${student.id}`);
        } catch (error) {
            console.error('Error fetching student records:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column' }}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column', alignItems: 'center' } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="ID Number"
                    variant="outlined"
                    value={idNumber}
                    onChange={handleInputChange}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />} >
                        TimeIn/TimeOut
                    </Button>
                </div>

            </Box>

        </div>
    );
}