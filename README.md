# 📇 Contacts App (React + Google Sheets + PWA)

A modern, responsive **Contacts Management Web App** built with **React (Vite)** that fetches data from **Google Sheets**, groups it by category, and works **offline using PWA + caching**.

---

## 🚀 Features

* 📊 Fetch contacts directly from **Google Sheets**
* 🗂️ Group contacts by **Category**
* 🔍 Real-time **Search filter**
* 🔐 Optional **Category password protection**
* 📱 Fully responsive UI
* ⚡ **Progressive Web App (PWA)** support
* 🌐 **Offline mode** using cached data
* 🔄 Auto-update service worker

---

## 🧠 Tech Stack

* ⚛️ React (Vite)
* 🌐 Google Sheets (Data Source)
* 📦 vite-plugin-pwa
* 🎨 CSS (Custom Styling)
* 🧩 React Icons

---

## 📁 Project Structure

```
contacts-react/
│
├── public/
│   └── icon.png
│
├── src/
│   ├── api.js            # Fetch + transform + cache logic
│   ├── App.jsx           # Main UI logic
│   ├── main.jsx          # Entry point + PWA registration
│   ├── components/
│   │   ├── Buttons.jsx
│   │   └── Contacts.jsx
│   └── index.css
│
├── .env
├── vite.config.js
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```
VITE_SHEET_ID=your_google_sheet_id
```

> ⚠️ Note: This is frontend-only, so env variables are visible in browser.

---

## 📡 Data Source (Google Sheets)

* Make your sheet **public**
* Format columns like:

```
Category | ID/Symbol | Name | Phone
```

---

## 🔄 Data Flow

```
Google Sheets → Fetch API → Transform → Cache (localStorage) → UI
```

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

---

## 🌐 Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 PWA (Offline Support)

This app uses **vite-plugin-pwa** to:

* Cache app shell
* Cache API response (via localStorage)
* Enable offline access

### 🟢 Online:

* Fetch fresh data
* Update cache

### 🔴 Offline:

* Load cached UI
* Load cached contacts

---

## 🧪 Testing Offline Mode

1. Open DevTools → Network
2. Enable **Offline**
3. Refresh page

✅ App should still work using cached data

---

## 🔐 Password Protection (Optional)

* Add passwords via `.env`:

```
VITE_PASS_CATEGORYNAME=your_password
```

* Prompt appears when clicking category

---

## ⚠️ Limitations

* ❌ Not secure (frontend-only passwords)
* ❌ Requires first load with internet
* ❌ Google Sheets must be public

---

## 🚀 Deployment

### 🔹 Vercel / Netlify

1. Push to GitHub
2. Import project
3. Deploy

---

## 💡 Future Improvements

* 🔄 Auto sync when back online
* 📡 Background updates
* 🟢 Offline status indicator
* 🔐 Backend authentication
* 📱 Native mobile wrapper (PWA install)

---

## 👨‍💻 Author

**JGKrishna**
---