type SectionHeadingProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export default function SectionHeading({
  title,
  description,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
