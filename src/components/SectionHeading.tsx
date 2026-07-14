type SectionHeadingProps = {
  title: string;
  description: string;
  eyebrow?: string;
  index?: string;
  light?: boolean;
};

export default function SectionHeading({
  title,
  description,
  eyebrow,
  index,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="section-heading" data-theme={light ? "dark" : "light"}>
      <div className="section-heading-label">
        {index ? <span>{index}</span> : null}
        {eyebrow ? <p>{eyebrow}</p> : null}
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
