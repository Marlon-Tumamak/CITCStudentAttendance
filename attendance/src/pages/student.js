import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';


function createData(IDNumber, date, timeIn, timeOut, Description) {
    return { IDNumber, date, timeIn, timeOut, Description };
}

const rows = [
    createData('2019-12345', '2021-10-01', '08:00', '12:00', 'Absent'),
    createData('2019-12345', '2021-10-02', '08:00', '12:00', 'Absent'),
    createData('2019-12345', '2021-10-03', '08:00', '12:00', 'Absent'),
    createData('2019-12345', '2021-10-04', '08:00', '12:00', 'Absent'),
];

export default function Student() {
    const currentHour = new Date().getHours();
    const isMorning = currentHour < 12;
    const isAfternoon = currentHour >= 12;
    const { id } = useParams();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Student {id}</h1>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Number</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time In</TableCell>
                            <TableCell align="right">Time Out</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.IDNumber}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.timeIn}</TableCell>
                                <TableCell align="right">{row.timeOut}</TableCell>
                                <TableCell align="right">{row.Description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}