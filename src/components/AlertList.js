import React from "react";

function AlertList({ alerts, onSelect, onResolve }) {
  return (
    <div>
      {alerts.map((alert, index) => (
        <div
          key={index}
          onClick={() => onSelect(alert)}
          style={{
            background: "#1e293b",
            padding: "12px",
            margin: "8px 0",
            borderRadius: "8px",
            cursor: "pointer",
            border: "1px solid transparent"
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#334155")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#1e293b")
          }
        >
          <strong>{alert.type}</strong><br />
          📍 {alert.location}<br />
          ⚠️ {alert.severity}

          <br />

          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering select
              onResolve(index);
            }}
            style={{
              marginTop: "5px",
              padding: "5px 10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Resolve
          </button>
        </div>
      ))}
    </div>
  );
}

export default AlertList;