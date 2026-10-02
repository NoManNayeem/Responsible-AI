# Narration script

68 scenes · ~2977 words · ~21.5 min at 2.5 words/sec

Record one file per scene as `public/vo/<scene-id>.mp3`, then set `VOICEOVER = true` in `src/config.ts`.


## 0. Open

**open-hook** `00:00` (17s)  
In 2025, the AI Incident Database logged three hundred and sixty-two documented cases of AI causing real harm, or coming close. That's up from two hundred and thirty-three the year before. And those are only the ones someone wrote down.

**open-growth** `00:17` (19s)  
That is a fifty-five percent jump in a single year. Stanford's 2026 AI Index put it plainly: responsible AI is not keeping pace with AI capability. Models are improving faster than our ability to check them, govern them, and fix them when they break.

**open-cases** `00:36` (22s)  
Three stories show the pattern. An airline chatbot invented a refund policy, and a tribunal ruled the airline had to pay. A consulting firm refunded part of a government contract after its report cited sources that didn't exist. And an AI coding agent deleted a company's production database during a code freeze.

**open-pattern** `00:58` (21s)  
Notice what these have in common. No villain. No rogue superintelligence. Just ordinary systems, deployed without the checks that would have caught the mistake. That gap, between what AI can do and how carefully we deploy it, is what responsible AI is about. Let's go end to end.


## 1. Basics

**ch1** `01:19` (4s)  
Part one. What responsible AI actually means.

**basics-def** `01:23` (18s)  
Stanford defines responsible AI as the practices and governance mechanisms that make sure AI systems are safe, fair, beneficial, and perform as intended. In plain words: it works, it doesn't hurt people, someone is accountable, and you can prove all three.

**basics-traits** `01:41` (20s)  
The US standards body NIST breaks trustworthy AI into seven traits. Valid and reliable, which is the foundation. Safe. Secure and resilient. Accountable and transparent. Explainable and interpretable. Privacy-enhanced. And fair, with harmful bias managed. Weakness in any one of them undermines trust in the whole system.

**basics-myths** `02:01` (23s)  
Let's clear up some myths. Responsible AI is not a one-time ethics review, a policy document nobody reads, or a job only for lawyers. It is a continuous practice, scaled to how much harm a system could cause, shared by the people who build, buy, and use AI, and backed by evidence you can show.

**basics-proportion** `02:24` (17s)  
The key idea is proportionality. A model that recommends songs and a model that approves loans need very different levels of care. Responsible AI is not about slowing everything down. It's about spending your caution where the stakes are highest.


## 2. Why now

**ch2** `02:42` (4s)  
Part two. Why it matters now.

**why-blockers** `02:46` (17s)  
Here's what organizations told Stanford is holding back their AI rollout. Sixty-two percent named security and risk as the top blocker, well ahead of technical limits or regulatory uncertainty. In other words, trust, not technology, is now the bottleneck.

**why-policy** `03:03` (17s)  
The good news: organizations are writing policies. The share of businesses with no responsible AI policy at all fell from twenty-four percent to eleven percent. ISO 42001 and the NIST framework are now the most cited standards shaping those policies.

**why-barriers** `03:20` (20s)  
But writing a policy is not the same as living it. The biggest barrier to putting responsible AI into practice is knowledge: fifty-nine percent of organizations cite gaps in skills and training. Budget and regulatory uncertainty follow. Closing that knowledge gap is the point of this video.

**why-transparency** `03:40` (18s)  
Meanwhile, transparency from AI developers went backwards. Stanford's average developer transparency score dropped from fifty-eight to forty. And measured hallucination rates across top models ranged from twenty-two to ninety-four percent, depending on the test. You cannot assume the model is right.

**why-shadow** `03:58` (22s)  
And inside companies, AI use is outrunning oversight. In one 2026 global survey, ninety percent of executives felt confident they could see how AI was used, yet fifty-two percent of employees admitted using unapproved tools, often on personal accounts. IBM's 2026 breach research links shadow AI to forty-three percent of security incidents.


## 3. Risk map

**ch3** `04:20` (4s)  
Part three. The risk map.

**risk-map** `04:24` (21s)  
Here's the map of what can go wrong. Hallucination: confident, fluent, wrong. Bias: unequal outcomes for different groups. Privacy leaks. Security attacks like prompt injection. Deliberate misuse, such as deepfakes and fraud. Over-reliance, when people stop checking. Intellectual property problems. And agents, which turn wrong answers into wrong actions.

**risk-escalation** `04:45` (23s)  
That last point is the big shift of 2025 and 2026. A chatbot that hallucinates gives you a wrong answer. A person may act on it. An agent that hallucinates, with access to your email, database, or payments, takes the wrong action itself. The cost of a mistake grows with every permission you grant.

