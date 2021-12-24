import * as React from 'react';
import { loginRequest } from "../authConfig";
import { useMsal } from '@azure/msal-react';

import { Menu, MenuItem } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function SignInMenu(props) {
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

    return (
        <Menu
            anchorEl={props.anchorEl}
            open={props.open}
            onClick={props.handleClose}
            onClose={props.handleClose}
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
    );
}