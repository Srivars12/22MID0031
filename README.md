# Notification Priority Inbox System

## Project Overview

This project is a Full Stack Notification Priority Inbox System developed using React.js, Node.js, Express.js, Axios, and CORS.

The application fetches notifications from an external API and prioritizes them based on notification type.

Priority Order:

```txt
placement > result > event
```

The backend processes and sorts notifications based on priority and returns the top 10 notifications to the frontend.

The frontend displays notifications in a simple and user-friendly interface.

Fallback dummy data is also implemented to ensure uninterrupted functionality when the external API is unavailable.

---

# Technologies Used

## Frontend
- React.js
- JavaScript
- Axios
- CSS

## Backend
- Node.js
- Express.js
- CORS
- Axios

---

# Features

- Fetch notifications from API
- Priority-based sorting
- Display Top 10 notifications
- Placement notifications shown first
- Result notifications shown second
- Event notifications shown last
- Dummy data fallback handling
- Responsive UI

---

# Project Structure

```txt
notification-priority-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NotificationCard.js
│   │   │   ├── NotificationList.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── package.json
│
└── README.md
```

---

# Installation Steps

## Backend Setup

Open terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend:

```bash
node server.js
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# API Endpoint

```txt
GET /notifications
```

---

# Priority Logic

| Notification Type | Priority |
|---|---|
| placement | 3 |
| result | 2 |
| event | 1 |

---

# Working Flow

```txt
API
 ↓
Express Backend
 ↓
Priority Sorting
 ↓
Top 10 Notifications
 ↓
React Frontend
 ↓
Display UI
```

---

# Error Handling

If the external API is unavailable or requires authorization, the application automatically switches to dummy data for continuous functionality.

---

# Future Improvements

- WebSocket integration
- Database support
- Authentication
- Real-time notifications
- Pagination and filtering

---

# Author

Sri Varshini S
