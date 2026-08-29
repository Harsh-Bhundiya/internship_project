# Event Feedback Collection System

A full-stack web application built during my internship to collect, store, and analyze attendee feedback for events. Users can browse events, submit star-rated feedback, and view live analytics for each event — average rating, positive feedback percentage, and rating distribution.

**Built entirely from scratch with no frontend framework** (no React/Vue/Angular) and no UI library — every page, interaction, and animation is handwritten HTML, CSS, and vanilla JavaScript, backed by a custom Express/MongoDB API.

## Why no framework?

This project was built to strengthen fundamentals — DOM manipulation, event handling, client-server communication with `fetch`, and state passing between pages (via `localStorage`) — without relying on a framework to abstract these away. It reflects a solid understanding of how the web works underneath the tools most projects use by default.

## Features

- **Event browsing** — dynamic event listing (Hackathon, AI, Web Dev, Data Science categories) with a "give feedback" flow per event
- **Star-rating feedback form** — interactive 5-star input built with vanilla JS (no plugin), with client-side validation (required name, email, and message)
- **Live analytics dashboard** — for any selected event, computes and renders:
  - Average rating
  - Positive feedback percentage (custom weighted formula: full weight for 4★+, half weight for 3★)
  - Full 1–5 star rating distribution
  - Individual review cards with reviewer initials, rating, and comments
- **Cross-page state handling** — selected event carries over from the events page to the feedback form via `localStorage`, without a routing framework

## Tech Stack

**Frontend:** HTML5, CSS3, vanilla JavaScript (no framework, no CSS library)
**Backend:** Node.js, Express
**Database:** MongoDB with Mongoose
**Other:** CORS, method-override

## Architecture

```
frontend/          → static HTML/CSS/JS pages (home, events, feedback, review)
backend/
 ├─ server.js       → Express app, routes, analytics logic
 └─ models/
     └─ schema.js   → Mongoose feedback schema
```

The backend exposes two endpoints:
- `POST /feedback` — stores a new feedback entry
- `GET /feedback?eventname=<name>` — fetches all feedback for an event and returns computed analytics (average rating, positive %, distribution) alongside the raw reviews

All analytics (average, positive-feedback weighting, star distribution) are computed manually in plain JavaScript — no analytics library used.

## Running Locally

```bash
# Backend
cd backend
npm install
node server.js   # runs on http://localhost:8080

# Frontend
cd frontend
# open home.html in a browser, or serve with any static server
```

Requires a local MongoDB instance running on `mongodb://127.0.0.1:27017`.

## Future Improvements

- Move the MongoDB connection string to environment variables
- Replace the multi-page HTML flow with client-side routing
- Add authentication so only verified attendees can submit feedback
- Add pagination for events with a large number of reviews

## About

Built by Harsh Bhundiya as part of an internship project, applying full-stack fundamentals — REST API design, schema modeling, and custom analytics logic — without relying on frontend frameworks or third-party UI libraries.
