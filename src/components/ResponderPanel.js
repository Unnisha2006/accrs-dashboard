import React from "react";

function ResponderPanel({ responders }) {
  return (
    <div>
      {responders.map((res, index) => (
        <div style={{
  background: "#1e293b",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px"
}}>
  <strong>{res.name}</strong><br />
  📡 {res.status}<br />
  📍 {res.location}
</div>
      ))}
    </div>
  );
}

export default ResponderPanel;