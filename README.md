# 💕 CrushMatch

Find your perfect match with AI-powered compatibility!

---

## Project Description
CrushMatch is a beautiful, responsive matchmaking web app that collects user information and personality quiz answers, then sends the data to a Google Apps Script endpoint (for example, to store in Google Sheets). The UI is built with Tailwind CSS and features a multi-step form, animated backgrounds, and a modern, mobile-friendly design.

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

### 2. Install a Local Web Server (Required for CORS)
**Do NOT open `index.html` directly in your browser!**
Browsers block cross-origin requests from `file://` origins. You must serve the file from `http://localhost` or similar.

#### Using Node.js (Recommended)
If you have Node.js installed:
```bash
npx serve .
# or
npx http-server .
```

#### Using Python 3
```bash
python -m http.server 8000
```

#### Using VSCode Live Server Extension
- Install the "Live Server" extension in VSCode
- Right-click `index.html` and select "Open with Live Server"

### 3. Open in Browser
Go to `http://localhost:8000/index.html` (or the port shown in your terminal)

---

## Usage
1. Fill in your basic information and answer all quiz questions.
2. Click "Next" to proceed through the steps.
3. On the last step, click "Finish & Save".
4. Your data will be sent as JSON to the configured Google Apps Script endpoint.

---

## Customization
- **Change the Google Apps Script endpoint:**
  - In `index.html`, find the `fetch` URL in the `submitToMongo` function and replace it with your own endpoint.
- **Change questions or options:**
  - Edit the HTML for each step/question.
- **Change styles:**
  - Modify Tailwind classes or add your own CSS in the `<style>` block.

---

## Troubleshooting

### CORS Errors
If you see errors like:
```
Access to fetch at 'https://script.google.com/macros/...' from origin 'null' has been blocked by CORS policy
```
- **Solution:** Always serve your site from a local web server (see Setup above).
- If you still get CORS errors, your Google Apps Script endpoint may not allow cross-origin requests. You can use a CORS proxy for testing (not recommended for production):

```js
const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent("https://script.google.com/macros/s/AKfycbyZVgTsadWu83G3EY7uPQKAnhSXIKAGVdl4SX-i0Xgho5vonexX0w8x3H9eqKOiWeKl/exec");
fetch(proxyUrl, { ... })
```

### Data Not Appearing in Google Sheet
- Make sure your Google Apps Script is published as a web app and set to "Anyone, even anonymous".
- Check your script for errors and test with Postman or curl.

---

## License
MIT 