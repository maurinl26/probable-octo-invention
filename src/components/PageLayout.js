import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { Avatar, IconButton, MenuItem, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig";


export default function PageLayout(props) {
    const isAuthenticated = useIsAuthenticated();

    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <MuiAppBar position="fixed" open={open}>
                <Toolbar>
                    <MenuIcon />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sample PWA
                    </Typography>
                    <Tooltip title="Account settings">
                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClick={handleClose}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleLogin("popup")}>
                            <LoginIcon />
                            Sign in with popup
                        </MenuItem>
                        <MenuItem onClick={() => handleLogin("redirect")}>
                            <LoginIcon />
                            Sign in with redirect
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </MuiAppBar>
        </>
    )
}