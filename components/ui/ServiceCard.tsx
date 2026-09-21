interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <article
      className={`group relative bg-white rounded-xl border border-border p-7 transition-all duration-300 hover:shadow-lg hover:border-gold/30 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gold left accent on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gold rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-cream-warm flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-text-primary mb-1.5">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
