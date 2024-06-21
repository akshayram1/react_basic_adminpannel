// src/pages/Users.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Users = () => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Users
            </Typography>
            <Typography variant="body1">
                Manage your users here.
            </Typography>
        </Box>
    );
};

export default Users;
