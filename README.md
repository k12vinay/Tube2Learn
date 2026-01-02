
# Tube2Learn 🚀  
AI-Powered YouTube Course Generator

## 📌 Overview
Tube2Learn is a full-stack web application that converts YouTube videos and playlists into structured, AI-generated courses.  
It extracts video data using the YouTube Data API and leverages Google Gemini AI to transform transcripts into organized, JSON-based learning modules.

This project aims to make video-based learning more efficient by turning long playlists into readable, course-style content.

---

## 🛠 Tech Stack

### Frontend (Client)
- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint & PostCSS

### Backend (Server)
- Node.js
- Express.js
- YouTube Data API
- Google Gemini AI
- RESTful APIs

---

## 📂 Project Structure

```
TubeCourse-main/
│
├── client/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── server/
│   ├── config/
│   │   ├── genAI.js
│   │   └── youtubeAPI.js
│   ├── models/
│   │   └── Course.js
│   ├── routes/
│   │   ├── courses.js
│   │   └── playlist.js
│   ├── services/
│   │   ├── extractJSON.js
│   │   ├── geminiPrompt.js
│   │   └── youtube.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Features
- Convert YouTube videos & playlists into structured courses
- Fetch video metadata and transcripts using YouTube API
- Generate AI-powered summaries and learning modules
- JSON-based course output for scalability
- Clean, responsive UI with Tailwind CSS
- Modular backend architecture

---

## 🧠 How It Works
1. User submits a YouTube video or playlist URL
2. Backend fetches video data using YouTube Data API
3. Transcripts are processed and sent to Gemini AI
4. AI generates structured course content
5. Output is formatted into JSON and displayed on the frontend

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- YouTube Data API key
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/k12vinay/Tube2Learn.git

# Navigate to project directory
cd TubeCourse-main

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Running the Project

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev
```

---

## 📚 Learning Outcomes
- Full-stack application development
- API integration and data pipelines
- AI prompt engineering
- Clean project structuring
- Frontend–backend communication

---

## 🎯 Use Cases
- Students converting lectures into notes
- Self-learners structuring YouTube tutorials
- Educators creating course material quickly

---

## 📄 License
This project is for educational and learning purposes.

---

## 👤 Author
**Vinay Kumar**  
IIT (ISM) Dhanbad  
GitHub: https://github.com/k12vinay
