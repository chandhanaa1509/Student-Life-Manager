# 🎓 CampusFlow

> **A Full-Stack Student Productivity SaaS Platform** built to help students efficiently manage assignments, internships, deadlines, study resources, and academic progress from a single dashboard.

![Java](https://img.shields.io/badge/Java-21-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5-green)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![License](https://img.shields.io/badge/License-MIT-purple)

---

## 📖 Overview

CampusFlow is a modern full-stack student productivity platform that centralizes academic planning and career tracking into a single application.

Instead of managing assignments, internships, deadlines, and study resources across multiple tools, CampusFlow provides one secure dashboard where students can organize everything efficiently.

The application follows modern full-stack development practices with JWT authentication, RESTful APIs, responsive UI, and scalable architecture.

---

# ✨ Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Encryption
- Protected APIs
- User-specific data isolation

---

### 📊 Dashboard

- Personalized dashboard
- Assignment statistics
- Internship statistics
- Upcoming deadlines
- Quick overview cards

---

### 📝 Assignment Manager

- Create assignments
- Update assignments
- Delete assignments
- Mark assignment status
- Track submission deadlines

---

### 💼 Internship Tracker

- Add internship applications
- Track application status
- Company information
- Interview tracking
- Notes management

---

### 📅 Deadline Manager

- Create deadlines
- Update deadlines
- Delete deadlines
- Track upcoming events
- Deadline reminders (future enhancement)

---

### 📚 Study Resources

- Store useful resources
- Organize notes
- Save documentation links
- Categorize study materials

---

### 👤 User Profile

- View profile
- Update profile
- Secure user management

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

---

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data MongoDB
- JWT Authentication
- REST APIs
- Maven

---

## Database

- MongoDB

---

## Development Tools

- IntelliJ IDEA
- Visual Studio Code
- Postman
- MongoDB Compass
- Git
- GitHub

---

# 🏗 Architecture

```
                React + TypeScript
                        │
                Axios REST API Calls
                        │
                Spring Boot Backend
                        │
         Spring Security + JWT Authentication
                        │
              Spring Data MongoDB
                        │
                    MongoDB
```

---

# 📁 Project Structure

```
CampusFlow
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── hooks
│   ├── assets
│   └── utils
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   ├── dto
│   ├── security
│   ├── config
│   ├── exception
│   └── util
│
└── README.md
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
Spring Security
      │
Generate JWT Token
      │
      ▼
Frontend Stores Token
      │
      ▼
Protected REST APIs
      │
      ▼
JWT Validation Filter
      │
      ▼
Authorized Request
```

---

# 🚀 REST API Overview

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

## Dashboard

```
GET /api/dashboard
```

---

## Assignments

```
GET

POST

PUT

DELETE
```

---

## Internships

```
GET

POST

PUT

DELETE
```

---

## Deadlines

```
GET

POST

PUT

DELETE
```

---

## Study Resources

```
GET

POST

PUT

DELETE
```

---

## User Profile

```
GET

PUT
```

---

# 🔒 Security Features

- JWT Authentication
- Password Encryption
- Protected Endpoints
- Stateless Authentication
- Spring Security Filters
- User-specific Data Access

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/campusflow.git
```

---

## Backend

```bash
cd backend
```

```bash
mvn clean install
```

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

## Frontend

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 💾 Database

CampusFlow uses MongoDB.

Run MongoDB locally using MongoDB Compass or MongoDB Community Server before starting the backend.

---

# 📷 Screenshots

> Screenshots will be added soon.

- Login Page
- Register Page
- Dashboard
- Assignment Manager
- Internship Tracker
- Deadline Manager
- Study Resources
- User Profile

---

# 🌟 Future Enhancements

- Email Notifications
- Calendar Integration
- AI Study Assistant
- Smart Deadline Predictions
- Resume Builder
- Analytics Dashboard
- Dark Mode
- Mobile App
- Cloud Deployment
- Multi-user Collaboration

---

# 🎯 Learning Outcomes

This project demonstrates:

- Full Stack Development
- REST API Design
- Spring Boot
- Spring Security
- JWT Authentication
- MongoDB Integration
- React Development
- TypeScript
- CRUD Operations
- Repository Pattern
- MVC Architecture
- Authentication & Authorization
- Responsive UI Development
- Clean Code Practices
- Git & GitHub Workflow

---

# 📌 Resume Highlights

✔ Full-Stack SaaS Development

✔ Spring Boot REST APIs

✔ JWT Authentication

✔ MongoDB Integration

✔ React + TypeScript

✔ Secure User Authentication

✔ Responsive UI

✔ CRUD Operations

✔ Production-ready Project Structure

---

# 📄 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

**Chandhana A**

Computer Science Engineering Student

GitHub: https://github.com/chandhanaa1509


---

⭐ If you found this project useful, consider giving it a star!