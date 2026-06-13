# 🛠️ AirCare+ | Environment Setup Log (W1-01)

This document logs the step-by-step installation, configuration, and verification of the local development environment required for the AirCare+ environmental health platform.

---

## 1. Python & Virtual Environments
* **Version Installed:** Python 3.12 (LTS)
* **Configuration:** Added Python to the system PATH environment variable during installation to ensure global availability in the terminal.
* **Verification Command:**
```bash
  python --version
Expected Output: Python 3.12.x

Status: Fully Installed & Operational. (Screenshot saved in: W1-w01_Documentation/screen shots)

2. Node.js & NPM (Frontend Runtime)
Version Installed: Node.js v20.x (LTS) / NPM v10.x

Purpose: Acts as the JavaScript runtime engine required to build, run, and manage dependencies for the React frontend framework.

Verification Commands:

Bash
  node -v
  npm -v
Expected Output: v20.xx.x and 10.x.x

Status: Fully Installed & Operational. (Screenshot saved in: W1-w01_Documentation/screen shots)

3. Docker & Docker Compose (Database & Services Containerization)
Software Installed: Docker Desktop

Configuration: Configured using the WSL 2 (Windows Subsystem for Linux) backend engine to ensure high performance on local staging.

Verification Commands:

Bash
  docker --version
Bash
  docker compose version
Expected Output: Docker version 2x.x.x and Docker Compose version v2.x.x

Status: Service running active (Green Engine). (Screenshot saved in:W1-w01_Documentation/screen shots)

4. Git (Version Control System)
Version Installed: Git v2.x

Initial Global Configuration Setup:

Bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
Verification Command:

Bash
  git --version
Expected Output: git version 2.x.x

Status: Configured and ready for repository initializing. (Screenshot saved in: W1-w01_Documentation/screen shots)

5. Code Editor (Visual Studio Code)
IDE Installed: Visual Studio Code (VS Code)

Core Extensions Installed for AirCare+ Development Ecosystem:

Python (by Microsoft): For core FastAPI syntax highlighting, linting, and automated code formatting.

Pylance: For structural type checking and quick AI-assisted code completion.

ES7+ React/Redux/React-Native snippets: Provides fast shortcut boilerplates for accelerating React component generation.

Docker (by Microsoft): To visually manage PostgreSQL and other backend containerized logs directly inside the editor environment.