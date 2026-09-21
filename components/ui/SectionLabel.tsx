interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  dark = false,
}: SectionLabelProps) {
  return (
    <span
      className={`overline ${
        dark ? "text-gold-light" : "text-gold"
      } ${className}`}
    >
      {children}
    </span>
  );
}
