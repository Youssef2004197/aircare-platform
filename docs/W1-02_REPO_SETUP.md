# 📁 AirCare+ | Repository Setup & Directory Structure (W1-02)

This document details the logical folder structure and version control configurations initialized for the AirCare+ platform codebase during Week 1.

---

## 1. Project Directory Tree

The workspace is structured using a decoupled monorepo approach, isolating the frontend application, backend API services, and infrastructure configurations into dedicated root directories.

```text
aircare-platform/
├── .git/                 # Git repository history (Hidden)
├── .gitignore            # Version control exclusion rules
├── README.md             # Project overview and entry setup guide
│
├── backend/              # Backend API Service (FastAPI)
│   ├── app/              # Main application package core
│   │   ├── __init__.py
│   │   ├── main.py       # FastAPI entry point
│   │   ├── api/          # Route controllers (Endpoints)
│   │   ├── core/         # Security, hashing, and application configurations
│   │   ├── models/       # Database SQL Alchemy/Tortoise ORM models
│   │   └── schemas/      # Pydantic data validation schemas
│   ├── venv/             # Python isolated virtual environment (Local only)
│   └── requirements.txt  # Python package dependencies
│
├── frontend/             # Frontend Dashboard Application (React.js)
│   ├── public/           # Static assets (Favicon, index.html)
│   ├── src/              # React source codebase
│   │   ├── assets/       # Styles, images, and branding assets
│   │   ├── components/   # Reusable UI components (Buttons, inputs)
│   │   ├── views/        # Main pages (Dashboard, Auth, Analytics)
│   │   ├── App.jsx       # Root component
│   │   └── main.jsx      # React DOM entry point
│   ├── node_modules/     # Node.js dependencies package tree (Local only)
│   └── package.json      # Node.js manifest and scripts file
│
├── docker/               # Containerization & Microservices
│   ├── postgres_data/    # Persistent database storage volumes (Local only)
│   └── docker-compose.yml # Orchestration script for PostgreSQL and local services
│
└── docs/                 # Engineering Logs & Documentation
    ├── screenshots/      # Installation terminal evidence captures
    ├── W1-01_SETUP_LOG.md
    └── W1-02_REPOSITORY_STRUCTURE.md