# 🏥 Renal Bloom – Medical Appointment Booking System

Renal Bloom is a full-stack medical website designed for clinics to manage patient appointments efficiently.  
It includes a patient-facing website, appointment booking form, and a secure admin dashboard to manage all bookings.

This project was built using **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Live Demo
Frontend: https://monikaamoanes.github.io/renal-bloom-website/  
Backend: (Coming soon after deployment)

---

## ⭐ Features

### 🧑‍⚕️ Patient Website
- Beautiful, responsive UI  
- View services and doctors  
- Book an appointment online  
- Multi-language support (English / Arabic)  
- Automatically saves appointment into database  

### 🔐 Admin Panel
- Secure admin login  
- View all appointments  
- Change appointment status:  
  - Pending  
  - Confirmed  
  - Cancelled  
  - Completed  
- Automatic email confirmations *(coming soon)*  

### 🗄️ Backend & Database
- REST API built with Express  
- MongoDB database with Mongoose models  
- Appointment, User, Doctor, and Service models  
- JSON Web Token (JWT) authentication  
- Protected admin routes  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Context API (Auth)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)


---

## 📄 API Endpoints (Summary)

### **Auth**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user (admin only) |
| POST | `/api/auth/login` | Login and receive JWT |

### **Appointments**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/appointments` | Create new patient appointment |
| GET | `/api/appointments` | Get all appointments (admin only) |
| GET | `/api/appointments/me` | Get user's appointments |
| PUT | `/api/appointments/:id/status` | Update appointment status (admin only) |

---


