<h1 align="center">🎵 VIBE Music</h1>

<p align="center">
  <b>A Full-Stack Music Streaming Platform</b><br>
  Stream music, upload songs, create albums, and enjoy a seamless listening experience.
</p>

<p align="center">
  <a href="https://vibe-my-music.vercel.app"><img src="https://img.shields.io/badge/Live-Demo-success?style=for-the-badge"></a>
  <a href="https://github.com/karan-gh/vibe-music-client"><img src="https://img.shields.io/github/stars/karan-gh/vibe-music-client?style=for-the-badge"></a>
  <a href="https://github.com/karan-gh/vibe-music-client/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"></a>
</p>

---

# 🌐 Live Demo

### 🚀 https://vibe-my-music.vercel.app


# ✨ Features

## 👤 User

- Secure Registration & Login
- JWT Authentication
- Persistent Login using HTTP-only Cookies
- Browse all songs
- Stream music instantly
- Responsive Music Player
- Automatic Queue Management
- Cyclic Next & Previous Navigation

## 🎤 Artist

- Upload Songs
- Create Albums
- Organize Music Library

---

# 🎵 Music Player

- ▶ Play
- ⏸ Pause
- ⏭ Next Song
- ⏮ Previous Song
- 🔁 Infinite Queue Loop
- 🎚 Seek Bar
- ⏱ Current Time & Duration
- 🎼 Automatic Next Song Playback

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Context API
- Axios
- React Hot Toast
- React Icons
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer

## Cloud

- MongoDB Atlas
- ImageKit
- Render
- Vercel

---

# 📂 Project Structure

```
vibe-music-client
│
├── public
├── screenshots
├── src
│   ├── assets
│   ├── components
│   ├── context
│   ├── pages
│   ├── styles
│   ├── utils
│   └── App.jsx
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone the repositories

```bash
git clone https://github.com/karan-gh/vibe-music-client.git

git clone https://github.com/karan-gh/vibe-music-server.git
```

---

## Backend

```bash
cd vibe-music-server

npm install

npm run dev
```

Create `.env`

```env
MONGO_URI=YOUR_MONGO_URI

JWT_SECRET=YOUR_SECRET

IMAGEKIT_PRIVATE_KEY=YOUR_IMAGEKIT_PRIVATE_KEY

FRONTEND_URL=http://localhost:5173

NODE_ENV=development
```

---

## Frontend

```bash
cd vibe-music-client

npm install

npm run dev
```

Create `.env`

```env
VITE_API_URL=http://localhost:3000/api
```

---

# 🔐 Authentication

- JWT Tokens
- HTTP-only Cookies
- Protected Routes
- Artist Role Authorization

---

# 🌍 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| File Storage | ImageKit |

---

# 📌 Upcoming Features

- 🔍 Search Songs
- ❤️ Like Songs
- 🎶 Playlists
- 🎵 Recently Played
- 🔀 Shuffle
- 🔁 Repeat
- 🔊 Volume Control
- 📝 Lyrics Support
- 🤖 AI Music Recommendations

---

# 💻 Backend Repository

### API Source Code

https://github.com/karan-gh/vibe-music-server

---

# 👨‍💻 Author

### Karan Rabidas

- GitHub: https://github.com/karan-gh
- B.Tech, IIT Guwahati

---

# ⭐ Show Your Support

If you liked this project,

⭐ Star the repository

🍴 Fork it

🛠 Contribute

---

<p align="center">
Made with ❤️ using the MERN Stack
</p>