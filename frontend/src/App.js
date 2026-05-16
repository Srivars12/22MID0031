import React, { useEffect, useState } from "react";
import axios from "axios";
import NotificationList from "./components/NotificationList";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/notifications"
      );

      setNotifications(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNotifications();

    // Refresh every 10 seconds
    const interval = setInterval(() => {
      fetchNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Priority Notification Inbox</h1>

      <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;