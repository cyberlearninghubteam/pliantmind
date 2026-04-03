export interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; score: number; tags: string[] }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How often do you use AI tools (ChatGPT, Claude, Copilot, etc.) in your work?",
    options: [
      { text: "Never — I haven't tried any yet", score: 0, tags: ["foundations"] },
      { text: "I've tried them a few times", score: 1, tags: ["foundations", "prompting"] },
      { text: "A few times a week", score: 2, tags: ["productivity", "prompting"] },
      { text: "Daily — it's part of my workflow", score: 3, tags: ["creation", "strategy"] },
    ],
  },
  {
    id: 2,
    question: "When you use AI and get a mediocre result, what do you typically do?",
    options: [
      { text: "Give up and do it manually", score: 0, tags: ["prompting"] },
      { text: "Try rephrasing my question once or twice", score: 1, tags: ["prompting"] },
      { text: "Iterate several times with follow-up prompts", score: 2, tags: ["productivity"] },
      { text: "I have saved prompt templates I refine over time", score: 3, tags: ["creation", "strategy"] },
    ],
  },
  {
    id: 3,
    question: "How would you describe your team's attitude toward AI?",
    options: [
      { text: "Most people are worried about it", score: 0, tags: ["foundations", "resilience"] },
      { text: "Curious but nobody's really leading the charge", score: 1, tags: ["strategy", "foundations"] },
      { text: "A few people use it, but it's not widespread", score: 2, tags: ["strategy"] },
      { text: "We actively discuss and share AI use cases", score: 3, tags: ["creation"] },
    ],
  },
  {
    id: 4,
    question: "How confident are you explaining what AI can and can't do to a colleague?",
    options: [
      { text: "Not at all — I'm still figuring it out myself", score: 0, tags: ["foundations"] },
      { text: "I could explain the basics", score: 1, tags: ["foundations", "prompting"] },
      { text: "I could give a solid overview with examples", score: 2, tags: ["productivity", "strategy"] },
      { text: "Very confident — I could run a training session", score: 3, tags: ["strategy", "creation"] },
    ],
  },
  {
    id: 5,
    question: "Have you automated any part of your workflow?",
    options: [
      { text: "No — I'm not sure where to start", score: 0, tags: ["creation", "productivity"] },
      { text: "I've set up basic things (email filters, templates)", score: 1, tags: ["productivity", "creation"] },
      { text: "I use tools like Zapier or Make for some automations", score: 2, tags: ["creation"] },
      { text: "I've built multi-step automated workflows", score: 3, tags: ["creation", "strategy"] },
    ],
  },
  {
    id: 6,
    question: "When it comes to AI and data privacy, how well do you know the risks?",
    options: [
      { text: "I'm not sure what the risks are", score: 0, tags: ["foundations"] },
      { text: "I know the basics — don't share sensitive data", score: 1, tags: ["foundations"] },
      { text: "I understand enterprise vs. public tools and data policies", score: 2, tags: ["strategy"] },
      { text: "I've helped shape AI usage policies at my company", score: 3, tags: ["strategy"] },
    ],
  },
  {
    id: 7,
    question: "How do you feel about AI's impact on your career?",
    options: [
      { text: "Anxious — I'm worried about being left behind", score: 0, tags: ["resilience", "foundations"] },
      { text: "Uncertain — I can see both opportunities and risks", score: 1, tags: ["resilience"] },
      { text: "Cautiously optimistic — I think it'll help if I learn it", score: 2, tags: ["resilience", "productivity"] },
      { text: "Excited — I see it as a career accelerator", score: 3, tags: ["creation", "strategy"] },
    ],
  },
  {
    id: 8,
    question: "How often do you learn about new AI tools or techniques?",
    options: [
      { text: "Rarely — it moves too fast to keep up", score: 0, tags: ["resilience"] },
      { text: "Occasionally — I see things in the news", score: 1, tags: ["resilience", "foundations"] },
      { text: "Regularly — I follow a few sources", score: 2, tags: ["productivity", "creation"] },
      { text: "Weekly — I actively experiment with new tools", score: 3, tags: ["creation"] },
    ],
  },
  {
    id: 9,
    question: "Could you evaluate whether an AI tool is right for your team?",
    options: [
      { text: "No — I wouldn't know where to start", score: 0, tags: ["strategy", "foundations"] },
      { text: "Maybe — I'd need guidance on what to look for", score: 1, tags: ["strategy"] },
      { text: "Yes — I know the key criteria", score: 2, tags: ["strategy"] },
      { text: "I've done this before and made tool recommendations", score: 3, tags: ["strategy", "creation"] },
    ],
  },
  {
    id: 10,
    question: "What's your primary goal for learning about AI?",
    options: [
      { text: "Understanding the basics so I'm not left behind", score: 0, tags: ["foundations", "resilience"] },
      { text: "Being more productive in my current role", score: 1, tags: ["productivity", "prompting"] },
      { text: "Building AI-powered solutions for my team", score: 2, tags: ["creation"] },
      { text: "Leading AI adoption and strategy at my company", score: 3, tags: ["strategy"] },
    ],
  },
];

export interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: string;
  headline: string;
  description: string;
  recommendedTracks: string[];
}

export function calculateResult(answers: number[]): QuizResult {
  const maxScore = quizQuestions.length * 3;
  const score = answers.reduce((sum, a) => sum + a, 0);
  const percentage = Math.round((score / maxScore) * 100);

  // Count tag frequency
  const tagCounts: Record<string, number> = {};
  answers.forEach((answerIndex, qIndex) => {
    const tags = quizQuestions[qIndex].options[answerIndex]?.tags || [];
    tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  // Sort tags by frequency
  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);

  // Map tags to track slugs
  const tagToSlug: Record<string, string> = {
    foundations: "ai-essentials",
    productivity: "ai-powered-workflows",
    prompting: "prompt-engineering",
    strategy: "ai-for-leaders",
    creation: "build-with-no-code",
    resilience: "future-proof-skills",
  };

  const recommendedSlugs = sortedTags
    .slice(0, 3)
    .map((tag) => tagToSlug[tag])
    .filter(Boolean);

  let level: string;
  let headline: string;
  let description: string;

  if (percentage <= 25) {
    level = "Beginner";
    headline = "You're at the starting line — and that's a great place to be.";
    description = "Most people are exactly where you are right now. The fact that you're taking this assessment means you're already ahead of those still ignoring AI. Your recommended tracks will take you from zero to confident in weeks, not months.";
  } else if (percentage <= 50) {
    level = "Explorer";
    headline = "You've dipped your toes in — time to dive deeper.";
    description = "You have a basic understanding of AI and maybe some experience using it. The next step is building consistent habits and mastering specific techniques that will make AI a genuine force multiplier in your daily work.";
  } else if (percentage <= 75) {
    level = "Practitioner";
    headline = "You're ahead of most people — now build your edge.";
    description = "You're regularly using AI and understand its strengths and limitations. Your opportunity now is to go deeper: advanced prompting, building custom tools, or leading AI adoption in your team. You're ready for the more advanced tracks.";
  } else {
    level = "Leader";
    headline = "You're leading the pack — time to multiply your impact.";
    description = "You're already fluent with AI tools and thinking strategically about adoption. Your next move is to scale your knowledge: build tools for your team, shape your company's AI strategy, and develop the human skills that AI can't replace.";
  }

  return { score, maxScore, percentage, level, headline, description, recommendedTracks: recommendedSlugs };
}