**case-airline** `05:08` (22s)  
Case one. A grieving passenger asked Air Canada's chatbot about bereavement fares. It invented a policy promising a refund after travel. When he claimed it, the airline argued the chatbot was responsible for its own words. The tribunal rejected that. Lesson: you own every word your AI says to a customer.

**case-report** `05:30` (21s)  
Case two. A 237-page report from Deloitte for the Australian government cited papers and books that don't exist, and misquoted a judge. The firm acknowledged generative AI had been used, corrected the report, and refunded the final payment. Lesson: human review means checking the facts, not polishing the prose.

**case-agent** `05:51` (20s)  
Case three. During an explicit code freeze, Replit's AI coding agent ran commands that wiped a startup's production database. The vendor apologized, refunded the customer, and committed to stronger safeguards. Lesson: an instruction in a prompt is not a permission system. Enforce limits in the infrastructure.

**case-legal** `06:11` (24s)  
Case four repeats every month: lawyers filing briefs with fake case citations generated by AI. A US federal appeals court called out more than two dozen fake citations and misstatements in one matter. Stanford researchers found general-purpose models hallucinated on fifty-eight to eighty-two percent of legal queries. Lesson: in high-stakes work, verify every claim at the source.


## 4. Rules

**ch4** `06:35` (4s)  
Part four. Laws, standards, and frameworks.

**eu-pyramid** `06:39` (27s)  
The world's most comprehensive AI law is the EU AI Act, and it's built like a pyramid. At the top, banned uses: social scoring, manipulative systems, emotion recognition at work or school. Below that, high-risk systems like hiring, credit, and education tools, with strict duties. Then transparency duties for chatbots and synthetic content. Most AI sits at the bottom, with no new rules.

**eu-timeline** `07:06` (28s)  
Timing matters. Bans and an AI literacy duty started in February 2025. Rules for general-purpose models followed in August 2025. Transparency duties and enforcement powers arrived in August 2026. And in 2026, EU lawmakers agreed to delay the high-risk rules: to December 2027 for standalone systems, and August 2028 for AI built into regulated products. A delay is not a pass. Work should already be underway.

**eu-fines** `07:34` (22s)  
The penalties are serious. For banned practices, fines reach thirty-five million euros or seven percent of global annual turnover, whichever is higher. And the law reaches beyond Europe: if your AI system is placed on the EU market, or its output is used in the EU, it can apply to you.

**us-landscape** `07:55` (31s)  
The United States has no comprehensive federal AI law, but existing laws on discrimination, consumer protection, and privacy still apply. A December 2025 executive order pushes to override state AI laws and set up a Justice Department task force to challenge them. Until courts or Congress act, state laws stand. California's frontier AI transparency law took effect in January 2026. Colorado replaced its landmark AI Act with a narrower law, effective January 2027.

**nist-cycle** `08:26` (24s)  
Laws tell you what. Frameworks tell you how. The NIST AI Risk Management Framework has four functions. Govern sets policy, roles, and accountability, and runs through everything. Map identifies the context and risks of each system. Measure tests and tracks them. Manage decides what to do, and responds when things go wrong. Then the loop repeats.

**standards** `08:50` (24s)  
Four more names worth knowing. NIST AI 600-1, the generative AI profile, lists twelve risks, such as confabulation and information security. ISO 42001 is a certifiable management system for AI, the way ISO 27001 is for security. And OWASP publishes two security top-ten lists: one for LLM applications and, since December 2025, one for autonomous agents.


## 5. Lifecycle

**ch5** `09:14` (5s)  
Part five. End to end: the AI lifecycle.

**lifecycle** `09:18` (18s)  
Responsible AI happens across the whole lifecycle, not at the end. Frame the problem. Prepare the data. Build the system. Evaluate it. Deploy with guardrails. Monitor in production. And retire it safely. Each stage has its own checks. Let's walk through them.

**lc-frame** `09:36` (21s)  
Stage one: frame. Before writing code, ask: is AI the right tool, or would a simple rule do? Who could be affected, and how badly? Which risk tier is this? Who owns the outcome? And write down not only what success looks like, but which failures you will not accept.

**lc-data** `09:58` (21s)  
Stage two: data. Know where every dataset came from, and whether you're allowed to use it. Check consent and legal basis. Check that it represents the people the system will serve. Strip personal data you don't need. Document it with a datasheet. And keep your test data truly separate.

**lc-build** `10:19` (19s)  
Stage three: build. Choose the simplest approach that works, because simpler systems are easier to explain and audit. Threat-model the design. Give tools the least privilege possible. And start your documentation now: a model or system card describing purpose, limits, and known risks.

