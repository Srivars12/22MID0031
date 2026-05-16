import React from "react";

function NotificationCard({ item }) {
  return (
    <div className="card">

      <h2>
        {item.NotificationType}
      </h2>

      <div>
        {item.Message}
      </div>

      <span>
        Time:-{item.Timestamp}
      </span>
      <br/>

      <span>
        Priority Number:- 
        {item.priority}
      </span>

    </div>
  );
}

export default NotificationCard;