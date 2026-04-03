export interface Lesson {
  slug: string;
  title: string;
  duration: string;
  description: string;
  content: string;
  keyTakeaways: string[];
  tryThisNow: string;
  free: boolean;
}

export interface Track {
  slug: string;
  title: string;
  label: string;
  dot: string;
  color: string;
  btnStyle: string;
  description: string;
  longDescription: string;
  lessons: Lesson[];
}

export const tracks: Track[] = [
  {
    slug: "ai-essentials",
    title: "AI Essentials",
    label: "FOUNDATIONS",
    dot: "dot-green",
    color: "#2ECC71",
    btnStyle: "btn-accent-green",
    description: "Understand what AI actually is, what it can and can't do, and how it's reshaping work.",
    longDescription: "No jargon, no hype — just the mental models you need to make smart decisions about AI in your work and career. This track covers what AI actually is, how it works at a high level, what it's good and bad at, and how to start thinking about where it fits in your role.",
    lessons: [
      {
        slug: "what-is-ai-really",
        title: "What Is AI, Really?",
        duration: "12 min",
        description: "Cut through the noise. Understand what AI actually is — and isn't — without the jargon.",
        free: true,
        content: `## What AI Actually Is

Let's start with what AI is **not**. It's not a sentient robot. It's not magic. It's not coming for your job tomorrow.

AI — specifically the kind you hear about in the news — is **pattern recognition at scale**. It's software that has been trained on massive amounts of data to recognise patterns and make predictions.

### The Key Concept: Models

When people say "AI," they usually mean a **model** — a program that has been trained on data to perform a specific task. ChatGPT is a model. So is the spam filter in your email. So is the recommendation engine on Netflix.

The difference between these is **scale and generality**:

- **Narrow AI**: Trained for one thing. Your email spam filter. A fraud detection system. Very good at one job.
- **General-purpose AI (LLMs)**: Trained on vast amounts of text/data. Can handle many different tasks — writing, analysis, coding, conversation. This is what ChatGPT, Claude, and Gemini are.

### How It Works (Simply)

Large Language Models (LLMs) work by predicting **the next most likely word** in a sequence. That's it. They've read so much text that they can generate remarkably coherent, useful responses — but they're fundamentally a prediction engine.

This is why they sometimes "hallucinate" — they're predicting what sounds right, not what **is** right. Understanding this distinction is crucial.

### What This Means for You

AI is a **tool**. Like spreadsheets, like email, like the internet. The people who learn to use it well will have a significant advantage. The people who ignore it will fall behind. The people who fear it are wasting energy they could spend learning.

Your job isn't going away. But it **is** changing. The question is whether you'll shape that change or react to it.`,
        keyTakeaways: [
          "AI is pattern recognition at scale, not magic or sentience",
          "LLMs predict the next most likely word — they don't 'understand' like humans do",
          "AI is a tool, like spreadsheets or email — learn to use it well",
          "Hallucinations happen because AI predicts what sounds right, not what is right",
        ],
        tryThisNow: "Open ChatGPT or Claude and ask it a factual question about your industry. Then ask it the same question but phrase it as 'What are common misconceptions about [topic]?' Notice how the framing changes the output. This is your first lesson in prompt engineering.",
      },
      {
        slug: "what-ai-is-good-and-bad-at",
        title: "What AI Is Good (and Bad) At",
        duration: "10 min",
        description: "Know AI's strengths and limitations so you can use it where it actually helps.",
        free: true,
        content: `## AI's Sweet Spots and Blind Spots

Understanding where AI excels and where it falls flat is the single most important skill for working with it effectively. Get this wrong and you'll either waste time on things AI can't do, or miss opportunities where it could save you hours.

### Where AI Excels

**Drafting and iteration**: First drafts of emails, reports, proposals, documentation. AI won't write your best work, but it'll get you 70% of the way there in seconds.

**Summarisation**: Got a 50-page report? A two-hour meeting transcript? AI can pull out the key points in seconds.

**Research and synthesis**: Gathering information from multiple sources and combining it into a coherent overview. AI is brilliant at this.

**Data analysis**: Spotting patterns in data, creating charts, explaining what numbers mean in plain language.

**Translation and reformatting**: Converting content between formats, tones, audiences, or languages.

**Brainstorming**: Generating ideas, alternatives, and angles you might not have considered.

### Where AI Struggles

**Factual accuracy**: AI can and will make things up. It doesn't "know" facts — it predicts what sounds right. Always verify.

**Nuanced judgment**: Should we fire this vendor? Is this marketing campaign in good taste? AI can give you frameworks, but the judgment call is yours.

**Original creative vision**: AI can remix and iterate, but true creative breakthroughs still come from humans.

**Understanding your specific context**: AI doesn't know your company culture, your team dynamics, or the politics of your organisation. You have to provide that context.

**Real-time information**: Most AI models have a knowledge cutoff. They don't know what happened yesterday unless you tell them.

### The 70/30 Rule

Think of AI as getting you 70% of the way there. Your job is the last 30% — the judgment, the context, the polish, the decision. That's where the human value lives.`,
        keyTakeaways: [
          "AI excels at drafting, summarising, research, data analysis, and brainstorming",
          "AI struggles with factual accuracy, nuanced judgment, and understanding your specific context",
          "Use the 70/30 rule: AI gets you 70% there, you add the judgment and context",
          "Always verify AI's factual claims — it predicts what sounds right, not what is right",
        ],
        tryThisNow: "Take something you wrote recently — an email, a report section, meeting notes — and paste it into an AI tool. Ask it to 'improve the clarity and conciseness of this text.' Compare the output to your original. Where did AI improve it? Where did it lose something important?",
      },
      {
        slug: "the-ai-landscape",
        title: "The AI Tool Landscape",
        duration: "15 min",
        description: "Navigate the crowded world of AI tools — know what's worth your time.",
        free: true,
        content: `## Making Sense of the AI Tool Explosion

There are thousands of AI tools. New ones launch daily. Most of them won't exist in a year. Here's how to navigate the landscape without getting overwhelmed.

### The Big Players (You Should Know These)

**ChatGPT (OpenAI)**: The one that started the mainstream AI wave. Great all-rounder — writing, analysis, coding, image generation. Free tier available, Pro unlocks more powerful models.

**Claude (Anthropic)**: Known for longer, more nuanced responses and strong analytical capabilities. Excellent for document analysis and complex reasoning. Often preferred for professional/business use.

**Gemini (Google)**: Deeply integrated with Google Workspace. If your company runs on Google Docs, Sheets, and Gmail, Gemini's integration is its superpower.

**Microsoft Copilot**: Integrated into Microsoft 365. If your company runs on Outlook, Word, Excel, and Teams, Copilot brings AI directly into your existing workflow.

### Categories That Matter

**Writing & Communication**: Grammarly, Jasper, Copy.ai — but honestly, ChatGPT and Claude handle most writing tasks just as well.

**Image & Design**: Midjourney, DALL-E, Adobe Firefly, Canva's AI features. Useful for quick visuals, mockups, and creative exploration.

**Automation**: Zapier, Make, n8n — connect your tools and automate repetitive workflows. This is where huge time savings live.

**Coding**: GitHub Copilot, Cursor, Replit — even if you don't code, these are making it possible for non-developers to build simple tools.

### How to Choose

Don't try everything. Start with **one general-purpose AI** (ChatGPT or Claude) and get genuinely good at it. Then add specialised tools as specific needs arise.

The best AI tool is the one you'll actually use consistently. Features don't matter if the tool sits unused.

### What to Ignore

- Any tool that promises to "replace" an entire job function
- Tools that require complex setup before you see any value
- Anything that doesn't let you try it for free first
- The hype cycle — a tool trending on social media doesn't mean it's useful for your work`,
        keyTakeaways: [
          "Start with one general-purpose AI (ChatGPT or Claude) and master it before adding more tools",
          "Choose tools based on where your company already lives (Google = Gemini, Microsoft = Copilot)",
          "Automation tools (Zapier, Make) are where the biggest time savings often hide",
          "Ignore hype — the best tool is the one you'll actually use",
        ],
        tryThisNow: "Pick the AI tool that matches your existing work environment (Copilot for Microsoft, Gemini for Google, or Claude/ChatGPT as a standalone). Spend 15 minutes exploring what it can do. Try three different tasks: summarise something, draft something, and ask it to explain a concept in your field.",
      },
      {
        slug: "ai-and-your-job",
        title: "AI and Your Job: What's Actually Changing",
        duration: "12 min",
        description: "Understand how AI is reshaping roles — and what skills become more valuable.",
        free: false,
        content: `## The Real Impact on Your Career

Let's talk honestly about what AI means for your job. Not the sci-fi version. Not the LinkedIn hype. The actual, practical reality.

### Jobs Aren't Disappearing — Tasks Are

AI doesn't replace entire jobs. It replaces **tasks within jobs**. The data entry part of your analyst role. The first-draft part of your marketing role. The scheduling part of your admin role.

What's left after those tasks are automated? The parts that require judgment, creativity, relationships, and context. In other words: the interesting parts.

### The New Job Description

Every role is gaining an unofficial new responsibility: **knowing how to work with AI**. Just like every role eventually required knowing how to use email, then spreadsheets, then collaboration tools.

This isn't optional. Within 2-3 years, "proficient with AI tools" will be as expected as "proficient with Microsoft Office" is today.

### Skills That Become MORE Valuable

**Critical thinking**: When AI can generate content instantly, the ability to evaluate, question, and refine becomes crucial.

**Communication**: Knowing how to brief AI effectively (prompt engineering) and how to communicate AI-assisted insights to humans.

**Domain expertise**: AI is general-purpose. Your deep knowledge of your specific industry, company, and customers is irreplaceable context.

**Creativity and judgment**: AI can generate options. Humans choose between them. The ability to make good decisions with imperfect information is more valuable than ever.

**Emotional intelligence**: AI can't navigate office politics, read a room, or build genuine trust. These human skills become differentiators.

### The Uncomfortable Truth

The people most at risk aren't those in "lower-skilled" jobs. They're people in **any role** who refuse to adapt. A senior executive who won't learn to use AI tools is more at risk than a junior coordinator who embraces them enthusiastically.

Adaptability is the skill. Everything else follows from it.`,
        keyTakeaways: [
          "AI replaces tasks, not jobs — the interesting parts of your role remain",
          "Within 2-3 years, AI proficiency will be as expected as Microsoft Office proficiency",
          "Critical thinking, domain expertise, and emotional intelligence become more valuable",
          "The biggest risk isn't your job level — it's your willingness to adapt",
        ],
        tryThisNow: "List the 10 tasks you spend the most time on each week. For each one, rate it 1-5 on how much AI could help (1 = not at all, 5 = AI could do most of it). This is your personal AI opportunity map. Start with your highest-rated task tomorrow.",
      },
      {
        slug: "getting-started-safely",
        title: "Getting Started Safely",
        duration: "10 min",
        description: "Use AI without putting your company or career at risk. Privacy, security, and ethics basics.",
        free: false,
        content: `## Using AI Responsibly

Before you go all-in on AI, you need to understand the guardrails. Getting this wrong can mean leaked confidential data, copyright issues, or career-limiting mistakes.

### Data Privacy: The #1 Risk

**The rule is simple**: Don't put anything into a public AI tool that you wouldn't post on a public website.

This means:
- No customer data (names, emails, account details)
- No financial data (revenue figures, salary information, pricing)
- No proprietary information (trade secrets, unreleased product details)
- No personal information about colleagues or clients

**What to do instead**: Use enterprise versions of AI tools (ChatGPT Enterprise, Claude for Business) that don't train on your data. Or anonymise/redact sensitive information before using public tools.

### Check Your Company's AI Policy

Many companies now have formal AI usage policies. Find yours and read it. If your company doesn't have one, that's a conversation worth starting — but err on the side of caution until there's clarity.

### Attribution and Transparency

**Be honest about AI use.** If you used AI to help draft a report, don't pretend you wrote every word. Different workplaces have different norms here, but transparency builds trust.

**Don't pass off AI output as original research.** AI can help you write, but it can't do your thinking for you. Using AI to polish your ideas is fine. Using AI to replace your thinking is not.

### Copyright Considerations

AI-generated content exists in a legal grey area. For internal documents, this usually doesn't matter. For published content, client deliverables, or anything commercial:
- AI-generated images may have copyright issues
- AI-generated text is generally fine to use but should be substantially edited
- When in doubt, disclose AI assistance

### The Ethics Checklist

Before using AI for any task, ask:
1. Would I be comfortable if my boss saw exactly what I put into this AI tool?
2. Is this data safe to share with a third-party service?
3. Am I using AI to enhance my work, or to avoid doing my work?
4. Have I verified the output for accuracy?

If you can answer yes to all four, you're on solid ground.`,
        keyTakeaways: [
          "Never put confidential, customer, financial, or proprietary data into public AI tools",
          "Use enterprise versions of AI tools that don't train on your data",
          "Be transparent about AI use — honesty builds trust",
          "Always verify AI output for accuracy before using it professionally",
        ],
        tryThisNow: "Find your company's AI usage policy (ask HR or IT if you can't find it). If there isn't one, draft a one-page 'AI Usage Guidelines' document using an AI tool — this is a great way to demonstrate initiative while practicing your new skills.",
      },
    ],
  },
  {
    slug: "ai-powered-workflows",
    title: "AI-Powered Workflows",
    label: "PRODUCTIVITY",
    dot: "dot-yellow",
    color: "#F1C40F",
    btnStyle: "btn-accent-yellow",
    description: "Master the tools that 10x your output — eliminate busywork and focus on what matters.",
    longDescription: "Learn to integrate AI into your daily workflow. From email and meetings to data analysis and reporting, this track shows you exactly how to use AI tools to reclaim hours every week.",
    lessons: [
      {
        slug: "email-and-communication",
        title: "AI for Email & Communication",
        duration: "12 min",
        description: "Draft, reply, and manage email in a fraction of the time.",
        free: true,
        content: `## Reclaim Your Inbox

The average professional spends 28% of their workday on email. AI can cut that dramatically — not by ignoring emails, but by making you faster at the ones that matter.

### Drafting Emails

Instead of staring at a blank screen, give AI the context and let it draft:

**The prompt pattern**: "Draft a [tone] email to [recipient/role] about [topic]. Key points: [bullets]. Keep it [length]."

**Example**: "Draft a professional email to my project stakeholder about a two-week delay in the launch timeline. Key points: the delay is due to a dependency on the vendor API, we've identified a workaround, new launch date is March 15. Keep it under 150 words."

The result won't be perfect, but it'll be 80% there in 10 seconds instead of 10 minutes.

### Replying to Difficult Emails

Got a passive-aggressive email from a colleague? A complaint from a client? Paste it in and ask:

"I received this email. Help me draft a professional, calm response that [addresses their concern / sets a boundary / proposes next steps]."

AI is great at de-escalation because it has no ego.

### Summarising Email Threads

Long email chains are time sinks. Paste the thread and ask:

"Summarise this email thread. What's being decided? What's unresolved? What action items exist?"

### Meeting Follow-ups

After a meeting, give AI your rough notes and ask it to:
- Write a structured summary with action items
- Draft a follow-up email to attendees
- Create a list of decisions made vs. still pending

### The Daily Email Workflow

1. **Morning**: Use AI to summarise overnight emails and prioritise
2. **Throughout the day**: Draft replies using AI, then edit for tone and context
3. **End of day**: Have AI compile your sent actions into a daily summary

This alone can save 45-60 minutes per day.`,
        keyTakeaways: [
          "Use the prompt pattern: tone + recipient + topic + key points + length",
          "AI excels at de-escalating difficult email situations — no ego involved",
          "Summarise long email threads to extract decisions and action items",
          "Build a daily email workflow: summarise, draft, compile",
        ],
        tryThisNow: "Take the last difficult or time-consuming email you wrote. Paste the context into an AI tool and ask it to draft a reply. Compare the time it took vs. how long you spent on the original. Then do this for your next 3 emails today.",
      },
      {
        slug: "meetings-and-notes",
        title: "AI for Meetings & Notes",
        duration: "10 min",
        description: "Turn meetings into structured action items automatically.",
        free: true,
        content: `## Meetings That Actually Lead to Action

Most meeting notes are either non-existent or useless. AI changes that by turning raw notes or transcripts into structured, actionable outputs.

### Before the Meeting

Give AI your meeting agenda and ask:
- "What questions should I prepare for this meeting?"
- "Based on this agenda, what decisions need to be made?"
- "Summarise the key context I need before this meeting" (paste relevant docs)

### During the Meeting

Take rough notes — bullet points, fragments, even voice-to-text transcription. Don't worry about formatting. Just capture the key points.

Tools like Otter.ai, Fireflies.ai, or Microsoft Copilot can auto-transcribe. But even phone voice memos work.

### After the Meeting (Where the Magic Happens)

Paste your rough notes or transcript and ask:

**For a summary**: "Convert these meeting notes into a structured summary with: Attendees, Key Discussion Points, Decisions Made, Action Items (with owners and deadlines), and Open Questions."

**For follow-up emails**: "Based on these meeting notes, draft a follow-up email to all attendees summarising what was discussed and confirming action items."

**For project updates**: "Extract all action items from these notes and format them as a task list with owners and due dates."

### The Meeting Template

Create a reusable prompt:

"I just had a meeting about [topic]. Here are my raw notes: [paste notes]. Please create:
1. A 3-sentence executive summary
2. A list of decisions made
3. Action items with owners and deadlines
4. Questions that were raised but not resolved
5. A draft follow-up email to attendees"

Save this as a template and reuse it after every meeting.

### Recurring Meetings

For weekly standups or recurring meetings, ask AI to:
- Compare this week's notes to last week's — what progressed, what's stuck?
- Identify patterns — are the same issues coming up repeatedly?
- Generate a monthly summary from 4 weeks of meeting notes`,
        keyTakeaways: [
          "Prepare better by having AI generate questions and context summaries before meetings",
          "Don't worry about perfect notes — capture rough points and let AI structure them",
          "Use a reusable meeting template prompt for consistent, actionable outputs",
          "For recurring meetings, have AI compare notes week-over-week to spot patterns",
        ],
        tryThisNow: "After your next meeting, paste your rough notes into an AI tool using the template prompt above. Share the structured output with your team. Notice how much faster and more useful this is than traditional note-taking.",
      },
      {
        slug: "research-and-analysis",
        title: "AI for Research & Analysis",
        duration: "15 min",
        description: "Compress hours of research into minutes with AI-assisted analysis.",
        free: false,
        content: `## Research in Minutes, Not Hours

Whether you're preparing a market analysis, evaluating vendors, or building a business case — AI can compress research that used to take days into focused, high-quality work sessions.

### The Research Framework

**Step 1: Define what you need**
Don't just ask "tell me about X." Be specific:
- "I'm evaluating CRM platforms for a 50-person sales team. Compare Salesforce, HubSpot, and Pipedrive on: pricing for our team size, ease of use, integration with Gmail, and reporting capabilities."

**Step 2: Get the overview**
Use AI for a first pass — the broad strokes, key themes, major players.

**Step 3: Go deeper on what matters**
Once you have the overview, drill into specific areas: "Tell me more about HubSpot's reporting limitations for teams our size."

**Step 4: Challenge the output**
Ask AI to argue the other side: "What are the strongest arguments against choosing HubSpot?" This guards against confirmation bias.

**Step 5: Verify critical facts**
AI will sometimes make up statistics, company details, or pricing. Verify anything you'll put in a presentation or decision document.

### Analysing Documents

Upload PDFs, reports, or long documents and ask:
- "What are the 5 most important takeaways from this report?"
- "Summarise this contract, highlighting any unusual or risky clauses"
- "Compare these two proposals and create a pros/cons table"

### Building Business Cases

Give AI your context and ask it to help structure:
- "I want to propose we invest in [tool/project]. Help me build a business case. Our current process takes X hours/week, costs $Y, and has these pain points: [list]. Draft an executive summary, cost-benefit analysis, and implementation timeline."

### Data Interpretation

Paste data (even rough numbers) and ask:
- "What trends do you see in this data?"
- "Create a summary of these survey results, highlighting surprising findings"
- "Help me explain these quarterly numbers to a non-technical audience"`,
        keyTakeaways: [
          "Be specific in research prompts — define exactly what you need to compare and evaluate",
          "Always challenge AI's output by asking it to argue the opposing view",
          "Verify critical facts, especially statistics, pricing, and specific claims",
          "Use AI to build structured business cases and data summaries",
        ],
        tryThisNow: "Pick a decision you need to make at work — a tool to evaluate, a process to improve, or a proposal to build. Use AI to research it following the 5-step framework. Notice how much faster you get to a structured, defensible position.",
      },
    ],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    label: "COMMUNICATION",
    dot: "dot-pink",
    color: "#FB6182",
    btnStyle: "btn-accent-pink",
    description: "The skill gap isn't technical — it's knowing how to talk to AI.",
    longDescription: "Learn to write prompts that get precise, useful results every time. From basic patterns to advanced techniques like chain-of-thought and few-shot prompting, this track makes you fluent in the language of AI.",
    lessons: [
      {
        slug: "anatomy-of-a-great-prompt",
        title: "Anatomy of a Great Prompt",
        duration: "12 min",
        description: "The framework that turns vague AI outputs into exactly what you need.",
        free: true,
        content: `## Why Most People Get Bad Results from AI

The #1 reason people are disappointed by AI isn't the technology — it's the prompt. Vague inputs produce vague outputs. Specific inputs produce specific, useful outputs.

### The CRAFT Framework

Great prompts have five elements. You don't need all five every time, but the more you include, the better your results.

**C — Context**: What's the situation? What background does the AI need?
"I'm a marketing manager at a B2B SaaS company targeting mid-market CFOs."

**R — Role**: Who should the AI act as?
"Act as an experienced copywriter who specialises in financial services."

**A — Action**: What exactly do you want it to do?
"Write three subject lines for a cold email campaign."

**F — Format**: How should the output be structured?
"Present each as a numbered option with a brief explanation of why it would work."

**T — Tone**: What voice or style should it use?
"Professional but not stuffy. Confident, not pushy."

### Putting It Together

**Bad prompt**: "Write me an email subject line."

**Good prompt**: "I'm a marketing manager at a B2B SaaS company targeting mid-market CFOs. Act as an experienced copywriter who specialises in financial services. Write three subject lines for a cold email campaign about our automated expense reporting tool. Present each as a numbered option with a brief explanation of why it would work. Tone: professional but not stuffy."

The difference in output quality is dramatic.

### Common Mistakes

1. **Too vague**: "Help me with my presentation" → "Help me create a 10-slide presentation structure for a board meeting about Q3 results."
2. **No format specified**: AI will guess how to structure the output. Tell it what you want.
3. **No context**: AI doesn't know your situation unless you tell it. The more relevant context, the better.
4. **Asking for too much at once**: Break complex requests into steps.`,
        keyTakeaways: [
          "Use the CRAFT framework: Context, Role, Action, Format, Tone",
          "Specific prompts produce dramatically better results than vague ones",
          "Always specify the output format you want",
          "Break complex requests into smaller, sequential steps",
        ],
        tryThisNow: "Take a prompt you've used recently that gave mediocre results. Rewrite it using the CRAFT framework. Compare the outputs. Save your improved prompt as a template for future use.",
      },
      {
        slug: "iteration-and-refinement",
        title: "Iteration: The Real Skill",
        duration: "10 min",
        description: "The first output is never the final output. Learn to refine like a pro.",
        free: true,
        content: `## Stop Accepting the First Draft

Most people type a prompt, get a response, and either accept it or give up. The real skill is **iteration** — refining the output through follow-up prompts until it's exactly right.

### The Iteration Mindset

Think of AI as a very fast but literal-minded colleague. The first draft is a starting point, not the finished product. Your job is to direct, refine, and shape.

### Iteration Techniques

**Narrow the focus**: "This is good, but make the second paragraph more specific to healthcare companies."

**Adjust the tone**: "Rewrite this to be less formal — imagine you're explaining it to a smart friend over coffee."

**Change the format**: "Convert this into bullet points" or "Turn this into a table comparing the three options."

**Ask for alternatives**: "Give me three completely different approaches to this same brief."

**Challenge the output**: "What's wrong with this analysis? What am I missing? Play devil's advocate."

**Build incrementally**: Start with an outline, approve it, then expand section by section.

### The 3-Prompt Rule

For any important output, plan for at least three prompts:

1. **Generate**: Get the first draft
2. **Refine**: Fix tone, structure, specificity
3. **Polish**: Final adjustments, formatting, edge cases

### Conversation Memory

AI remembers context within a conversation. Use this:
- "Based on what we discussed above..."
- "Keep the tone from the previous version but change the structure to..."
- "Apply the same analysis to this new dataset"

### When to Start Fresh

Sometimes iteration isn't working and a fresh conversation with a completely different prompt approach works better. If you've gone back and forth more than 5-6 times without getting closer, start over with a rethought prompt.`,
        keyTakeaways: [
          "The first AI output is a starting point, not the finished product",
          "Use the 3-prompt rule: generate, refine, polish",
          "Leverage conversation memory — AI remembers context within a chat",
          "If 5-6 iterations aren't working, start fresh with a rethought prompt",
        ],
        tryThisNow: "Pick a task you need to do today. Instead of trying to get the perfect result in one prompt, deliberately plan for three rounds: generate → refine → polish. Notice how the final output compares to your usual one-shot attempts.",
      },
      {
        slug: "advanced-techniques",
        title: "Advanced Prompt Techniques",
        duration: "15 min",
        description: "Chain-of-thought, few-shot, and system prompts — the power user toolkit.",
        free: false,
        content: `## Level Up Your Prompting

Once you've mastered the CRAFT framework and iteration, these advanced techniques will make you genuinely dangerous with AI.

### Chain-of-Thought Prompting

Instead of asking for an answer, ask AI to **think through the problem step by step**.

**Without chain-of-thought**: "Should we switch from Slack to Teams?"

**With chain-of-thought**: "I need to decide whether to switch from Slack to Teams. Think through this step by step: first, list what we currently use Slack for. Then, evaluate whether Teams can do each of those things. Then, consider migration costs and risks. Finally, give a recommendation with your reasoning."

This produces much more thorough, well-reasoned outputs.

### Few-Shot Prompting

Show AI **examples** of what you want before asking it to produce new output.

"Here are two examples of how I write project status updates:

Example 1: [paste your actual update]
Example 2: [paste another]

Now write a status update for this week. Here are the raw details: [paste notes]. Match the tone, format, and level of detail from my examples."

This is incredibly powerful for maintaining your personal voice and style.

### Role Stacking

Give AI **multiple perspectives** to consider:

"Analyse this proposal from three perspectives:
1. As the CFO, focused on ROI and risk
2. As the head of engineering, focused on technical feasibility
3. As a customer, focused on how this changes their experience

Then synthesise the three views into a recommendation."

### Constraint-Based Prompting

Sometimes the best way to get good output is to **add constraints**:

- "Explain this in exactly 3 sentences"
- "Use only words a 12-year-old would understand"
- "Give me the answer in a table with exactly 4 columns"
- "Respond as if you only have 30 seconds to explain this"

Constraints force clarity and creativity.

### System Prompts and Custom Instructions

Most AI tools let you set persistent instructions (ChatGPT's "Custom Instructions," Claude's "Project" feature). Use these for:
- Your role and industry context
- Preferred output formats
- Tone and style preferences
- Things to always include or avoid

Set these once and every conversation starts with your context already loaded.`,
        keyTakeaways: [
          "Chain-of-thought prompting produces more thorough analysis by asking AI to reason step by step",
          "Few-shot prompting with examples maintains your personal voice and style",
          "Role stacking gives you multiple perspectives on a single problem",
          "Set up custom instructions to avoid repeating context in every conversation",
        ],
        tryThisNow: "Try all four techniques today: (1) Ask AI to think through a decision step-by-step, (2) Give it 2 examples of your writing style and ask it to match, (3) Have it analyse something from 3 different stakeholder perspectives, (4) Set up custom instructions in your preferred AI tool.",
      },
    ],
  },
  {
    slug: "ai-for-leaders",
    title: "AI for Leaders",
    label: "STRATEGY",
    dot: "dot-purple",
    color: "#7C3AED",
    btnStyle: "btn-accent-purple",
    description: "For managers and team leads: evaluate tools, build adoption strategy, upskill your team.",
    longDescription: "This track is for people who need to make decisions about AI — not just use it. Learn how to evaluate tools, build a business case, manage the change, and create a culture of experimentation.",
    lessons: [
      { slug: "building-the-business-case", title: "Building the Business Case for AI", duration: "15 min", description: "How to make the case to leadership — with numbers, not buzzwords.", free: true, content: "## Making the Case\n\nLeadership doesn't care about AI. They care about outcomes. Your job is to translate AI capabilities into business language: time saved, costs reduced, revenue increased, risks mitigated.\n\n### The Framework\n\n**Start with the problem, not the technology.** Don't say \"we should use AI.\" Say \"we're spending 200 hours per month on manual data entry, and here's how we can cut that by 80%.\"\n\n### Building Your Case\n\n**Step 1: Audit current processes**\nMap out where your team spends time. Identify repetitive, manual, or time-intensive tasks.\n\n**Step 2: Quantify the cost**\nHours per week × hourly cost × 52 weeks = annual cost of the current process.\n\n**Step 3: Identify the AI solution**\nBe specific about which tool and how it would work. Not \"AI could help\" but \"Claude for Business at $30/user/month would allow the team to draft reports in 20% of the current time.\"\n\n**Step 4: Calculate the ROI**\nCost of tool vs. time saved. Include implementation time as a cost. Most AI tools pay for themselves within 1-2 months.\n\n**Step 5: Address risks proactively**\nData privacy, accuracy, change management. Show you've thought about what could go wrong.\n\n### The One-Pager\n\nPut it all in a single page:\n- Problem (2 sentences)\n- Current cost (1 number)\n- Proposed solution (2 sentences)\n- Expected savings (1 number)\n- Investment required (1 number)\n- Timeline (1 sentence)\n- Risks and mitigation (3 bullets)", keyTakeaways: ["Lead with the business problem, not the technology", "Quantify current costs before proposing AI solutions", "Calculate specific ROI with tool costs vs. time saved", "Address data privacy and accuracy risks proactively"], tryThisNow: "Pick one repetitive process in your team. Calculate how many hours it takes per month and what that costs. Then research one AI tool that could help and calculate the potential savings. Draft the one-pager." },
      { slug: "managing-ai-adoption", title: "Managing AI Adoption in Your Team", duration: "12 min", description: "Change management for AI — practical, not theoretical.", free: true, content: "## AI Adoption Is a People Problem\n\nThe technology is the easy part. Getting your team to actually use it — and use it well — is the real challenge.\n\n### The Adoption Curve\n\nYour team will fall into predictable groups:\n- **Enthusiasts (15%)**: Already using AI. Leverage them as champions.\n- **Curious (35%)**: Open to it but need guidance. These are your quick wins.\n- **Skeptics (35%)**: Need proof before they'll try. Show them results from the first two groups.\n- **Resistors (15%)**: May never fully adopt. That's okay — focus your energy elsewhere.\n\n### The 30-Day Playbook\n\n**Week 1: Permission and safety**\n- Share the company's AI policy (or create one)\n- Make it clear that using AI is encouraged, not cheating\n- Address data privacy concerns directly\n\n**Week 2: Quick wins**\n- Show 3 specific use cases relevant to your team's work\n- Do a live demo — show the before/after for a real task\n- Give everyone a specific \"try this\" challenge\n\n**Week 3: Sharing and learning**\n- Team show-and-tell: everyone shares one thing they tried\n- Celebrate successes, troubleshoot failures\n- Start a shared prompt library\n\n**Week 4: Integration**\n- Identify which tasks should now routinely use AI\n- Set up shared tools and templates\n- Plan the next month's focus areas\n\n### What Not to Do\n\n- Don't mandate AI use without training\n- Don't make people feel stupid for not knowing how to use it\n- Don't automate jobs away without having honest conversations first\n- Don't expect perfection immediately — this is a learning curve", keyTakeaways: ["Focus on the curious 35% for quick wins — enthusiasts will self-serve, skeptics need proof", "Permission and psychological safety come before training", "Run a 30-day playbook: safety → quick wins → sharing → integration", "Don't mandate use without training or honest conversations"], tryThisNow: "Map your team onto the adoption curve. Identify your enthusiasts and curious group. Ask one enthusiast to share their best AI use case at your next team meeting." },
      { slug: "evaluating-ai-tools", title: "Evaluating AI Tools for Your Team", duration: "12 min", description: "A practical framework for choosing the right tools without getting overwhelmed.", free: false, content: "## Cutting Through the Noise\n\nEvery vendor claims their AI tool will transform your business. Most won't. Here's how to evaluate what's actually worth your team's time and budget.\n\n### The Evaluation Framework\n\n**1. Does it solve a real problem?**\nStart with the problem, not the tool. If you can't clearly articulate the problem it solves, skip it.\n\n**2. What's the learning curve?**\nA tool your team won't use is worthless regardless of features. Evaluate: can someone get value from it in under 30 minutes?\n\n**3. What are the data/privacy implications?**\nWhere does data go? Is it used for training? Is it enterprise-ready? Does it meet your compliance requirements?\n\n**4. What's the total cost?**\nPer-seat pricing × number of users + implementation time + training time. Compare this to the value of time saved.\n\n**5. Does it integrate with your existing stack?**\nA standalone tool creates friction. Integration with existing tools (email, docs, project management) drives adoption.\n\n### The Pilot Approach\n\nNever roll out to the whole team at once:\n1. Pick 3-5 people (mix of enthusiasts and curious)\n2. Give them 2 weeks with a specific use case\n3. Measure: time saved, quality of output, user satisfaction\n4. Decide based on data, not demos\n\n### Red Flags\n\n- No free trial or pilot option\n- Can't explain how your data is handled\n- Requires significant IT infrastructure changes\n- The demo only shows cherry-picked examples\n- Pricing isn't transparent", keyTakeaways: ["Start with the problem, not the tool — if you can't articulate the problem, skip it", "Evaluate learning curve: can someone get value in under 30 minutes?", "Always pilot with 3-5 people before rolling out to the full team", "Red flags: no free trial, opaque data handling, non-transparent pricing"], tryThisNow: "Pick one AI tool your team has been considering. Run it through the 5-question evaluation framework. Then identify 3-5 people for a 2-week pilot and define the specific use case they'll test." },
    ],
  },
  {
    slug: "build-with-no-code",
    title: "Build with No-Code AI",
    label: "CREATION",
    dot: "dot-orange",
    color: "#F97316",
    btnStyle: "btn-accent-orange",
    description: "Build AI-powered apps and automations without writing code.",
    longDescription: "You don't need to be a developer to build AI-powered tools. This track teaches you to use no-code platforms to create chatbots, automations, and internal tools that solve real problems.",
    lessons: [
      { slug: "automation-fundamentals", title: "Automation Fundamentals", duration: "15 min", description: "Understand triggers, actions, and flows — the building blocks of automation.", free: true, content: "## Think Like an Automator\n\nAutomation isn't coding. It's connecting tools with logic. If you can describe a process as \"when X happens, do Y\" — you can automate it.\n\n### The Building Blocks\n\n**Triggers**: The event that starts the automation.\n- A new email arrives\n- A form is submitted\n- A row is added to a spreadsheet\n- A specific time/date arrives\n- A Slack message contains a keyword\n\n**Actions**: What happens when the trigger fires.\n- Send an email\n- Create a task in your project tool\n- Update a spreadsheet\n- Post a message in Slack\n- Generate content with AI\n\n**Conditions**: Logic that determines which actions to take.\n- If the email is from a client → create a high-priority task\n- If the form response says \"urgent\" → send a Slack notification\n- If the amount is over $1,000 → require approval\n\n### The Platform Landscape\n\n**Zapier**: The most beginner-friendly. Connects 5,000+ apps. Best for simple automations.\n\n**Make (formerly Integromat)**: More powerful than Zapier. Visual flow builder. Better for complex, multi-step automations.\n\n**n8n**: Open-source and self-hostable. Most flexible but slightly steeper learning curve.\n\n**Power Automate**: Microsoft's tool. Best if you're in the Microsoft ecosystem.\n\n### Your First Automation Ideas\n\n1. **Meeting follow-ups**: Calendar event ends → AI generates summary from notes → Email sent to attendees\n2. **Lead capture**: Form submitted → Data added to CRM → Welcome email sent → Slack notification to sales\n3. **Content repurposing**: Blog post published → AI generates social media posts → Scheduled to social platforms\n4. **Report generation**: Scheduled weekly → Pull data from tools → AI generates summary → Email to team\n5. **Customer feedback**: Support ticket closed → Satisfaction survey sent → Results logged to spreadsheet → AI analyses trends monthly", keyTakeaways: ["Automation = triggers + actions + conditions — no coding required", "Start with Zapier for simplicity, graduate to Make or n8n for complexity", "Identify processes with the pattern 'when X happens, do Y'", "Start with one simple automation and build confidence"], tryThisNow: "Sign up for a free Zapier account. Create your first 'Zap': when you receive an email with a specific label/subject, automatically create a task in your project management tool. This takes about 10 minutes." },
      { slug: "building-ai-chatbots", title: "Building AI Chatbots (No Code)", duration: "15 min", description: "Create a custom AI chatbot for your team or customers in under an hour.", free: true, content: "## Your Own AI Assistant\n\nYou can build a custom AI chatbot that knows about your company, products, or processes — and deploy it for your team or customers. No coding required.\n\n### Why Custom Chatbots?\n\nGeneric AI tools don't know about your company. A custom chatbot can:\n- Answer HR questions using your company handbook\n- Help customers with product-specific support\n- Onboard new team members with company knowledge\n- Answer internal process questions (\"how do I submit an expense report?\")\n\n### The Easy Route: Custom GPTs / Claude Projects\n\nBoth ChatGPT and Claude let you create custom assistants:\n\n**ChatGPT Custom GPTs**:\n1. Go to ChatGPT → Explore GPTs → Create\n2. Describe what your GPT should do\n3. Upload reference documents (handbook, FAQs, product docs)\n4. Set the tone and boundaries\n5. Share with your team via link\n\n**Claude Projects**:\n1. Create a new Project in Claude\n2. Add your reference documents to the project knowledge\n3. Set custom instructions for how it should respond\n4. Share with your team\n\n### The More Powerful Route: Dedicated Platforms\n\nFor customer-facing chatbots or more complex needs:\n\n**Chatbase**: Upload docs or website → get a chatbot widget. Dead simple.\n\n**Voiceflow**: Visual conversation designer. Great for complex, multi-step chatbot flows.\n\n**Botpress**: Open-source. More control, slightly more setup.\n\n### Best Practices\n\n- **Scope it narrowly**: A chatbot that answers HR questions well is better than one that tries to do everything poorly.\n- **Test with real questions**: Before deploying, test with 20-30 real questions your team/customers actually ask.\n- **Add fallbacks**: When the chatbot doesn't know the answer, it should say so and route to a human.\n- **Keep knowledge current**: Set a monthly reminder to update the chatbot's reference documents.", keyTakeaways: ["Custom chatbots give AI knowledge about your specific company and processes", "Start with Custom GPTs or Claude Projects — they're free and take minutes to set up", "Scope narrowly: a chatbot that does one thing well beats one that does everything poorly", "Always add fallbacks that route to humans when the chatbot is unsure"], tryThisNow: "Create a Custom GPT or Claude Project right now. Upload one document (your company handbook, a product FAQ, or a process guide). Ask it 10 questions and see how well it answers. Refine the instructions based on where it falls short." },
      { slug: "internal-tools-with-ai", title: "Building Internal Tools with AI", duration: "15 min", description: "Create dashboards, forms, and tools for your team using AI-assisted platforms.", free: false, content: "## From Idea to Tool in an Afternoon\n\nThe line between \"I wish we had a tool for this\" and \"we have a tool for this\" has never been thinner. AI-assisted no-code platforms let you build functional internal tools in hours.\n\n### What You Can Build\n\n- **Dashboards**: Pull data from multiple sources into a single view\n- **Internal apps**: Custom forms, approval workflows, inventory trackers\n- **Data tools**: Upload CSVs, analyse data, generate reports\n- **Portals**: Client-facing or employee-facing information hubs\n\n### The Platforms\n\n**Retool / Appsmith**: Drag-and-drop internal tool builders. Connect to databases, APIs, and spreadsheets.\n\n**Glide / Softr**: Turn spreadsheets into apps. If your data lives in Google Sheets or Airtable, these are magic.\n\n**Cursor / Replit**: AI-assisted coding environments. Describe what you want in plain English and the AI writes the code. You don't need to understand the code — just describe what the tool should do.\n\n### The Process\n\n1. **Define the problem**: What manual process are you replacing? What information do people need?\n2. **Sketch it out**: Draw the screens on paper. What does the user see? What can they do?\n3. **Build the MVP**: Use the simplest tool that works. Don't over-engineer.\n4. **Test with real users**: Put it in front of 3-5 people. Watch them use it. Fix what's confusing.\n5. **Iterate**: Add features based on actual usage, not assumptions.\n\n### When to Build vs. Buy\n\n**Build when**:\n- Your need is specific to your company/process\n- Existing tools require expensive customisation\n- You need something simple but custom\n\n**Buy when**:\n- The problem is well-solved by existing software\n- Security/compliance requirements are high\n- You need ongoing support and updates", keyTakeaways: ["AI-assisted no-code tools let you build functional internal tools in hours", "Start with the problem and sketch screens on paper before building", "Use Glide/Softr for spreadsheet-to-app, Cursor/Replit for AI-assisted code", "Build an MVP, test with 3-5 real users, then iterate"], tryThisNow: "Identify one manual process your team does with spreadsheets. Sign up for Glide (free tier) and try turning that spreadsheet into a simple app. Spend 30 minutes — you'll be surprised how far you get." },
    ],
  },
  {
    slug: "future-proof-skills",
    title: "Future-Proof Skills",
    label: "RESILIENCE",
    dot: "dot-teal",
    color: "#14B8A6",
    btnStyle: "btn-accent-teal",
    description: "Build the human skills that become more valuable as AI handles the routine.",
    longDescription: "AI can't replace creativity, judgment, or leadership. This track builds the skills that matter more in an AI-powered world — critical thinking, storytelling, strategic decision-making, and the ability to adapt continuously.",
    lessons: [
      { slug: "critical-thinking-in-ai-age", title: "Critical Thinking in the AI Age", duration: "12 min", description: "When AI can generate anything, the ability to evaluate becomes your superpower.", free: true, content: "## The Most Important Skill You Can Build\n\nAI can generate text, analysis, code, and images in seconds. Which means the bottleneck has shifted. The scarce resource is no longer **production** — it's **evaluation**.\n\n### Why Critical Thinking Matters More Now\n\nWhen anyone can generate a polished-looking report in 30 seconds, the person who can tell whether that report is actually good becomes invaluable. When AI can produce five strategic options, the person who can identify which one will actually work is the one leadership needs.\n\n### The AI Critical Thinking Framework\n\nEvery time you use AI output, run it through these filters:\n\n**1. Is this accurate?**\nAI makes things up confidently. Check facts, statistics, and specific claims. If you can't verify it, flag it.\n\n**2. Is this complete?**\nAI often misses context it doesn't have. What's not in the output that should be? What assumptions is it making?\n\n**3. Is this relevant?**\nAI gives you what you asked for, not necessarily what you need. Does this actually address the real question?\n\n**4. Is this biased?**\nAI reflects the biases in its training data. Is it presenting one perspective as universal? Is it making cultural assumptions?\n\n**5. So what?**\nThe most important question. What does this mean for our specific situation? What action should we take?\n\n### Building the Muscle\n\nCritical thinking isn't a talent — it's a practice. Try these daily:\n\n- **Red team your own ideas**: Before presenting anything, spend 5 minutes trying to tear it apart. What would a skeptic say?\n- **Ask \"compared to what?\"**: Numbers without context are meaningless. 20% improvement sounds great — compared to what baseline?\n- **Seek disconfirming evidence**: We naturally look for information that supports our view. Deliberately seek the opposite.\n- **Separate correlation from causation**: AI is particularly bad at this. Just because two things appear together doesn't mean one causes the other.", keyTakeaways: ["The scarce resource has shifted from production to evaluation", "Run AI output through 5 filters: accurate, complete, relevant, unbiased, actionable", "Critical thinking is a practice, not a talent — build it daily", "Always ask 'compared to what?' — numbers without context are meaningless"], tryThisNow: "Take the last piece of AI-generated content you used at work. Run it through the 5-filter framework. Did you find anything inaccurate, incomplete, or biased that you missed the first time? This is your calibration exercise." },
      { slug: "storytelling-with-data", title: "Storytelling with Data & AI", duration: "12 min", description: "AI can crunch the numbers. You need to make people care about what they mean.", free: true, content: "## Data Doesn't Speak for Itself\n\nAI can analyse a dataset in seconds and produce charts, trends, and summaries. But a spreadsheet has never changed anyone's mind. Stories do.\n\n### Why This Skill Is AI-Proof\n\nAI can tell you that customer churn increased 15% last quarter. It can generate a chart. It can even suggest possible causes. What it **can't** do is:\n- Know which stakeholder cares about which metric\n- Frame the data in a way that drives a specific decision\n- Build narrative tension that makes people pay attention\n- Connect data to emotion and urgency\n\nThat's storytelling. And it's increasingly what separates good analysts from great ones.\n\n### The Data Story Framework\n\n**1. Start with the audience**\nWhat do they care about? What decision are they facing? What would make them act?\n\n**2. Lead with the insight, not the data**\n- Bad: \"Q3 churn was 12.3%, up from 10.7% in Q2.\"\n- Good: \"We're losing customers faster than we're gaining them — and it's accelerating.\"\n\n**3. Use the And-But-Therefore structure**\n- **And** (context): We launched three new features AND customer usage increased 20%.\n- **But** (tension): BUT churn also increased 15%, concentrated in mid-market accounts.\n- **Therefore** (action): THEREFORE we need to investigate whether new features are creating complexity that drives mid-market customers away.\n\n**4. One chart, one message**\nEvery visualisation should make exactly one point. If you need to explain what a chart means, the chart isn't working.\n\n**5. End with the decision**\nData stories should end with a clear ask: here's what I recommend, here's what I need from you, here's the decision we need to make.\n\n### Using AI to Build Better Data Stories\n\nAI is your research assistant, not your storyteller:\n- Use AI to find patterns in data\n- Use AI to generate chart options\n- Use AI to identify counterarguments\n- Then **you** craft the narrative that connects it all", keyTakeaways: ["Data doesn't speak for itself — stories drive decisions, not spreadsheets", "Lead with the insight, not the data point", "Use the And-But-Therefore structure for narrative tension", "Every chart should make exactly one point — if it needs explanation, simplify"], tryThisNow: "Take a recent data presentation you've given (or need to give). Rewrite the opening using the And-But-Therefore structure. Replace your opening slide's data table with one sentence that captures the key insight. Notice how much more compelling it becomes." },
      { slug: "adaptability-as-a-skill", title: "Adaptability as a Skill", duration: "10 min", description: "The meta-skill: how to keep learning when the landscape keeps changing.", free: false, content: "## The Only Constant Is Change (And It's Accelerating)\n\nSix months ago, the best AI tools looked different than they do today. Six months from now, they'll look different again. The specific tools you learn will change. The ability to **learn new tools quickly** is permanent.\n\n### Adaptability Is Learnable\n\nMost people think adaptability is a personality trait. It's not. It's a set of habits:\n\n**1. Stay curious, not anxious**\nWhen a new AI tool launches, your first reaction matters. \"This is interesting, let me try it\" beats \"This is threatening, will it replace me?\" every time. Curiosity is a choice.\n\n**2. Learn in public**\nShare what you're learning with colleagues. Write about it, demo it, discuss it. Teaching forces understanding and builds your reputation as someone who adapts.\n\n**3. Build learning time into your week**\nBlock 30 minutes per week to explore something new. Not a course — just hands-on experimentation with a tool or technique. Make it a recurring calendar event.\n\n**4. Embrace being a beginner**\nThe people who adapt fastest are comfortable not knowing things. \"I haven't used this before, show me\" is a power move, not a weakness.\n\n**5. Focus on transferable patterns**\nSpecific tools come and go. The underlying patterns persist:\n- Prompt engineering works across all LLMs\n- Automation logic (triggers → actions) works across all platforms\n- Data literacy applies regardless of which tool you use\n- Critical thinking about AI output is always relevant\n\n### The T-Shaped Professional\n\nAim to be T-shaped:\n- **Broad** familiarity with many AI tools and concepts (the horizontal bar)\n- **Deep** expertise in 1-2 tools most relevant to your role (the vertical bar)\n\nBreadth gives you adaptability. Depth gives you value. Together, they make you resilient.\n\n### Building Your Learning System\n\n1. **Follow 3-5 sources**: Newsletter, podcast, or social accounts that curate AI news\n2. **Try one new thing per week**: 30 minutes of hands-on experimentation\n3. **Share one thing per week**: Teach a colleague, post in a team channel\n4. **Reflect monthly**: What worked? What didn't? What's changed?\n\nThis isn't extra work — it's career insurance.", keyTakeaways: ["Adaptability is a set of habits, not a personality trait", "Block 30 minutes per week for hands-on AI experimentation", "Focus on transferable patterns (prompting, automation logic, data literacy) over specific tools", "Be T-shaped: broad familiarity + deep expertise in 1-2 tools"], tryThisNow: "Block 30 minutes on your calendar this week labeled 'AI Learning.' Pick one tool you haven't tried yet and spend the time experimenting. Share what you learned with one colleague. Repeat weekly." },
    ],
  },
];

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export function getLesson(trackSlug: string, lessonSlug: string): { track: Track; lesson: Lesson } | undefined {
  const track = getTrack(trackSlug);
  if (!track) return undefined;
  const lesson = track.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { track, lesson };
}
