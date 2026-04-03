"use client";

export function LessonContent({ content }: { content: string }) {
  // Simple markdown-to-HTML renderer
  const html = content
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="heading-serif text-[20px] mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="heading-serif text-[26px] mt-10 mb-4">$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text-primary">$1</strong>')
    // Italic
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    // Bullet lists
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-[15px] text-text-secondary ml-4"><span class="text-accent mt-1.5 flex-shrink-0">&#8226;</span><span>$1</span></li>')
    // Paragraphs (lines that don't start with < )
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('<')) return block;
      if (block.trim() === '') return '';
      // Wrap consecutive <li> items in <ul>
      if (block.includes('<li')) {
        return `<ul class="space-y-1.5 my-4">${block}</ul>`;
      }
      return `<p class="text-[15px] text-text-secondary leading-relaxed my-4">${block}</p>`;
    })
    .join('\n');

  return (
    <div
      className="lesson-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
