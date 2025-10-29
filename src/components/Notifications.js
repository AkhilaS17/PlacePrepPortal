import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import "./Notifications.css";

function Notifications() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <section className="notifications-panel">
      <h2>🔔 Latest Updates</h2>
      {notifications.length === 0 ? (
        <div className="notification-box">
            <p className="empty-message">No new notifications yet. Stay tuned!</p>
        </div>

      ) : (
        <ul className="notification-list">
          {notifications.map((note) => (
            <li key={note.id} className="notification-item">
              <div className="note-content">
                <span>{note.message}</span>
                <small>{note.time}</small>
              </div>
              <button className="dismiss-btn" onClick={() => removeNotification(note.id)}>✖</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Notifications;
