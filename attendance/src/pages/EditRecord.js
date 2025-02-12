import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import http from './../axios';
import { useEffect, useState } from 'react';

export default function EditRecord() {
    const { id } = useParams();
    const [record, setRecord] = useState(null);
    const [modes, setModes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const response = await http.get(`records/${id}/`);
                setRecord(response.data);
            } catch (error) {
                console.error('Error fetching record:', error);
            }
        };

        const fetchModes = async () => {
            try {
                const response = await http.get('mode/');
                setModes(response.data);
            } catch (error) {
                console.error('Error fetching modes:', error);
            }
        };

        fetchRecord();
        fetchModes();
    }, [id]);

    const handleModeChange = (event) => {
        const selectedMode = modes.find(mode => mode.id === event.target.value);
        setRecord({ ...record, mode: selectedMode });
    };

    const handleRemarksChange = (event) => {
        setRecord({ ...record, remarks: event.target.value });
    };

    const handleSave = async () => {
        try {
            await http.put(`records/${id}/`, {
                ...record,
                mode: record.mode.id, // Assuming mode is an object with an id
                user: record.user.id, // Send user as id
            });
            alert('Record updated successfully');
            navigate(`/student/${record.user.id}`);
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    if (!record) return <div>Loading...</div>;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Edit Record</h1>
            <TextField
                label="ID Number"
                variant="outlined"
                value={record.user.idNumber}
                disabled
                style={{ marginBottom: '16px' }}
            />
            <TextField
                label="DateTime"
                variant="outlined"
                value={record.dateTime}
                disabled
                style={{ marginBottom: '16px' }}
            />
            <Select
                value={record.mode.id}
                onChange={handleModeChange}
                style={{ marginBottom: '16px', width: '200px' }}
            >
                {modes.map((mode) => (
                    <MenuItem key={mode.id} value={mode.id}>
                        {mode.mode}
                    </MenuItem>
                ))}
            </Select>
            <TextField
                label="Remarks"
                variant="outlined"
                value={record.remarks}
                onChange={handleRemarksChange}
                style={{ marginBottom: '16px' }}
            />
            <Button variant="contained" onClick={handleSave}>
                Save
            </Button>
        </div>
    );
}