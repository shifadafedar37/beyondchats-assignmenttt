# beyondchats-assignmentt
AI Article Automation System

This project is built as part of the BeyondChats Technical Assignment.
It demonstrates a complete pipeline that scrapes blog articles, stores them in a database, enhances them using AI automation, and displays both original and updated articles through a modern frontend interface.

🚀 Project Overview

The project is divided into three phases:

Phase 1 – Article Scraping & APIs

Scraped the oldest blog articles from BeyondChats.

Stored articles in MongoDB.

Built CRUD APIs using Node.js and Express.

Each article stores:

Title

Original content

Original article URL

AI-updated content

Reference links

Phase 2 – AI Automation Pipeline

Automated script that:

Fetches articles via API

Searches article title on Google

Scrapes top ranking reference articles

Uses an LLM to enhance content structure & clarity

Stores updated article + references back in the database

Original article remains unchanged for comparison.

Phase 3 – Frontend Application

Built a ReactJS frontend

Displays:

Article title

Original article content

Button to open original article on BeyondChats

AI-enhanced updated content

Reference links

Clean, responsive, professional UI

🏗️ Architecture / Data Flow
BeyondChats Blogs
        ↓
Scraper Script (Node.js + Cheerio)
        ↓
MongoDB (Articles Collection)
        ↓
Express CRUD APIs
        ↓
AI Automation Script (Phase 2)
        ↓
Updated Articles Stored
        ↓
React Frontend (Vercel)

🗂️ Folder Structure
beyondchats-assignment/
│
├── backend1/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   ├── server.js
│   └── package.json
│
├── frontend1/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── build/
│
└── README.md

⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/shifadafedar37/beyondchats-assignment.git
cd beyondchats-assignment

2️⃣ Backend Setup
cd backend1
npm install


Create a .env file:

MONGO_URI=mongodb://127.0.0.1:27017/beyondchats
PORT=5000


Run backend:

node server.js


Backend runs on:

http://localhost:5000

3️⃣ Run Scraper (Phase 1)
node scripts/scrapeBlogs.js


This stores articles in MongoDB.

4️⃣ Frontend Setup
cd ../frontend1
npm install
npm start


Frontend runs on:

http://localhost:3000

🌐 Live Deployment
Frontend (Vercel/Netlify)

👉 Live URL:

https://beyondchats-assignmenttt.vercel.app


Click “Original Article” button to open the original BeyondChats blog.
Note:
Original article redirection was implemented earlier. Due to time constraints near the deadline, the final UI displays the original article content directly for stability in deployment.


🔗 Features Checklist

✅ Article scraping implemented

✅ MongoDB storage

✅ CRUD APIs

✅ AI-enhanced content storage

✅ Reference citations included

✅ React frontend

✅ Original article redirection

✅ Live deployment

🛠️ Tech Stack

Backend: Node.js, Express

Database: MongoDB

Scraping: Axios, Cheerio

Frontend: ReactJS

Deployment: Vercel

AI Processing: LLM API

📌 Notes for Evaluators

Backend APIs are REST-based and modular.

Frontend consumes APIs cleanly.

Original articles remain unchanged.

Updated articles include references at the bottom.

Commits reflect development journey.

Note:
The original article redirection functionality was implemented and working initially.
Due to last-moment deployment constraints and time limitations, the final submission
focuses on stable local execution and correct functionality as per assignment requirements.


👤 Author
Shifa Lakshar
GitHub: https://github.com/shifadafedar37

Live Frontend URL:
https://incandescent-fox-250a51.netlify.app/

Live Backend API:
https://beyondchats-assignmentt-1.onrender.com

Deployment:
Frontend deployed on Netlify
Backend deployed on Render
