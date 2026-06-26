import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AnalyticsChart from './components/AnalyticsChart';
import { Thermometer, Droplets, Wind, ShieldAlert } from 'lucide-react';
import './App.css';

function App() {
  // State to hold dynamic readings from FastAPI backend
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch metrics data from the FastAPI API endpoint
  useEffect(() => {
    fetch('http://localhost:8000/readings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming database returns an array, pick the latest reading row
        // If it returns a single object, use: setMetrics(data);
        if (Array.isArray(data) && data.length > 0) {
          setMetrics(data[data.length - 1]); 
        } else {
          setMetrics(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from FastAPI:", error);
        setLoading(false);
      });
  }, []);

  // Helper function to determine AQI status color & text
  const getAqiStatus = (aqi) => {
    if (!aqi) return { label: "Unknown", color: "#a0a0ab" };
    if (aqi <= 50) return { label: "Good", color: "#4caf50" };
    if (aqi <= 100) return { label: "Moderate", color: "#ff9800" };
    return { label: "Unhealthy", color: "#f44336" };
  };

  const aqiInfo = metrics ? getAqiStatus(metrics.air_quality_index) : getAqiStatus(0);

  return (
    <div className="app-container">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content-area">
          <div className="dashboard-header">
            <div>
              <h1>Air Quality Dashboard</h1>
              <p className="subtitle">
                {metrics ? `Device ID: ${metrics.device_id || 'Active Sensor'}` : 'Connecting backend telemetry...'}
              </p>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              {metrics ? 'Live Telemetry' : 'Offline'}
            </div>
          </div>

          {/* Render layout if loading finished */}
          {!loading && metrics ? (
            <>
              {/* Metrics Grid */}
              <div className="metrics-grid">
                {/* AQI Card */}
                <div className="metric-card border-aqi">
                  <div className="card-icon-wrapper aqi-icon">
                    <Wind size={24} />
                  </div>
                  <div className="card-info">
                    <span className="card-label">Air Quality Index (AQI)</span>
                    <span className="card-value">{Number(metrics.air_quality_index).toFixed(2)}</span>
                    <span className="card-status" style={{ color: aqiInfo.color }}>
                      {aqiInfo.label}
                    </span>
                  </div>
                </div>

                {/* Temperature Card */}
                <div className="metric-card">
                  <div className="card-icon-wrapper temp-icon">
                    <Thermometer size={24} />
                  </div>
                  <div className="card-info">
                    <span className="card-label">Temperature</span>
                    <span className="card-value">{Number(metrics.temperature).toFixed(1)}°C</span>
                    <span className="card-status sub-text">Live Room Temp</span>
                  </div>
                </div>

                {/* Humidity Card */}
                <div className="metric-card">
                  <div className="card-icon-wrapper humidity-icon">
                    <Droplets size={24} />
                  </div>
                  <div className="card-info">
                    <span className="card-label">Humidity</span>
                    <span className="card-value">{Number(metrics.humidity).toFixed(1)}%</span>
                    <span className="card-status sub-text">Live Humidity Range</span>
                  </div>
                </div>
              </div>

              <AnalyticsChart />

              {/* Quick Overview Section */}
              <div className="overview-section">
                <h3>Device Insights</h3>
                <div className="insight-row">
                  <ShieldAlert size={18} color="#a0a0ab" />
                  <p>Database synchronization online. Last recorded sync time: <strong>{metrics.timestamp || 'Just now'}</strong>.</p>
                </div>
              </div>
            </>
          ) : (
            <div className="placeholder-card">
              <h3>{loading ? 'Fetching Database Records...' : 'Connection Refused'}</h3>
              <p>{loading ? 'Connecting to local Dockerized PostgreSQL endpoint via FastAPI core gateway.' : 'Please ensure your FastAPI backend server is running on port 8000 and CORS origins are allowed.'}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;