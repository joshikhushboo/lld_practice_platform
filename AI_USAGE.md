
---

# 4. `AI_USAGE.md`

```md
# AI Usage

AI tools were used during development as an engineering assistant. Final implementation decisions were reviewed and adapted based on the assignment requirements.

## 1. AI Evaluation Strategy

### AI suggestion

Use an LLM to evaluate the learner's LLD solution.

### Decision

Accepted.

### Why

LLD quality involves reasoning about responsibilities, coupling, abstraction and extensibility. These are difficult to evaluate using only deterministic rules.

The LLM is therefore used for judgment-heavy feedback.

---

## 2. Fixed Evaluation Rubric

### AI suggestion

Avoid asking the model a broad question such as:

"Is this a good design?"

Instead, provide a fixed rubric and request structured output.

### Decision

Accepted.

### Why

A fixed rubric makes feedback more consistent and explainable.

The final rubric evaluates:

- Requirements Understanding
- Class Design
- Responsibilities
- Relationships and Coupling
- Extensibility
- Edge Cases

Each criterion returns a score, evidence, concern, suggestion and confidence.

---

## 3. Separate AI Evaluation from Submission Logic

### AI suggestion

Keep the AI evaluation logic in a separate service instead of putting Gemini API calls directly inside the route.

### Decision

Accepted.

### Why

The submission route should coordinate the workflow while the evaluator should own evaluation logic.

This makes it easier to add another evaluator later, such as a rule-based evaluator or human review system.

The current implementation uses:

```text
services/aiEvaluator.js