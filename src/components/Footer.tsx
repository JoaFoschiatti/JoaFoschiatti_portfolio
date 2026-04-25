type FooterProps = {
  name: string;
  location: string;
  email: string;
  githubUrl: string;
  summary: string;
};

export default function Footer({
  name,
  location,
  email,
  githubUrl,
  summary,
}: FooterProps) {
  return (
    <footer className="border-t border-[#ebebeb] py-8">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[1rem] font-medium text-[#171717]">{name}</p>
          <p className="mt-2 text-sm text-[#666666]">{location}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#666666]">{summary}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#4d4d4d]">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
