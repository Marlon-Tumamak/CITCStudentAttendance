import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import http from './../axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [idNumber, setIdNumber] = useState('');
    const [remarks, setRemarks] = useState('');
    const [showRemarks, setShowRemarks] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setIdNumber(event.target.value);
    };

    const handleRemarksChange = (event) => {
        setRemarks(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await http.get('students/');
            const students = response.data;
            const student = students.find(student => student.idNumber === idNumber);

            if (student) {
                const currentTime = new Date();
                const currentHour = currentTime.getHours();
                const mode = currentHour < 12 ? 1 : 2; // Assuming 1 is 'in' and 2 is 'out'

                await http.post('http://172.20.8.178:8000/api/v1/records/', {
                    user: student.id,
                    dateTime: currentTime.toISOString(),
                    remarks: mode === 2 ? remarks : '',
                    mode: mode
                });
                alert('Record created successfully');
                navigate(`/student/${student.id}`);
            } else {
                alert('Student not found');
            }
        } catch (error) {
            console.error('Error creating record:', error);
        }
    };

    React.useEffect(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        setShowRemarks(currentHour >= 12);
    }, []);

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
                {showRemarks && (
                    <TextField
                        id="outlined-remarks"
                        label="Remarks"
                        variant="outlined"
                        value={remarks}
                        onChange={handleRemarksChange}
                    />
                )}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />} >
                        TimeIn/TimeOut
                    </Button>
                </div>
            </Box>
        </div>
    );
}