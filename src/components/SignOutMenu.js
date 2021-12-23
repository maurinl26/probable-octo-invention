import React from "react";
import { useMsal } from "@azure/msal-react";

import { Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


/**
 * Renders a sign-out button
 */
export default function SignOutMenu(props) {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
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
            <MenuItem onClick={() => handleLogout("popup")}>
                <LogoutIcon />
                Sign out with popup
            </MenuItem>
            <MenuItem onClick={() => handleLogout("redirect")}>
                <LogoutIcon />
                Sign out with redirect
            </MenuItem>
        </Menu>
    );
}