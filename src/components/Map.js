import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { styled } from '@mui/system';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const position = [51.505, -0.09];

    const SMapContainer = styled(MapContainer)({
        maxHeight: '600px',
        position: 'relative',
    });

    return (
        <Box sx={{boxSizing:'border-box'}}>
            <Typography> Voici la carte </Typography>
            <SMapContainer center={position} zoom={13} scrollWheelZoom={false} sx={{position:'relative'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    </Marker>
            </SMapContainer>
        </Box>    
    );
}
  