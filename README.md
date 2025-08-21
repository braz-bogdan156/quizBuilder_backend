# Quiz Builder – Backend

## 🚀 Overview
Backend API for the **Quiz Builder** application.  
Implements CRUD operations for quizzes stored in **MongoDB**.  

---

## 🛠 Tech Stack
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- dotenv, cors

---

## ⚙️ Setup & Run

### 1. Install dependencies
```bash
cd backend
npm install
2. Configure environment
Create a .env file in backend/:

.env

MONGO_URI=mongodb://127.0.0.1:27017/quizbuilder
PORT=5000
👉 Use MongoDB Atlas if you don’t have local MongoDB.

3. Run dev server
bash

npm run dev
Server will start at:
http://localhost:5000

📌 API Endpoints, Local testing in the Postman
1. Create Quiz
POST /quizzes

Request body:

json

{
  "title": "Sample Quiz",
  "questions": [
    { "text": "Is Earth round?", "type": "boolean" },
    { "text": "Capital of France?", "type": "input" },
    { "text": "Which are fruits?", "type": "checkbox", "options": ["Apple", "Carrot", "Banana"] }
  ]
}
Response:

json

{
  "_id": "64f7d12345",
  "title": "Sample Quiz",
  "questions": [...],
  "createdAt": "...",
  "updatedAt": "..."
}
2. Get All Quizzes
GET /quizzes

Response:

json

[
  { "id": "64f7d12345", "title": "Sample Quiz", "questionCount": 3 }
]
3. Get Quiz by ID
GET /quizzes/:id

Response:

json

{
  "_id": "64f7d12345",
  "title": "Sample Quiz",
  "questions": [...]
}
4. Delete Quiz
DELETE /quizzes/:id

Response:

json

{ "success": true }
📂 Project Structure
bash

backend/
├── src/
│   ├── config/        # DB connection
│   ├── controllers/   # Express controllers
│   ├── services/      # Business logic
│   ├── routes/        # API routes
│   ├── models/        # Mongoose schemas
│   └── server.ts      # Entry point
├── .env
├── tsconfig.json
└── package.json