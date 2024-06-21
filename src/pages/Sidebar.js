// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, Drawer, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Typography variant="h6" noWrap sx={{ p: 2 }}>
                Admin Panel
            </Typography>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/users">
                    <ListItemText primary="Users" />
                </ListItem>
                <ListItem button component={Link} to="/settings">
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
