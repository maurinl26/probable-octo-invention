import * as React from 'react';
import { Box, Typography, useTheme, Card } from "@mui/material";
import { MapContainer, TileLayer, SVGOverlay } from "react-leaflet";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/system';

import L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';

export default function Map() {
    const theme = useTheme();
    const position = [51.505, -0.09];

    const bounds = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    const SMapContainer = styled(MapContainer)({
        maxHeight: '600px',
        position: 'relative',
        backgroundColor: theme.palette.primary.light,
    });

    const SBox = styled(Box)({
        px: 2,
    });

    const DefaultIcon = L.icon({
        iconUrl: icon
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <SBox>
            <Typography variant='h5'> Voici la carte </Typography>
            <Card elevation={5}>
                <SMapContainer center={position} zoom={13} scrollWheelZoom={false} sx={{ position: 'relative' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
                        <LocationOnIcon />
                    </SVGOverlay>
                </SMapContainer>

            </Card>

        </SBox>
    );
}
