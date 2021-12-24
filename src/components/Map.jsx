import * as React from 'react';
import { Box, Typography, useTheme, Card } from "@mui/material";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { styled } from '@mui/system';

import L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const theme = useTheme();
    const position = [51.505, -0.09];
    const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

    const SMapContainer = styled(MapContainer)({
        maxHeight: '600px',
        position: 'relative',
        backgroundColor: theme.palette.primary.light,
    });

    const SBox = styled(Box)({
        px: 2,
    });

    return (
        <SBox>
            <Typography variant='h5'> Voici la carte </Typography>
            <Card elevation={5}>
            <SMapContainer center={position} zoom={13} scrollWheelZoom={false} sx={{position:'relative'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={position} icon={icon} />
            </SMapContainer>

            </Card>
            
        </SBox>    
    );
}
  