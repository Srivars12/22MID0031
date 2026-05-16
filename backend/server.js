const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

// Priority Mapping
const priorityMap = {
  placement: 3,
  result: 2,
  event: 1,
};

// Function for getting priority
function getPriority(type) {

  if (!type) return 0;

  return priorityMap[type.toLowerCase()] || 0;
}

// Function for processing notifications
function processNotifications(data) {

  const updatedData = data.map((item) => {

    const type =
      item.NotificationType || item.type;

    return {
      ...item,

      // adding priority
      priorityLevel: getPriority(type),
    };
  });

  // sorting based on priority
  updatedData.sort(
    (a, b) =>
      b.priorityLevel - a.priorityLevel
  );

  // returning top 10
  return updatedData.slice(0, 10);
}

// Dummy Data
const dummyData = [
  {
    NotificationType: "placement",
    Message: "Google placement drive tomorrow",
    Timestamp: "09:00 AM",
  },
  {
    NotificationType: "placement",
    Message: "Microsoft interview process started",
    Timestamp: "09:20 AM",
  },
  {
    NotificationType: "result",
    Message: "Semester 6 results published",
    Timestamp: "10:00 AM",
  },
  {
    NotificationType: "result",
    Message: "Internal marks updated",
    Timestamp: "10:10 AM",
  },
  {
    NotificationType: "result",
    Message: "Lab results released",
    Timestamp: "10:20 AM",
  },
  {
    NotificationType: "event",
    Message: "Hackathon starts tonight",
    Timestamp: "11:00 AM",
  },
  {
    NotificationType: "event",
    Message: "AI workshop tomorrow",
    Timestamp: "11:10 AM",
  },
  {
    NotificationType: "event",
    Message: "Coding contest registration open",
    Timestamp: "11:20 AM",
  },
  {
    NotificationType: "placement",
    Message: "TCS recruitment drive announced",
    Timestamp: "11:30 AM",
  },
  {
    NotificationType: "event",
    Message: "Guest lecture at auditorium",
    Timestamp: "11:50 AM",
  },
  {
    NotificationType: "placement",
    Message: "Zoho technical interview tomorrow",
    Timestamp: "12:00 PM",
  },
  {
    NotificationType: "event",
    Message: "Cloud webinar live",
    Timestamp: "12:20 PM",
  },
  {
    NotificationType: "placement",
    Message: "Wipro aptitude test released",
    Timestamp: "12:30 PM",
  },
  {
    NotificationType: "event",
    Message: "Sports meet registration started",
    Timestamp: "12:50 PM",
  },
  {
    NotificationType: "event",
    Message: "Web development seminar today",
    Timestamp: "01:00 PM",
  },

];

app.get("/notifications", async (req, res) => {

  try {

    // Fetching notifications from API
    const response = await axios.get(API_URL);

    let notifications = response.data;

    // Handling nested API response
    if (!Array.isArray(notifications)) {
      notifications = response.data.data;
    }

    // If API is empty
    if (!notifications || notifications.length === 0) {
      throw new Error("No API Data");
    }

    const result =
      processNotifications(notifications);

    res.json(result);

  } catch (error) {

    console.log("Using Dummy Data");

    // Using fallback dummy data
    const result =
      processNotifications(dummyData);

    res.json(result);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});