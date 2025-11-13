# 🏡 HomeNest – Real Estate Listing Platform

### 🌐 Live Site URL

🔗 [https://homenest-client.netlify.app](https://home-nest-b12a10.netlify.app)

---

## 🧩 Project Overview

**HomeNest** is a modern real estate listing platform where users can **browse,
search, and manage property listings** for rent or sale. Property owners can
easily add, update, and manage their listings, while users can explore all
properties with rich filters and dynamic sorting.

---

## 🚀 Features

✅ **1. User Authentication & Authorization**

- Email/Password & Google Login via Firebase
- Protected Routes (Add Property, My Properties, My Ratings)
- Persistent Login (User stays logged in on refresh)

✅ **2. Dynamic Real Estate Listings**

- Fully CRUD-enabled property management system
- Add, Update, Delete, and View Property Details
- MongoDB-powered dynamic data fetching

✅ **3. Rating & Review System**

- Authenticated users can rate and review properties
- View personal ratings on the “My Ratings” page

✅ **4. Interactive UI & UX**

- Responsive layout for all devices
- Custom SweetAlert/Toast messages (no default alerts!)
- Light/Dark Mode toggle

✅ **5. Smart Search & Sorting**

- Search properties by name
- Sort by price or posted date (backend sorting via API)

---

## 🧠 Tech Stack

### 💻 Frontend (Client)

- **React.js (Vite)**
- **React Router DOM**
- **Axios**
- **Firebase Authentication**
- **Tailwind CSS**
- **Framer Motion**
- **React Rating / SweetAlert2 / React Toastify**
- **Tanstack Query (optional)**

### ⚙️ Backend (Server)

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Cors & Dotenv**
- **Firebase Admin SDK (optional for token verification)**

---

## 🔐 Private Routes

| Route            | Description                                      |
| ---------------- | ------------------------------------------------ |
| `/add-property`  | Add a new property listing                       |
| `/my-properties` | View, Update, Delete user’s own properties       |
| `/my-ratings`    | View ratings and reviews made by the user        |
| `/property/:id`  | View full property details (with rating section) |

---

## 🧾 CRUD Operations

| Action     | Description                                |
| ---------- | ------------------------------------------ |
| **Create** | Add new property with dynamic form         |
| **Read**   | Fetch and display all or single properties |
| **Update** | Edit property data via form or modal       |
| **Delete** | Remove property with confirmation alert    |

---

## 🏠 Home Page Sections

1. **Hero Slider (3 slides)**
2. **Featured Properties (6 newest)**
3. **Why Choose Us (static)**
4. **Extra Sections:**
   - Testimonials / Customer Reviews
   - Our Partners / Blog Preview

---

## 💡 Additional Features

- 404 Not Found Page
- Loading Spinners during data fetching
- Firebase domain authorization (for Netlify/Surge hosting)
- Error-free SPA routing (reload-safe)
- Consistent design, spacing, and typography

---

## ⭐ Challenges Implemented

- Dark / Light Mode Toggle
- Search and Sort (Backend)
- Protected Routes (JWT + Firebase Auth)
- Dynamic Toast/SweetAlert Messages
