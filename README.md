# 🔗 URL Shortener

A simple and efficient URL shortening service built with Node.js, Express, and MongoDB. It converts long, cluttered URLs into clean, shareable short links.

---

## 🚀 Features

- 🔒 Generates short, unique URLs
- 🌐 Redirects to original long URL
- 🧠 Built with Express, Node.js, MongoDB, and Mongoose
- 📦 RESTful API structure
- ✅ Validates long URLs before shortening

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Environment Config:** dotenv
- **Other Tools:** Postman (for testing), Git

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/huh-prince/urlShortner.git
cd backend

```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file:**

Create a `.env` file in the root folder with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/urlShortener
PORT=5000
BASE_URL=http://localhost:5000
```

4. **Start the development server:**

```bash
npm run dev
```

The server will start on `http://localhost:5000`.

---

## 📌 API Endpoints

### 🔹 `POST /create`

Create a short URL.

- **Request Body (JSON):**
```json
{
  "url": "https://example.com/some/very/long/path"
}
```

- **Response (JSON):**
```json
{
  "shortURL": "http://localhost:5000/4huJ2Iz"
}
```

---

### 🔹 `GET /:shortURL`

Redirect to the original URL.

Example:  
`http://localhost:5000/4huJ2Iz` → redirects to `https://example.com/...`

---

## 🗂️ Project Structure

```
url-shortener/
├── models/
│   └── ShortURL.js
├── routes/
│   └── urlRoutes.js
├── controllers/
│   └── urlController.js
├── .env
├── .gitignore
├── server.js
└── README.md
```

---

## ✅ Future Improvements

- Click analytics and reporting
- Custom aliases for short URLs
- Frontend interface
- User accounts and dashboards
- Rate limiting & security

---

## 🙌 Author

**PRINCE CHAUDHARY**  
[GitHub](https://github.com/huh-prince) | [LinkedIn](https://www.linkedin.com/in/huh-prince-chaudhary/)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
