from fastapi import FastAPI
app = FastAPI()


@app.get("/test")
def read_root():
    names = ["madhu", "priya", "aman"]
    return {"data": names}

