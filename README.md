# Job Board Platform

A full-stack Job Board Platform built using **Django REST Framework** and **React.js**. This platform allows employers to post and manage jobs while job seekers can browse, filter, and apply for jobs with resume uploads.

---

# Features

## Authentication
- User Registration
- User Login using JWT Authentication
- Employer & Job Seeker Roles

## Employer
- Create Job
- View Posted Jobs
- Edit Job
- Delete Job

## Job Seeker
- Browse Available Jobs
- Search Jobs
- Filter Jobs by:
  - Title
  - Location
  - Job Type
- Apply for Jobs
- Upload Resume
- View Application Status
- View Profile

## Application Management
- Resume Upload
- Cover Letter
- Application Status
  - Pending
  - Accepted
  - Rejected

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Vite

## Backend
- Django
- Django REST Framework
- Simple JWT Authentication

## Database
- PostgreSQL

## Tools
- Git
- GitHub
- Postman
- VS Code

---

# Project Structure

```
JobBoardPlatform
│
├── backend
│   ├── accounts
│   ├── applications
│   ├── jobs
│   ├── config
│   ├── media
│   ├── manage.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate Environment

### Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Create PostgreSQL Database

Update `.env`

```
SECRET_KEY=your_secret_key

DEBUG=True

DB_NAME=jobboard

DB_USER=postgres

DB_PASSWORD=your_password

DB_HOST=localhost

DB_PORT=5432
```

Run Migrations

```bash
python manage.py makemigrations

python manage.py migrate
```

Start Backend

```bash
python manage.py runserver
```

Backend URL

```
http://127.0.0.1:8000/
```

---

## Frontend Setup

```bash
cd frontend
```

Install Packages

```bash
npm install
```

Start React

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173/
```

---

# API Endpoints

## Authentication

### Register

```
POST /api/register/
```

### Login

```
POST /api/token/
```

### Refresh Token

```
POST /api/token/refresh/
```

---

## Users

### Get Users

```
GET /api/users/
```

---

## Jobs

### Get All Jobs

```
GET /api/jobs/
```

### Create Job

```
POST /api/jobs/
```

### Update Job

```
PUT /api/jobs/{id}/
```

### Delete Job

```
DELETE /api/jobs/{id}/
```

### Filter by Title

```
GET /api/jobs/?title=Python
```

### Filter by Location

```
GET /api/jobs/?location=Bengaluru
```

### Filter by Job Type

```
GET /api/jobs/?job_type=FULL_TIME
```

### Employer Jobs

```
GET /api/jobs/?mine=true
```

---

## Applications

### Apply Job

```
POST /api/applications/
```

### View My Applications

```
GET /api/applications/?mine=true
```

---






# Future Improvements

- Responsive UI
- Email Notifications
- Company Logos
- Advanced Search
- Pagination
- Bookmark Jobs
- Password Reset
- Admin Dashboard

---

# Author

**Jayanth R**

B.E. Computer Science & Engineering (AI & ML)

Vidyavardhaka College of Engineering

---

# License

This project is developed for educational purposes.
