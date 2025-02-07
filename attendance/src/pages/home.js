import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import http from './../axios';

export default function Home() {
    const [idNumber, setIdNumber] = useState('');
    const [studentRecord, setStudentRecord] = useState(null);

    const handleInputChange = (event) => {
        setIdNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await http.get('students/');
            const students = response.data;
            const student = students.find(student => student.idNumber === idNumber);
            setStudentRecord(student);
            console.log('Student record:', students);
        } catch (error) {
            console.error('Error fetching student records:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column' }}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
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
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Login
                </Button>
            </Box>
            {studentRecord && (
                <div>
                    <h3>Student Record:</h3>
                    <pre>{JSON.stringify(studentRecord, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}