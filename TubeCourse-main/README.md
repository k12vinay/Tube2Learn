# Tube2Learn - AI Course Generator

Tube2Learn is an intelligent SaaS platform that transforms educational YouTube videos and playlists into structured, interactive courses. Powered by Google's **Gemini 2.0 Flash** AI, it automatically generates modules, lessons, quizzes, and practical projects from video content.

## 🚀 Features

-   **Dashboard**: Manage your generated courses, view progress, and delete old courses.
-   **Course Generator**:
    -   Support for **YouTube Playlists**: Creates full multi-module courses.
    -   Support for **Single Videos**: Creates focused mini-courses.
-   **Interactive Learning**:
    -   AI-generated summaries for every lesson.
    -   **Quizzes**: Auto-generated MCQ quizzes (Medium & Hard difficulty) to test knowledge.
    -   **Projects**: Practical coding projects/assignments generated based on the video content.
-   **Authentication**: Secure JWT-based Login and Registration.
-   **Modern UI**: Built with React, Tailwind CSS, and Lucide Icons for a premium experience.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite), TypeScript, Tailwind CSS, Zustand (State Management), Axios.
-   **Backend**: Node.js, Express.js.
-   **Database**: MongoDB (Mongoose).
-   **AI & APIs**: Google Gemini 2.0 Flash, YouTube Data API v3.

## ⚙️ Environment Setup

To run this project locally, you need to configure environment variables.

### 1. Backend (`server/.env`)
Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_string
GEMINI_API_KEY=your_google_gemini_api_key
YOUTUBE_API_KEY=your_google_youtube_api_key
```

### 2. Frontend (`client/.env`)
Create a `.env` file in the `client` directory:

```env
VITE_API_BASE=http://localhost:5000/api
```

## 🏃‍♂️ Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/k12vinay/Tube2Learn.git
    cd Tube2Learn
    ```

2.  **Install Dependencies:**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Start the Application:**
    You need to run both backend and frontend terminals.

    **Backend Terminal:**
    ```bash
    cd server
    npm run dev
    ```

    **Frontend Terminal:**
    ```bash
    cd client
    npm run dev
    ```

4.  **Open App:**
    Visit `http://localhost:5173` in your browser.

## 📦 Deployment

The application is configured to serve the frontend static files from the backend, allowing for single-service deployment (e.g., on Render, Railway).

1.  **Build Frontend:**
    ```bash
    cd client
    npm run build
    ```
    This creates the `dist` folder.

2.  **Deploy Server:**
    When deploying the `server` folder, ensure the `client/dist` folder is also included (or built during the CI/CD process). The `server/index.js` acts as the entry point for both API and Frontend serving.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
