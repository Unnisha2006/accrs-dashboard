import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView({ alerts }) {
  const center = [23.25, 77.41];

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {alerts.map((alert, index) => (
        <Marker
          key={index}
          position={[
            center[0] + Math.random() * 0.01,
            center[1] + Math.random() * 0.01,
          ]}
        >
          <Popup>
            🚨 {alert.type} <br />
            📍 {alert.location} <br />
            ⚠️ {alert.severity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;