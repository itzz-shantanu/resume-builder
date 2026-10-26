# Resume Builder - Full Stack Web App

A full-stack web application where users can create, edit, preview, download and email professional resumes. Built with **React**, **Spring Boot** and **MongoDB**, with image uploads, email verification and online payments.

> **Live demo:** https://resume-builder-pi-nine-78.vercel.app/


---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Getting Started (Local Setup)](#getting-started-local-setup)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Features

- **Authentication:** register, login, JWT-protected routes, email verification, resend verification email
- **Resume management:** create, view, update and delete resumes (each user only sees their own)
- **Step-by-step editor** with sections for profile, contact info, work experience, education, skills, projects, certifications, languages and interests
- **3 resume templates** with a theme selector and live preview
- **Image uploads** (profile photo and resume thumbnail) stored on Cloudinary
- **Export options:** download as PDF, print, or email the PDF as an attachment
- **Premium plan payments** through Razorpay (create order, verify payment, order history)
- **Landing page and dashboard** for managing all resumes

## Tech Stack

**Frontend**
- React 19, Vite 6
- Tailwind CSS 4
- React Router DOM 7
- Axios (with a JWT interceptor)
- React Context for user state
- html2canvas, jsPDF, react-to-print (PDF and printing)
- react-hot-toast, lucide-react, react-icons, moment

**Backend**
- Java 21, Spring Boot, Maven
- Spring Web (REST APIs)
- Spring Security with JWT (jjwt)
- Spring Data MongoDB
- Spring Validation and global exception handling
- Spring Mail (SMTP email)
- Spring Boot Actuator (health check)
- Lombok

**Database and third-party services**
- MongoDB / MongoDB Atlas
- Cloudinary (image storage)
- Brevo (SMTP email service)
- Razorpay (payments)

**Tools**
- VS Code, IntelliJ IDEA, Postman, Git and GitHub

## Architecture

```
React (Vite, port 5173)  --HTTP/JSON-->  Spring Boot API (port 8080)  -->  MongoDB
                                                  |
                                                  +--> Cloudinary (images)
                                                  +--> Brevo SMTP (emails)
                                                  +--> Razorpay (payments)
```

The backend follows a layered structure: **controller** (handles requests) -> **service** (business logic) -> **repository** (database access), with **document** and **dto** classes for data models and **security/config** classes for JWT, CORS and service setup.

## Project Structure

```
resume-builder/          # Frontend (React + Vite)
  src/
    pages/               # Landing, Login, SignUp, Dashboard, Edit Resume
    components/          # Reusable UI, resume sections, 3 templates
    context/             # User context
    utils/               # apiPaths.js, axiosInstance.js, pdfGenerator.js

resumebuilderapi/        # Backend (Spring Boot)
  src/main/java/.../
    controller/          # Auth, Resume, Template, Payment, Email
    service/             # Business logic
    repository/          # MongoDB repositories
    document/ + dto/     # Data models
    security/ + config/  # JWT, CORS, Cloudinary, Mongo config
  src/main/resources/
    application.properties
```

## API Endpoints

| Area | Method | Endpoint |
|---|---|---|
| Auth | POST | `/api/auth/register` |
| Auth | POST | `/api/auth/login` |
| Auth | GET | `/api/auth/verify-email?token=...` |
| Auth | POST | `/api/auth/resend-verification` |
| Auth | GET | `/api/auth/profile` |
| Auth | POST | `/api/auth/upload-image` |
| Resumes | GET / POST | `/api/resumes` |
| Resumes | GET / PUT / DELETE | `/api/resumes/{id}` |
| Resumes | PUT | `/api/resumes/{id}/upload-images` |
| Templates | GET | `/api/templates` |
| Payments | POST | `/api/payment/create-order` |
| Payments | GET | `/api/payment/history` |
| Payments | GET | `/api/payment/order/{orderId}` |
| Email | POST | `/api/email/send-resume` |
| Health | GET | `/actuator/health` |

## Getting Started (Local Setup)

### Prerequisites
- Java 21
- Node.js (LTS)
- Git
- MongoDB (local) or a free MongoDB Atlas cluster
- Accounts for Cloudinary, Brevo and Razorpay (free tiers are enough)

### 1. Clone the repositories
```bash
git clone <your-backend-repo-url>
git clone <your-frontend-repo-url>
```

### 2. Run the backend
```bash
cd resumebuilderapi
# set the environment variables (see below), then:
./mvnw spring-boot:run
```
The API starts on `http://localhost:8080`. Check `http://localhost:8080/actuator/health`.

### 3. Run the frontend
```bash
cd resume-builder
npm install
npm run dev
```
The app opens on `http://localhost:5173`.

## Environment Variables

**Backend**

| Variable | Purpose |
|---|---|
| `BREVO_PASSWORD` | SMTP password for sending emails |
| `CLOUDINARY_APISECRET` | Cloudinary API secret |
| `RAZORPAY_KEY` | Razorpay key ID |
| `RAZORPAY_SECRET` | Razorpay key secret |

Also set in `application.properties`: MongoDB URI, `app.base.url`, and a strong private `jwt.secret`.

**Frontend**
- Set `BASE_URL` in `src/utils/apiPaths.js` to your backend URL.

> Never commit real keys or secrets to GitHub.

## Deployment

| Part | Platform |
|---|---|
| Frontend | _Vercel_ |
| Backend | _Render_ |
| Database | _MongoDB Atlas_ |
