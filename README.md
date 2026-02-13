# Modern CRUD Blog Website

A full-stack Blog application featuring a high-performance **FastAPI** backend and a stunning, responsive **React** frontend. Built with modern web development best practices, it offers a seamless experience for creating and managing blog posts.

## ✨ Features

### 💻 Frontend (React)
- **Modern UI**: Sleek, minimalist design with dark mode and vibrant aesthetics.
- **Dynamic Animations**: Smooth transitions powered by Framer Motion.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Form Handling**: Robust validation using React Hook Form and Zod.
- **Toast Notifications**: Real-time feedback with Sonner.
- **Clean Interactions**: Interactive elements with hover effects and glassmorphism.

### ⚙️ Backend (FastAPI)
- **Full CRUD API**: Create, Read, Update, and Delete blog posts.
- **CORS Support**: Configured for seamless communication with the frontend.
- **Database**: Persistent storage using SQLite and SQLAlchemy ORM.
- **Pydantic Models**: Strong data validation and type safety.
- **Auto-Docs**: Interactive API documentation via Swagger UI and ReDoc.

## 🛠️ Tech Stack

- **Backend**: FastAPI (Python), SQLAlchemy, Pydantic, SQLite
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Axios, Lucide React, Sonner
- **Validation**: Zod, React Hook Form

## 📂 Project Structure

```text
blog-website/
├── backend/            # FastAPI Backend
│   ├── main.py         # API Endpoints & CORS
│   ├── models.py       # SQLAlchemy Models
│   ├── schemas.py      # Pydantic Schemas
│   ├── database.py     # DB Configuration
│   ├── crud.py         # CRUD Logic
│   └── blog.db         # SQLite Database
├── frontend/           # React Frontend (Vite)
│   ├── src/
│   │   ├── components/ # Reusable UI Components
│   │   ├── App.jsx     # Main Application Logic
│   │   └── index.css   # Global Styles (Tailwind)
│   └── package.json    # Frontend Dependencies
└── README.md
```

## 🚀 Setup & Installation

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows

# Install dependencies
pip install fastapi uvicorn sqlalchemy
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

## ⚙️ Running the Application

### 1. Start the Backend
```bash
cd backend
uvicorn main:app --reload
```
API Root: `http://localhost:8000`
API Docs: `http://localhost:8000/docs`

### 2. Start the Frontend
```bash
cd frontend
npm run dev
```
Frontend: `http://localhost:5173`

## 📖 API Documentation
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
