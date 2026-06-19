# 🔐 Node.js JWT Authentication

A secure REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT** for user authentication.

## 🚀 Features

- User Signup & Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- MVC Architecture

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JWT

## 📁 Project Structure

```text
nodejs-authentication/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── models/
│   └── user.js
│
├── routes/
│   └── authRoutes.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## ⚙️ Installation

```bash
git clone https://github.com/amanmissra302/nodejs-authentication.git

cd nodejs-authentication

npm install

npm run dev
```

## 🔑 Environment Variables

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/profile` | Protected Route |

## 🔐 Authentication Flow

```text
Client
   │
   ▼
Login
   │
   ▼
JWT Token
   │
   ▼
Authorization Header
   │
   ▼
Auth Middleware
   │
   ▼
jwt.verify()
   │
   ▼
Protected Route
```

---
Built with ❤️ using Node.js & Express.
