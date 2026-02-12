# FastAPI CRUD Blog API

A simple and efficient CRUD (Create, Read, Update, Delete) Blog API built with **FastAPI**, **SQLAlchemy**, and **SQLite**.

## 🚀 Features
- **Root Endpoint**: Welcome message and navigation guidance.
- **Create**: Add new blog posts with a title and content.
- **Read**: Retrieve all blogs or a single blog by ID.
- **Update**: Modify existing blog posts.
- **Delete**: Remove blog posts from the database.
- **Automatic Documentation**: Interactive API docs powered by Swagger UI.

## 🛠️ Tech Stack
- **Backend**: FastAPI (Python)
- **Database**: SQLite
- **ORM**: SQLAlchemy
- **Validation**: Pydantic

## 📂 Project Structure
```text
blog-website/
└── backend/
    ├── main.py        # API Endpoints
    ├── models.py      # SQLAlchemy Models
    ├── schemas.py     # Pydantic Schemas
    ├── database.py    # DB Configuration
    ├── crud.py        # CRUD Logic
    └── blog.db        # SQLite Database
```

## ⚙️ Setup & Installation

### 1. Enable Virtual Environment
```powershell
.\venv\Scripts\Activate.ps1
```

### 2. Install Dependencies
```bash
pip install fastapi uvicorn sqlalchemy
```

### 3. Run the Server
```bash
uvicorn main:app --reload
```
The API will be available at `http://localhost:8000`.

## 📖 API Documentation
Once the server is running, you can access the interactive documentation at:
- **API Root**: [http://localhost:8000/](http://localhost:8000/)
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## 🚧 Next Steps
- [ ] Add CORS MiddleWare for Frontend integration.
- [ ] Implement React Frontend.
- [ ] Add Form validation and error handling.
