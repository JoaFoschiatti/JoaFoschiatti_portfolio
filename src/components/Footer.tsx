type FooterProps = {
  name: string;
  location: string;
  email: string;
  githubUrl: string;
  instagramUrl: string;
  summary: string;
};

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.91v2.83c0 .28.18.6.69.5A10.17 10.17 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="16"
        height="16"
        x="4"
        y="4"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer({
  name,
  location,
  email,
  githubUrl,
  instagramUrl,
  summary,
}: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-line)] bg-transparent py-8">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[1rem] font-medium text-[var(--color-foreground)]">{name}</p>
          <p className="mt-2 text-sm text-[var(--color-subtle)]">{location}</p>
          <a
            className="mt-2 inline-block text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-subtle)]">{summary}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[var(--color-foreground)]">
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] shadow-[inset_0_0_0_1px_rgba(17,24,32,0.08)] hover:bg-[#f2eee7]"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] shadow-[inset_0_0_0_1px_rgba(17,24,32,0.08)] hover:bg-[#f2eee7]"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
