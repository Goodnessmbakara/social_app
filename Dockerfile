FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /social_app
COPY requirements.txt /social_app/
RUN pip install -r requirements.txt
COPY . /app/
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
    
