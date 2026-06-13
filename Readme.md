# 🌍 AirCare+ | Environmental Health Platform

**AirCare+** is a next-generation environmental health platform combining **IoT air quality sensors**, **AI-powered health risk prediction**, and **gamified sustainability engagement** to monitor air quality, predict health risks, and improve lives.

---

## 🚀 Key Features
* **Real-time IoT Monitoring:** Ingests live environmental tracking data (CO2, PM2.5, Temperature, Humidity).
* **AI Health Predictor:** Next-gen risk analysis based on ambient air quality data and user vulnerability factors.
* **Gamified Dashboard:** Interactive charts, structural metrics, and milestones with badges for eco-engagement.

---

## 🛠️ Tech Stack Overview

* **Frontend:** **React.js (JavaScript)** - Component-based structure, highly efficient for rendering real-time data dashboards and charts via Virtual DOM.
* **Backend:** **FastAPI (Python)** - High performance, asynchronous concurrency support, auto-generated OpenAPI (Swagger) documentation, and native Python ecosystem for machine learning integration.
* **Database:** **PostgreSQL** - Robust relational database capable of handling structured user data and relational time-series sensor streams.
* **DevOps:** **Docker** - Containerization platform to ensure consistency between local environment development and final production.

---

## 📁 Repository Directory Structure

```text
aircare-platform/
├── backend/          # FastAPI application source code
│   ├── app/          # Main application core package
│   └── requirements.txt
├── frontend/         # React.js web application source code
│   ├── src/          # React components and views code
│   └── package.json
├── docker/           # Docker Compose orchestrations and infrastructure configs
├── docs/             # Engineering logs, research documents, and setups
├── .gitignore        # Global version control exclusion configurations
└── README.md         # Project overview and entry local setup instructions