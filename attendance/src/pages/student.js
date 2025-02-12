import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router-dom';
import http from './../axios';
import { useEffect, useState } from 'react';

export default function Student() {
    const [rows, setRows] = useState([]);
    const { id } = useParams();
    const [students, setStudents] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentRecords = async () => {
            try {
                const response = await http.get('records/');
                const records = response.data;
                const studentRecords = records.filter(record => String(record.user.id) === String(id));
                setRows(studentRecords);
            } catch (error) {
                console.error('Error fetching student records:', error);
            }
        };

        const fetchStudent = async () => {
            try {
                const response = await http.get(`students/${id}`);
                const student = response.data;
                setStudents(student);
            } catch (error) {
                console.error('Error fetching student records:', error);
            }
        };

        fetchStudent();
        fetchStudentRecords();
    }, [id]);

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        date.setHours(date.getHours() + 8); // Add 8 hours to the time
        return date.toLocaleString(); // Format the date and time as a string
    };

    const handleEdit = (row) => {
        navigate(`/edit-record/${row.id}`);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>{students?.firstName} {students?.lastName}</h1>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Number</TableCell>
                            <TableCell align="right">DateTime</TableCell>
                            <TableCell align="right">Mode</TableCell>
                            <TableCell align="right">Remarks</TableCell>
                            <TableCell align="right">Device Name</TableCell>
                            <TableCell align="right">IP Address</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice().reverse().map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.user.idNumber}
                                </TableCell>
                                <TableCell align="right">{formatDateTime(row.dateTime)}</TableCell>
                                <TableCell align="right">{row.mode.mode}</TableCell>
                                <TableCell align="right">{row.remarks}</TableCell>
                                <TableCell align="right">{row.deviceName}</TableCell>
                                <TableCell align="right">{row.ipAddress}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" onClick={() => handleEdit(row)}>
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}