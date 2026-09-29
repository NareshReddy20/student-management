from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.database import Base, engine
from models.student import Student
from routes.student_routes import router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Student Management API"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Student Management API is running"
    }