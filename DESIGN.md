# Design Note

## 1. MVP

DesignLab is a monolithic web application for practicing Low-Level Design.

The MVP supports:

- Problem selection
- Practice attempts
- Structured submissions
- AI evaluation
- Explainable feedback
- Attempt history
- Retry/practice again

## 2. Architecture

```text
             React Frontend
                   |
                   | HTTP / REST
                   ↓
            Express Backend
                   |
          -------------------
          |                 |
          ↓                 ↓
      MongoDB          Gemini API