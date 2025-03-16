# Student Data Lookup

**🔗 Live Demo:** [student-data-lookup.vercel.app](https://student-data-lookup.vercel.app/)

## 📌 Project Overview

Student Data Lookup is a React.js-based web application that allows users to search for student information using their Aadhar number. The frontend is built using **React.js** and interacts with a backend API to fetch data.

## 🚀 Features

✅ Search student data using **Aadhar Number**  
✅ Display student details dynamically  
✅ Error handling for invalid or missing student records  
✅ Link to update missing records  
✅ Fully responsive and mobile-friendly UI  

---

## 📂 Project Structure

```
├── student-data-lookup/           # React.js Frontend
│   ├── src/                       # Source code (React Components, Pages, Styles)
│   ├── public/                    # Static assets (favicon, images, index.html)
│   ├── package.json               # Project dependencies
│   ├── .gitignore                  # Ignore unnecessary files
│   └── README.md                   # Documentation
│  
└── README.md                      # Main documentation file
```

---

## 🛠️ Installation & Setup

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/dyavanpallyrohankumar/Student-data-lookup.git
cd Student-data-lookup
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the necessary API credentials. Example:
```env
REACT_APP_API_URL=your_backend_endpoint_here
REACT_APP_API_KEY=your_secret_key_here
```

> **Note:** Ensure that `.env` is added to `.gitignore` to keep sensitive data secure.

### 4️⃣ Run the Project
```sh
npm start
```
The application will be available at `http://localhost:3000/`.

---

## 🌍 Deployment
This project is deployed on **Vercel**.

🔗 **Live URL:** [student-data-lookup.vercel.app](https://student-data-lookup.vercel.app/)

To deploy updates:
```sh
git add .
git commit -m "Updated frontend"
git push origin main
```
Vercel will automatically rebuild and deploy changes.

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

🎯 **Developed & Maintained by:** [Dyavanpally Rohankumar](https://github.com/dyavanpallyrohankumar)

