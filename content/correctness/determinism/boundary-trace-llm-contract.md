Below is a **clean README section** for `boundary-trace` using **side-by-side tables**, since you said that format helps you reason about things.

This is designed to make developers understand the library **very quickly**.

---

# boundary-trace

**Inspect how deterministic boundaries behave under probabilistic systems.**

`boundary-trace` helps developers understand what happened during a boundary execution:
what failed, why it failed, what corrections were suggested, and how the final outcome was produced.

It renders **structured boundary events** as readable traces for debugging, iteration, and analysis.

---

# Why boundary-trace exists

Modern systems increasingly depend on **probabilistic components** like LLMs, automation systems, or model outputs.

These systems require **deterministic boundaries** to make their behavior safe for software.

However, once a boundary exists, developers need to answer questions like:

* Why did this run fail?
* Which invariant broke?
* What did the model actually return?
* What repair signal was generated?
* Why did attempt 2 succeed but attempt 1 fail?

`boundary-trace` provides the tools to **inspect and understand boundary behavior**.

---

# Relationship to llm-contract

| Concern                   | **llm-contract**                               | **boundary-trace**                      |
| ------------------------- | ---------------------------------------------- | --------------------------------------- |
| Main role                 | Enforce deterministic boundary                 | Inspect boundary behavior               |
| Guarantees                | Verified structured output or explicit failure | Clear trace of how the boundary behaved |
| Handles schema validation | ✓                                              | shows results                           |
| Handles invariants        | ✓                                              | shows violations                        |
| Generates repair signals  | ✓                                              | shows repair signals                    |
| Handles retries           | ✓                                              | shows retry timeline                    |
| Produces typed result     | ✓                                              | displays result                         |

Simple mental model:

| System layer         | Responsibility                          |
| -------------------- | --------------------------------------- |
| Application logic    | consumes verified data                  |
| **llm-contract**     | enforces the boundary                   |
| **boundary-trace**   | shows what happened inside the boundary |
| Probabilistic system | LLM / automation / model                |

---

# What boundary-trace helps developers do

| Developer question                 | boundary-trace capability                   |
| ---------------------------------- | ------------------------------------------- |
| Why did this request fail?         | Shows failure category and issues           |
| Which invariant broke?             | Displays invariant violations               |
| What JSON did the model return?    | Shows raw and cleaned responses             |
| Why did attempt 2 succeed?         | Shows attempt timeline                      |
| What repair signal was generated?  | Displays repair instructions                |
| Did the repair actually run?       | Shows repair usage in next attempt          |
| What is causing repeated failures? | Helps inspect patterns across attempts      |
| How expensive was this run?        | Can display tokens, duration, cost metadata |

---

# Example Trace (developer view)

```text
[boundary] RUN start id=run_8f3 attempts=3 invariants=2

[boundary] A1 START
[boundary] A1 VERIFY_FAIL category=PARSE_ERROR
  issue: malformed JSON

[boundary] A1 REPAIR
  "Return only valid JSON. Do not include prose."

[boundary] A1 RETRY scheduled next=A2 delay=250ms

[boundary] A2 START
[boundary] A2 VERIFY_FAIL category=INVARIANT_ERROR
  issue: confidence must be between 0 and 1

[boundary] A2 REPAIR
  "confidence must be between 0 and 1"

[boundary] A2 RETRY scheduled next=A3 delay=500ms

[boundary] A3 START
[boundary] A3 VERIFY_PASS

[boundary] RUN success attempts=3 duration=846ms
```

---

# Event Model

`boundary-trace` works with **structured boundary events**.

Example event stream:

```json
{"event":"run.start","runID":"run_8f3","maxAttempts":3}
{"event":"attempt.verify.fail","attempt":1,"category":"PARSE_ERROR"}
{"event":"attempt.retry","attempt":1,"next":2}
{"event":"attempt.verify.fail","attempt":2,"category":"INVARIANT_ERROR"}
{"event":"attempt.retry","attempt":2,"next":3}
{"event":"attempt.verify.pass","attempt":3}
{"event":"run.success","attempts":3}
```

Libraries like `llm-contract` can emit these events directly.

---

# Key Concepts

| Concept  | Meaning                                                       |
| -------- | ------------------------------------------------------------- |
| Boundary | Deterministic verification layer around probabilistic systems |
| Run      | A full boundary execution                                     |
| Attempt  | A single verification pass                                    |
| Issue    | A specific verification problem                               |
| Repair   | A correction signal generated by the boundary                 |
| Outcome  | Success or explicit failure                                   |

---

# Typical Development Workflow

| Step | Developer activity                              |
| ---- | ----------------------------------------------- |
| 1    | Run system with boundary enabled                |
| 2    | Inspect trace output                            |
| 3    | Identify invariant violations or parse failures |
| 4    | Adjust prompts, invariants, or retry policies   |
| 5    | Re-run and compare traces                       |

`boundary-trace` makes the **boundary feedback loop visible**.

---

# Local Development Use Case

`boundary-trace` is particularly useful during **local development and debugging**.

It can render:

| Trace View          | Purpose                    |
| ------------------- | -------------------------- |
| Run Summary         | high level outcome         |
| Attempt Timeline    | progression across retries |
| Verification Issues | what broke                 |
| Raw / Clean JSON    | inspect model output       |
| Repair View         | correction signals         |
| Outcome             | final boundary decision    |

---

# Design Principles

| Principle               | Meaning                              |
| ----------------------- | ------------------------------------ |
| Boundary-first          | Focus on boundary behavior           |
| Developer inspection    | Designed for debugging and reasoning |
| Optional infrastructure | Systems work without it              |
| Event-based             | Works with structured trace events   |
| Framework-agnostic      | Not tied to any model provider       |

---

# What boundary-trace is not

| Misconception           | Reality                                     |
| ----------------------- | ------------------------------------------- |
| LLM framework           | It is a trace viewer                        |
| prompt engineering tool | It only shows correction signals            |
| logging replacement     | It renders structured boundary events       |
| repair engine           | Developers decide how to use repair signals |

---

# Future Directions

Possible extensions:

| Feature              | Description                             |
| -------------------- | --------------------------------------- |
| TUI trace viewer     | interactive terminal inspection         |
| Web UI               | request history and trace visualization |
| Trace comparison     | compare runs over time                  |
| Cost dashboards      | tokens, latency, attempts               |
| Multi-library traces | boundaries beyond LLM systems           |

---

# Summary

| System             | Purpose                          |
| ------------------ | -------------------------------- |
| **llm-contract**   | enforce deterministic boundary   |
| **boundary-trace** | inspect how the boundary behaved |

Together they enable developers to build **deterministic systems around probabilistic components**.
