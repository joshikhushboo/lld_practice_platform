# DesignLab – LLD Practice Platform

DesignLab is a focused Low-Level Design (LLD) practice platform that helps learners practice object-oriented system design, submit their solutions, receive structured AI feedback, and review previous attempts.

## Problem

LLD practice is easy to start but difficult to evaluate. A learner may design a system such as a Parking Lot or Vending Machine but may not know whether their classes, responsibilities, relationships, abstractions, and edge-case handling are appropriate.

DesignLab addresses this by providing a simple practice loop:

Choose Problem → Design → Submit → Evaluate → Review → Try Again

## MVP Features

- Browse LLD practice problems
- Start a practice attempt
- Submit a structured LLD design
- Store submissions in MongoDB
- AI-powered evaluation using Gemini
- Structured feedback based on a fixed rubric
- Overall score
- Evidence, concerns and suggestions for each criterion
- Attempt history
- Review previous feedback
- Try another problem
- Evaluation failure handling

## LLD Problems

The MVP contains problems such as:

- Parking Lot System
- Vending Machine
- Elevator System
- Library Management System

## Evaluation Rubric

Each submission is evaluated on:

1. Requirements Understanding
2. Class Design
3. Responsibilities
4. Relationships and Coupling
5. Extensibility
6. Edge Cases

Each criterion receives:

- Score
- Evidence
- Concern
- Suggestion
- Confidence

This makes the feedback more useful than a single AI-generated score.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### AI

- Google Gemini API

## Project Structure

```text
lld-practice-platform/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Problems.jsx
│   │   │   ├── Practice.jsx
│   │   │   ├── Feedback.jsx
│   │   │   └── History.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── models/
│   │   │   ├── Problem.js
│   │   │   ├── Attempt.js
│   │   │   ├── Submission.js
│   │   │   └── Evaluation.js
│   │   ├── routes/
│   │   │   ├── problemRoutes.js
│   │   │   ├── attemptRoutes.js
│   │   │   ├── submissionRoutes.js
│   │   │   ├── evaluationRoutes.js
│   │   │   └── historyRoutes.js
│   │   ├── services/
│   │   │   └── aiEvaluator.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── README.md
├── RESEARCH.md
├── DESIGN.md
└── AI_USAGE.md