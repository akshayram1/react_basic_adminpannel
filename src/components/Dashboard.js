// src/pages/Dashboard.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the admin dashboard!
      </Typography>
    </Box>
  );
};

export default Dashboard;
