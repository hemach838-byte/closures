# 🚀 Score Tracker App

A simple and interactive Score Tracker built using **JavaScript Closures** and **Local Storage**, with a clean UI and persistent data.

---

## 📌 Features

- ➕ Add Score  
- ➖ Subtract Score  
- 🔄 Reset Score  
- 🕒 Action history with timestamps  
- 🗑️ Clear history option  
- 💾 Data persists after page refresh using localStorage  

---

## 🧠 Concepts Learned

### 🔐 Closures
This project uses a closure (`createCounter`) to:
- Maintain private variables (`score`, `history`)
- Avoid global scope pollution
- Manage application state efficiently

---

### 💾 Local Storage

Used browser localStorage to persist data.

#### Store data:

localStorage.setItem("score", JSON.stringify(score));
#### Retrive Data:

JSON.parse(localStorage.getItem("score"));

🔁 How it Works
App loads saved data from localStorage
User performs actions (add/subtract/reset)
Closure updates private state
Data is saved to localStorage
UI updates in real-time
On refresh → data remains the same

🛠️ Technologies Used
HTML
CSS (Flexbox)
JavaScript (Closures, DOM Manipulation, Local Storage)

Live Demo: https://hemach838-byte.github.io/closures/

🙌 Author

Hema – B.Tech CSE Student | Aspiring Web Developer
