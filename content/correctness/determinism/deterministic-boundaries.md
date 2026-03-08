# Deterministic Boundaries

Deterministic boundaries improve how probabilistic systems are developed, debugged, and trusted.

The point is not to make the model deterministic. The point is to make the software system deterministic about what it will accept.

## General Concept

A probabilistic component like an LLM can be modeled as:

$$
x \rightarrow M(x) \rightarrow y
$$

Where:

- `M` is a probabilistic generator
- `y` is a candidate output

Without a boundary, the application treats `y` as immediately usable. Developers then try to globally influence model behavior through prompts, examples, and evals.

With a deterministic boundary, the system becomes:

$$
x \rightarrow M(x) \rightarrow y \rightarrow B(y)
$$

Where `B(y)` enforces admissibility.

That shifts engineering from:

- "How do I make the model good?"

to:

- "What counts as acceptable output?"
- "Why did this output fail?"
- "What failure class is this?"

## What Deterministic Boundaries Add

### 1) Reduced Control Surface

Without a boundary, developers attempt to influence the entire model manifold.

With a boundary, they define local acceptance rules:

- structure
- invariants
- retry policy
- failure handling

This is a smaller and more controllable surface.

### 2) Explicit Failure Regions

Without a boundary, failures are mixed:

- parse issues
- schema issues
- semantic contradictions
- refusals
- truncation

With a boundary, failures are partitioned into explicit classes. That makes behavior inspectable.

### 3) Local Improvements Instead of Prompt Churn

Prompt edits affect the full output space. Boundary updates affect only the admissible region.

Improvements become local:

- add one invariant
- tighten one schema rule
- tune one retry policy

### 4) Faster Iteration

Once failures are classified, iteration becomes diagnostic instead of trial-and-error.

Teams can ask:

- which failure class dominates?
- did this change reduce validation failures?
- did this model update increase invariant violations?

## Strong, Defensible Claim

Do not claim:

- invariants make the model smarter
- deterministic boundaries solve all LLM problems

Claim this:

**Deterministic boundaries make probabilistic systems easier to reason about and improve by defining an explicit acceptance region at the system boundary.**

## Proof Strategy

### Level 1: Conceptual

Show the shift from global control to local acceptance:

- without boundary:

$$
x \rightarrow M(x) \rightarrow y
$$

- with boundary:

$$
x \rightarrow M(x) \rightarrow y \rightarrow B(y)
$$

### Level 2: Operational

Show measurable failure classes:

- `PARSE_ERROR`
- `VALIDATION_ERROR`
- `INVARIANT_ERROR`
- `REFUSAL`
- `TRUNCATION`

### Level 3: Empirical

Compare prompt-only vs boundary-enforced pipelines:

- mixed failures vs explicit categories
- ad hoc retries vs targeted repairs
- global tuning vs local corrections

## How llm-contract Fits

`llm-contract` is a concrete implementation of deterministic boundaries for structured LLM outputs.

It provides:

- schema-based structural acceptance
- invariants for semantic acceptance
- failure classification
- repair plus bounded retry

## Practical Framing

**Probabilistic systems generate candidates. Deterministic boundaries decide what the software can safely accept.**

Without a boundary, teams tune the model globally. With a boundary, they define and improve a clear acceptance region.
