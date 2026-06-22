---
title: "Reasoning budget is an interface problem"
date: 2026-06-22
category: "Research note"
excerpt: "I am interested in when a model should think more, but also in who gets to decide that budget."
---

Long reasoning can be useful, but it is not automatically better. In multimodal grounding, some inputs are already clear: the object is visible, the audio is discriminative, and the language expression is direct. A long reasoning trace can add drift.

That makes reasoning budget feel like an interface problem. The system needs a small decision point before it starts solving the task: is this case simple, ambiguous, or genuinely hard?

I like this question because it is practical and interpretability-shaped at the same time. A good budget policy should improve metrics, but it should also say something about the model's confidence, ambiguity, and failure modes.
