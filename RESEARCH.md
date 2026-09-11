
---

# 2. `RESEARCH.md`

```md
# Research Note

## 1. Problem Understanding

Low-Level Design practice requires learners to make several decisions:

- What classes should exist?
- What responsibility belongs to each class?
- How should objects interact?
- Where should abstraction be introduced?
- How tightly coupled are the classes?
- Can the design handle changing requirements?
- What edge cases have been considered?

The main difficulty is that LLD usually has multiple valid solutions.

A learner therefore needs more than a correct/incorrect result. They need feedback explaining why a design is strong or weak and what they should improve in their next attempt.

## 2. Existing Approaches

### Interview Preparation Platforms

Platforms such as LeetCode and similar interview-practice products provide structured problems and solutions. Their strongest aspect is repeated practice and problem discovery.

However, traditional coding-oriented platforms are primarily optimized for executable code and test cases. LLD design quality is harder to evaluate using only automated tests.

### LLD Courses and Learning Platforms

Educational platforms provide LLD/OOP courses, design-pattern explanations, UML examples, and reference solutions.

These are useful for learning concepts, but the learner often has to evaluate their own solution manually.

### GitHub and Community Examples

GitHub repositories and community discussions provide many implementations of common LLD problems such as Parking Lot, Vending Machine, Elevator, and Library Management systems.

They are useful for comparing different approaches, but they do not provide a consistent evaluation rubric for a learner's own submission.

## 3. Key Gap

The gap identified is the lack of a focused feedback loop:

Practice → Submit → Understand weaknesses → Try again

A reference solution alone is not enough because multiple designs can be valid.

For example, two Parking Lot implementations may use different class structures while both following good object-oriented principles.

Therefore, evaluation should focus on design qualities rather than matching one expected solution.

## 4. Product Direction

The MVP focuses on a small number of LLD problems and a structured text submission.

A learner provides:

1. Requirements and assumptions
2. Classes
3. Responsibilities
4. Relationships
5. Design explanation and edge cases

This format provides enough evidence to evaluate important LLD decisions without the implementation cost of supporting code editors and diagram tools.

## 5. Evaluation Direction

Evaluation is split conceptually into deterministic and judgment-based checks.

### Deterministic checks

Examples:

- Required fields are present.
- Submission belongs to an existing attempt.
- Problem exists.
- Attempt state is valid.
- Submission is stored before evaluation.

### Judgment-based checks

Examples:

- Whether responsibilities are well separated.
- Whether classes have appropriate responsibilities.
- Whether relationships create unnecessary coupling.
- Whether the design is extensible.
- Whether edge cases are meaningful.

The MVP uses an LLM for the judgment-heavy portion.

## 6. Product Decision

The MVP deliberately avoids:

- Large LMS functionality
- Complex authentication
- Microservices
- Kubernetes
- Advanced analytics
- Full UML editors
- Large assessment engines

The goal is to demonstrate one learner journey well rather than build a large platform.

## 7. Chosen Practice Loop

The final MVP supports:

Choose Problem
↓
Start Attempt
↓
Design Solution
↓
Submit
↓
AI Evaluation
↓
Review Feedback
↓
View History
↓
Try Again

This loop directly addresses the core learner problem: improving LLD through repeated practice and useful feedback.