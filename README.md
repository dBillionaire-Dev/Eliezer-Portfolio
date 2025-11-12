# 🌐 Eliezer Portfolio: Impulse Grid

A fully dynamic and secure professional portfolio application for displaying creative projects, built with the MERN stack principles and featuring a secure, JWT-protected administrative dashboard for content management.

| Status | Live Demo |
| :--- | :--- |
| **Complete** | [impulse-grid.vercel.app](https://impulse-grid.vercel.app/) |

-----

## 📖 Project Overview

This repository contains the complete codebase for a modern design portfolio website. The application is built as a single-page application (SPA) with a strong focus on user experience, responsive design, and easy content management.

### Key Features

  * **Dynamic Filtering:** Portfolio items are dynamically fetched from the database and categorized into pages like **Brand Identity**, **Poster Design**, and **Business/Ad Creatives**.
  * **Secure Admin Panel:** A dedicated, token-protected administrative section allows the owner to securely manage all content.
  * **Image Uploads:** Projects support image file uploads handled by the backend.
  * **Responsive Design:** Utilizes **Tailwind CSS** for a modern, mobile-first, and highly customizable UI.
  * **Contact Management:** A client-facing contact form sends messages that are stored in the database and displayed in the Admin Dashboard.

-----

## 🛠️ Tech Stack

This project follows a full-stack architecture, combining powerful, modern JavaScript tools.

### Frontend

| Technology | Description |
| :--- | :--- |
| **React** | Core library for building the user interface. |
| **TypeScript** | Used for type safety and code reliability. |
| **Vite** | Fast development environment and build tool. |
| **React Router** | For client-side navigation and protected routing (`AdminLayout`). |
| **Axios** for API communication. |
| **Tailwind CSS** | Utility-first CSS framework for rapid styling. |

### Backend & Database

| Technology | Description |
| :--- | :--- |
| **Node.js** | JavaScript runtime environment. |
| **Express.js** | Minimalist web framework for API routing and middleware. |
| **MongoDB** | Cloud-hosted NoSQL database service. |
| **Mongoose** | ODM (Object Data Modeling) library for MongoDB. |
| **JWT** | JSON Web Tokens for secure, stateless authentication in the Admin section. |
| **CORS** configuration for cross-origin communication. |
| **Multer** | Middleware for handling `multipart/form-data` (file uploads). |

-----

## ⚙️ Installation and Setup

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

  * Node.js (v18+)
  * npm or Yarn
  * MongoDB Atlas Account (to get a connection URI)

### 1\. Clone the Repository

```bash
git clone https://github.com/dBillionaire-Dev/Eliezer-Portfolio.git
cd Eliezer-Portfolio
```

### 2\. Backend Setup (`/server`)

1.  Navigate to the backend directory:
    ```bash
    cd server
    npm install
    ```
2.  Create a file named `.env` in the `/server` directory and add your environment variables:
    ```env
    # Database
    MONGO_URI="YOUR_MONGODB_ATLAS_CONNECTION_STRING" 

    # Authentication
    JWT_SECRET="YOUR_STRONG_SECRET_KEY"

    # Server configuration
    PORT=3000

    # CORS (For local development, use your client's local port)
    NODE_ENV=development
    CLIENT_URL=http://localhost:5173 
    ```
3.  Start the backend server:
    ```bash
    npm start
    ```
    The server should run on `http://localhost:3000`.

### 3\. Frontend Setup (`/`)

1.  Navigate back to the project root:
    ```bash
    cd ..
    npm install
    ```
2.  Create a file named `.env` (or `.env.local` depending on your Vite config) in the **root directory** and set the backend API URL:
    ```env
    VITE_API_URL="http://localhost:3000"
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The client application should now be accessible at `http://localhost:5173` (or the port specified by Vite).

-----

## 🌐 Deployment

The application is split into two services deployed separately:

  * **Frontend (Vercel):** The React application is hosted on Vercel, which handles static asset serving and fast global delivery.
  * **Backend (Render):** The Node.js/Express API is hosted on Render, which manages the server, file uploads (Multer), and database connectivity.
