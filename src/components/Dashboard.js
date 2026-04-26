import React, { useEffect, useState } from "react";
import socket from "../services/socket";
import AlertList from "./AlertList";
import MapView from "./MapView";
import ResponderPanel from "./ResponderPanel";

function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [responders, setResponders] = useState([]);

 useEffect(() => {
  setTimeout(() => {
    setAlerts([
      { type: "Medical Emergency", location: "Block A", severity: "High" },
      { type: "Fire", location: "Hostel", severity: "Critical" },
      { type: "Security", location: "Main Gate", severity: "Medium" }
    ]);

    setResponders([
      { name: "Guard 1", status: "On the way", location: "Gate 2" },
      { name: "Guard 2", status: "Available", location: "Admin Block" }
    ]);
  }, 2000);
}, []);
  return (
  <div style={{ display: "flex", height: "100vh", background: "#0f172a", color: "white" }}>
    
    {/* Sidebar */}
    <div style={{ width: "250px", background: "#1e293b", padding: "20px" }}>
      <h2>🚨 ACCRS</h2>
      <p>Active Incidents</p>
      <p>Responders</p>
      <p>Logs</p>
    </div>

    {/* Main Content */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      
      {/* Top Bar */}
      <div style={{ padding: "10px", background: "#1e293b" }}>
        <h2>Campus Crisis Dashboard</h2>
      </div>

      {/* Content */}
      <div style={{ display: "flex", flex: 1 }}>
        
        <div style={{ flex: 2 }}>
          <MapView alerts={alerts} />
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <AlertList alerts={alerts} />
          <ResponderPanel responders={responders} />
        </div>

      </div>
    </div>
  </div>
);
}

export default Dashboard;