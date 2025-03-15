# 📌 Student Data Lookup System

A web-based student data lookup system using **Google Sheets**, **Google Apps Script**, and **React.js**. The system securely fetches student details based on their Aadhaar number and allows users to edit/update their information through a linked form.

## 🚀 Features
- 🔐 **Secure API Access** using a secret key
- 📊 **Google Sheets Integration** for storing student data
- ⚡ **React.js Frontend** for a user-friendly interface
- 🔄 **Dynamic Data Fetching** using Google Apps Script
- 📝 **Edit & Update Data** via a linked Google Form
- ❌ **Error Handling** when data is not found

## 🛠️ Tech Stack
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Google Apps Script
- **Database**: Google Sheets

---

## 📂 Project Structure
```
student-data-lookup/
├── frontend/           # React.js Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .gitignore
│   └── README.md
├── backend/            # Google Apps Script Code
│   ├── script.gs       # Main API logic
│   ├── appsscript.json # Apps Script Manifest
└── README.md
```

---

## 🔧 Setup & Installation

### 🖥️ Frontend (React.js)
```bash
# Clone the repository
git clone https://dyavanpallyrohankumar/Student-data-lookup.git
cd student-data-lookup/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### ⚙️ Backend (Google Apps Script)
1. Open [Google Apps Script](https://script.google.com/) and create a new project.
2. Copy and paste the contents of `script.gs` into the script editor.
3. Deploy the script as a web app and note the API URL.
4. Update the React frontend with the API URL.

---

## 🔗 Usage
1. Enter the Aadhaar number in the input field.
2. Click on "Search" to fetch student details.
3. If found, details will be displayed.
4. If not found, a link to the form will be provided to submit details.
5. Users can also edit existing details using the provided link.

---

## 🛑 .gitignore (Important)
Ensure your repository does not include sensitive files:
```
node_modules/
.env
.DS_Store
package-lock.json
```

---

## 💡 Contributing
Feel free to submit issues and pull requests to improve the project!

📧 For any queries, contact: [Your Email]

---

### ⭐ Star this repo if you found it useful! 🚀