**lc-eval** `10:37` (22s)  
Stage four: evaluate. Test on a golden set of real, representative cases. Break results down by subgroup to catch bias. Red-team it: try to make it fail on purpose. Test edge cases and messy inputs. And set go and no-go thresholds before you see the results, so nobody moves the goalposts.

**lc-deploy** `10:59` (21s)  
Stage five: deploy. Roll out in stages, starting small. Tell people when they're dealing with AI. Keep a human in the loop for high-stakes decisions. Add input and output filters. Log what happens. And make sure there's a fallback and a kill switch that someone actually knows how to use.

**lc-monitor** `11:21` (25s)  
Stages six and seven: monitor and retire. Models drift as the world changes, so track quality over time. Give users a way to report problems. Have an incident response plan before you need one. Re-audit on a schedule. And when a system is retired, delete or archive its data properly, and tell the people who relied on it.


## 6. Engineers

**ch6** `11:45` (4s)  
Part six. For engineers and developers.

**eng-fairness** `11:49` (23s)  
Engineers, let's get concrete, starting with fairness. Demographic parity compares positive outcome rates across groups. Equal opportunity compares true positive rates among people who actually qualify. Equalized odds adds false positive rates too. And the four-fifths rule, used in US hiring, flags any group selected at under eighty percent of the top group's rate.

**eng-tradeoff** `12:12` (21s)  
Important: these metrics can mathematically conflict. When base rates differ between groups, you usually cannot satisfy all of them at once. So pick the metric that matches the real harm in your use case, document why you chose it, and get sign-off from someone who understands the domain.

**eng-explain** `12:33` (24s)  
Next, explainability. For classic models, SHAP shows how much each feature pushed a prediction up or down. LIME fits a simple local model around one decision. Counterfactuals tell a person what would need to change to get a different outcome. For language models, the most practical explanation is grounding: show the exact source behind each claim.

**eng-evals** `12:57` (23s)  
Treat evaluation like software testing. Build a golden dataset. Run automated checks for format, facts, and safety. Use an LLM as a judge only after you've calibrated it against human ratings. Spot-check by hand. Wire the suite into CI, so a prompt change that breaks quality can't ship. Then keep sampling real production traffic.

**eng-owasp** `13:20` (20s)  
Security next. The OWASP Top 10 for LLM applications is your checklist. Prompt injection. Sensitive information disclosure. Supply chain. Data and model poisoning. Improper output handling. Excessive agency. System prompt leakage. Vector and embedding weaknesses. Misinformation. And unbounded consumption, meaning runaway cost or denial of service.

**eng-injection** `13:39` (23s)  
Number one deserves a moment. Prompt injection is when text the model reads, an email, a web page, a PDF, a tool result, contains instructions that hijack it. There's no perfect fix. So design as if injection will succeed: limit what the model can reach, and validate everything it outputs before acting on it.

**eng-guardrails** `14:02` (23s)  
Build guardrails on both sides. On input: redact personal data, detect injection attempts, enforce topic rules, and rate-limit. On output: validate against a schema, check that claims are grounded in sources, filter harmful content and leaked data, and never pass raw model output straight into a shell, a database query, or a browser.


## 7. Agents

**ch7** `14:25` (5s)  
Part seven. Agentic AI: when models take actions.

**agent-owasp** `14:30` (21s)  
For agents, OWASP released a separate top ten in December 2025. Goal hijacking. Tool misuse. Identity and privilege abuse. Agentic supply chain flaws. Unexpected code execution. Memory and context poisoning. Insecure agent-to-agent communication. Cascading failures. Exploiting human trust in the agent. And rogue agents acting outside their mandate.

**agent-kit** `14:50` (27s)  
Here's the agent safety kit. Give each agent its own identity and scoped, short-lived credentials. Require human approval for anything irreversible or high-value. Run code in a sandbox. Keep development and production apart. Set spending and rate budgets. Log every tool call. And have a kill switch. Only thirty-four percent of organizations apply the same security controls to agents as to human employees.

**agent-code** `15:17` (28s)  
In code, the principle is simple. Classify every tool by risk, and treat unknown tools as the highest risk. Log every call. Low-risk reads run automatically. Anything that writes, deletes, pays, or sends waits for a human or a policy engine. The check lives in your infrastructure, not in the prompt, so the model can't talk its way past it.

**agent-ladder** `15:45` (24s)  
Think of autonomy as a ladder you climb with evidence. Start with suggestions a human acts on. Move to drafts a human approves. Then actions that each need approval. Then actions that run and report back, but only when they can be undone. Full autonomy is reserved for low-risk, tightly bounded tasks with a strong track record.


## 8. Leaders

