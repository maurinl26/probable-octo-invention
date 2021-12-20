import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import styles from './Map.modules.css';


export default function Map() {
    const position = [51.505, -0.09];
    return (
        <div className={styles.map}>
           <MapContainer className="MapContainer" center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    </Marker>
                </MapContainer>
        </div>
    );
}
  