# Deployment Guide for TubeCourse

You can deploy this application easily for **free** using **Render** (or similar platforms like Railway/Heroku).

Since we configured the project as a "Monorepo" (Backend serves Frontend), you only need to deploy **one service**.

## 🚀 Deploy on Render (Recommended)

1.  **Push your latest code to GitHub.**
2.  Go to [Render.com](https://render.com) and create a **New Web Service**.
3.  Connect your GitHub repository.
4.  Configure the settings:

    *   **Name**: `tubecourse-app` (or any unique name)
    *   **Env**: `Node`
    *   **Root Directory**: `.` (Leave empty or dot)
    *   **Build Command**:
        ```bash
        cd client && npm install && npm run build && cd ../server && npm install
        ```
    *   **Start Command**:
        ```bash
        cd server && node index.js
        ```

5.  **Environment Variables**:
    Click "Advanced" or "Environment" and add these:

    | Key | Value (Copy from your local .env) |
    | :--- | :--- |
    | `MONGO_URI` | `mongodb+srv://...` |
    | `JWT_SECRET` | `(Paste your secret or generate a new one)` |
    | `GEMINI_API_KEY` | `(Your Google Gemini API Key)` |
    | `YOUTUBE_API_KEY` | `(Your YouTube API Key)` |
    | `NODE_ENV` | `production` |

6.  **Click "Create Web Service"**.

Render will now:
1.  Install frontend dependencies & Build the React app.
2.  Install backend dependencies.
3.  Start the server.
4.  Your app will be live at `https://your-app-name.onrender.com`!

## 🧪 Local Production Test
Before deploying, you can test the "production build" locally:

1.  **Build Frontend**:
    ```bash
    cd client
    npm run build
    ```
2.  **Run Server**:
    ```bash
    cd server
    node index.js
    ```
3.  **Visit**: `http://localhost:5000`
    You should see the full app working without the Vite development server running.
