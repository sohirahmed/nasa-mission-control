# 🚀 NASA Mission Control

A full-stack Mission Control dashboard inspired by NASA, built with Node.js, Express, and MongoDB. Schedule space launches, track upcoming missions, and explore real SpaceX launch history.

## 🔗 Live Demo
> Coming soon

---

## 🛠️ Tech Stack

**Backend**
- Node.js & Express.js
- MongoDB Atlas & Mongoose
- REST API (MVC Architecture)
- Axios (SpaceX API integration)
- CSV Parsing (NASA Kepler data)
- Morgan (HTTP logging)
- CORS
- PM2 (Cluster Mode)
- Jest & Supertest (Testing)

**Frontend**
- React.js
- Custom Hooks
- Fetch API

---

## ✨ Features

- 🪐 Parses NASA's Kepler CSV data to find habitable exoplanets based on scientific criteria
- 🚀 Schedule new space launches to habitable planets
- 📋 View all upcoming missions with the ability to abort them
- 📜 Browse real SpaceX launch history fetched from the SpaceX public API
- 🔄 Pagination support on launch queries
- 🛡️ Input validation on all API endpoints
- 🗄️ Data persistence with MongoDB Atlas using upsert to avoid duplicates
- ⚡ Cluster mode support via PM2 for production performance

---

## 📁 Project Structure

```
nasa-mission-control/
├── client/                  # React frontend
│   └── src/
│       ├── hooks/           # useLaunches, usePlanets, requests
│       └── pages/           # Launch, Upcoming, History
└── server/                  # Node.js backend
    └── src/
        ├── models/          # Mongoose schemas + business logic
        ├── routes/          # Routers + Controllers
        └── services/        # MongoDB connection, pagination
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sohirahmed/nasa-mission-control.git
cd nasa-mission-control
```

### 2. Install dependencies
```bash
npm run install
```

### 3. Setup environment variables
Create a `.env` file inside the `server/` folder:
```
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

### 4. Run in development
```bash
npm run watch
```

### 5. Run in production
```bash
npm run deploy
```

---

## 🧪 Running Tests
```bash
npm test
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/planets` | Get all habitable planets |
| GET | `/v1/launches` | Get all launches |
| POST | `/v1/launches` | Schedule a new launch |
| DELETE | `/v1/launches/:id` | Abort a launch |

---

## 🌍 Data Sources

- [NASA Kepler Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/)
- [SpaceX REST API](https://github.com/r-spacex/SpaceX-API)
