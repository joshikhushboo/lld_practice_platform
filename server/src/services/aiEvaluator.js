const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function evaluateSubmission(problem, submission) {
  const model = genAI.getGenerativeModel({
   model: "gemini-3.5-flash-lite",
  });

  const prompt = `
You are an expert Low-Level Design interviewer.

Evaluate the learner's LLD solution for this problem.

PROBLEM:
${problem.title}

DESCRIPTION:
${problem.description}

REQUIREMENTS:
${problem.requirements.join(", ")}

LEARNER SUBMISSION:

Requirements / Assumptions:
${submission.requirements}

Classes:
${submission.classes}

Responsibilities:
${submission.responsibilities}

Relationships:
${submission.relationships}

Design Explanation:
${submission.explanation}

Evaluate using these criteria:

1. Requirements Understanding
2. Class Design
3. Responsibilities
4. Relationships and Coupling
5. Extensibility
6. Edge Cases

Return ONLY valid JSON in this format:

{
  "overallScore": 0,
  "summary": "",
  "criteria": [
    {
      "name": "",
      "score": 0,
      "evidence": "",
      "concern": "",
      "suggestion": "",
      "confidence": ""
    }
  ]
}

Score each criterion from 0 to 10.
Be constructive and explain the reasoning.
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
}

module.exports = { evaluateSubmission };