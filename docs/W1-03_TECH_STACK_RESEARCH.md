# 📝 AirCare+ | Tech Stack Research & Rationale (W1-03)

This document provides a comprehensive technical overview and engineering rationale for the core technology stack chosen for the AirCare+ Environmental Health Platform.

1. Core Architecture Overview

The platform uses a modern decoupled architecture designed to efficiently handle real-time IoT environmental data ingestion, heavy analytical operations, and dynamic data visualization.```text
[ React Frontend ] <--- (REST API / JSON) ---> [ FastAPI Backend ] <---> [ PostgreSQL ]
2. Backend Framework: FastAPI (Python)
🚀 Technical Overview
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+ based on standard Python type hints.
💡 Why FastAPI for AirCare+?
Extreme Performance: Built on top of Starlette and Uvicorn, its execution speed is on par with NodeJS and Go, making it ideal for processing heavy streams of incoming IoT sensor data without lag.
Asynchronous Support (Asyncio): Native support for async processes allows the backend to handle thousands of concurrent requests from multiple sensors simultaneously.
Automated Documentation: Generates interactive OpenAPI (Swagger UI) documentation out of the box (/docs). This simplifies testing endpoints during development.
Native Python Ecosystem: Since the upcoming stages of AirCare+ involve AI-powered health risk prediction, using Python for the backend ensures seamless integration with Machine Learning frameworks (like Scikit-Learn or XGBoost) without changing languages.
3. Frontend Library: React.js (JavaScript)
🚀 Technical Overview
React is an open-source, component-based frontend JavaScript library developed by Meta for building structural user interfaces.
💡 Why React for AirCare+?
Component-Based Architecture: Allows building reusable UI blocks (such as Air Quality Index cards, charts, and navigation bars). This streamlines frontend engineering.
Virtual DOM for Real-Time UI: AirCare+ requires frequent data updates from sensors. React’s Virtual DOM ensures that only the modified UI components (e.g., live chart updates) re-render, keeping the browser highly responsive.
Rich Analytics & Charting Ecosystem: Possesses massive open-source library support for data visualization (such as Recharts, Chart.js, and Tailwind CSS), which is perfect for creating the gamified user dashboard.
4. Database Management System: PostgreSQL
🚀 Technical Overview
PostgreSQL is an advanced, enterprise-class open-source relational database management system (RDBMS) that supports both SQL and JSON querying.
💡 Why PostgreSQL for AirCare+?
Time-Series Data Compatibility: IoT sensors generate constant sequential data (timestamps + pollution metrics). PostgreSQL handles time-series storage efficiently and can be extended with TimescaleDB if optimization is needed down the line.
Relational Integrity for Health Risks: Evaluating health risks requires linking real-time ambient data to structured relational data, such as user profiles, medical vulnerabilities, thresholds, and historical logs.
Hybrid JSON Support: Allows storing unstructured or semi-structured data from varying IoT device models in a native JSONB column format without compromising traditional relational data structure speed.
5. Summary Conclusion
LayerTechnologyKey Advantage for AirCare+FrontendReact.jsFast Virtual DOM re-renders for real-time sensor charts.BackendFastAPIHigh concurrency for IoT endpoints + Native Python AI support.DatabasePostgreSQLRobust SQL relational safety with time-series data capability.