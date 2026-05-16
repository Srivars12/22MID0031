import React from "react";
import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  return (
    <div>
      {
        notifications.map((item, index) => (
          <NotificationCard
            key={index}
            item={item}
          />
        ))
      }
    </div>
  );
}

export default NotificationList;