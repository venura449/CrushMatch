# 💕 CrushMatch

Find your perfect match with AI-powered compatibility!

---

## Project Description
CrushMatch is a beautiful, responsive matchmaking web app that collects user information and personality quiz answers, then sends the data to a Google Apps Script endpoint (e.g., to store in Google Sheets). The UI is built with Tailwind CSS and features a multi-step form, animated backgrounds, and a modern, mobile-friendly design.

Check it out live at: [https://crush-match.vercel.app/](https://crush-match.vercel.app/)

---

## Features
- Multi-step quiz with progress bar
- Collects user info and 10 personality questions
- Animated, modern UI (Tailwind CSS)
- Responsive and mobile-friendly
- Sends all data as JSON to a Google Apps Script endpoint
- Loading and success screens

---

## Setup Instructions

### 1. Clone or Download
Download or clone this repository to your local machine.

### 2. Run a Local Web Server (Important for CORS)
**Do NOT open `index.html` directly in your browser!**

Modern browsers block cross-origin requests when opening files directly (`file://` protocol). To avoid errors, serve your files through a local web server.

#### Using Node.js (Recommended)
If you have Node.js installed:
```bash
npx serve .
# or
npx http-server .
