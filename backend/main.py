from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

import models, schemas, crud
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Blog API")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Blog API! Visit /docs for documentation."}

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create Blog
@app.post("/blogs", response_model=schemas.BlogResponse)
def create_blog(blog: schemas.BlogCreate, db: Session = Depends(get_db)):
    return crud.create_blog(db, blog)

# Get All Blogs
@app.get("/blogs", response_model=list[schemas.BlogResponse])
def read_blogs(db: Session = Depends(get_db)):
    return crud.get_blogs(db)

# Get Single Blog
@app.get("/blogs/{blog_id}", response_model=schemas.BlogResponse)
def read_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = crud.get_blog(db, blog_id)
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog

# Update Blog
@app.put("/blogs/{blog_id}", response_model=schemas.BlogResponse)
def update_blog(blog_id: int, blog: schemas.BlogUpdate, db: Session = Depends(get_db)):
    updated = crud.update_blog(db, blog_id, blog)
    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    return updated

# Delete Blog
@app.delete("/blogs/{blog_id}")
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_blog(db, blog_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Blog not found")
    return {"message": "Blog deleted successfully"}