**ch8** `16:09` (4s)  
Part eight. For C-levels and industry leaders.

**lead-owner** `16:14` (19s)  
Leaders, the first rule: accountability needs a name. The NIST playbook is clear that specific, empowered people must own AI risk, not a vague committee that meets quarterly. Every AI system in production should have a named business owner who answers for its outcomes.

**lead-model** `16:33` (25s)  
Here's the operating model. Keep an inventory of every AI system, including AI inside vendor tools. Tier each one by risk, with matching controls. Gate high-risk launches behind review. Run a cross-functional AI council. Put data use, audit rights, and incident notice into vendor contracts. Train everyone. And track metrics: incidents, evaluation pass rates, and time to fix.

**lead-board** `16:57` (26s)  
Six questions every board should ask. What AI do we run, and who owns each system? Which uses are high-risk, and what evidence shows they work fairly? When it fails, who finds out, and how fast? What data leaves our walls through AI tools? Which laws apply, and by when? And what would we tell a regulator, or a journalist, tomorrow?

**lead-value** `17:23` (21s)  
Frame this as strategy, not cost. Getting it wrong means refunds, fines, liability, and headlines. Getting it right means faster approval of new use cases, smoother enterprise sales, because buyers increasingly ask about your AI governance, and employees using safe, sanctioned tools instead of hiding their AI use.


## 9. Organizations

**ch9** `17:44` (4s)  
Part nine. Building it into the organization.

**org-maturity** `17:48` (21s)  
Most organizations move through four stages. Ad hoc: scattered experiments, no policy. Defined: a policy, an inventory, named owners. Managed: risk tiers, evaluations, launch gates, and monitoring. Embedded: controls built into tools and pipelines, measured and improved continuously. Stanford's data says that, across all regions, most organizations are still early.

**org-shadow** `18:09` (22s)  
On shadow AI: banning tools rarely works. People route around restrictions when approved options are slow or missing. The fix is a fast, sanctioned path: approved tools with enterprise data protection, a quick request process for new ones, clear rules on what data can go where, and training that explains why.

**org-traffic** `18:31` (19s)  
A simple traffic-light rule helps everyone. Green is public information: fine in any approved tool. Amber is internal material: enterprise tools only, with data protection in the contract. Red is customer personal data, credentials, source code, and financials: only in systems explicitly cleared for it.


## 10. Everyone

**ch10** `18:50` (4s)  
Part ten. For everyone who uses AI.

**all-habits** `18:55` (24s)  
Seven habits for everyone. Verify facts at the original source. Never paste secrets or personal data into unapproved tools. Say when AI helped with your work. Keep important decisions yours. Watch for unfair patterns. Confirm urgent voice or video requests through a second channel, because deepfakes are cheap now. And report problems when you see them.

**all-intern** `19:18` (15s)  
A useful mental model: treat AI like a brilliant, tireless intern. It's fast and genuinely helpful. It's also sometimes confidently wrong, and it doesn't carry the responsibility. You do. Delegate the work. Keep the judgment.

**all-rights** `19:34` (25s)  
And when AI makes decisions about you, you have rights in many places. To know when you're talking to an AI. Under European data law, not to be subject to purely automated decisions with major effects, and to get meaningful information about the logic involved. And to access, correct, or delete your data. Ask. In many places, organizations must respond.


## 11. Plan

**ch11** `19:59` (4s)  
Part eleven. Trade-offs, and your ninety-day plan.

**plan-tradeoffs** `20:03` (23s)  
One honest caveat. Stanford highlights research showing that improving one responsible AI dimension, like safety, can degrade another, like accuracy. Tighter filters can make a system less helpful. Privacy techniques can cost accuracy. There's no perfect setting. The responsible move is to make these trade-offs on purpose, write them down, and revisit them.

**plan-90** `20:26` (28s)  
Here's a ninety-day plan. Days one to thirty: inventory every AI system, name owners, publish acceptable-use rules and the data traffic light, and offer sanctioned tools. Days thirty to sixty: tier by risk, build evaluation sets for your most important systems, add logging and guardrails, and review vendors. Days sixty to ninety: launch gates, a red-team exercise, an incident drill, training, and your first metrics report.


## 12. Close

**close-recap** `20:54` (20s)  
To recap. Everyone: verify, protect data, and disclose. Engineers: evaluate, add guardrails on both sides, log everything, and grant least privilege. Leaders: name owners, keep an inventory, tier by risk, and measure. Organizations: make the safe path the easy path, train people, and keep the loop running.

**close-final** `21:14` (16s)  
Responsible AI isn't the brake on innovation. It's the steering. It's what lets you go faster with confidence, because you'll see problems coming, and you'll know exactly what to do when they arrive. Thanks for watching.
