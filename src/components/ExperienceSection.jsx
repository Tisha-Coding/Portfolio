const experiences = [
  {
    title: "Full Stack Developer",
    company: "Innostax Software Labs Pvt LTD",
    years: "June 2025 - Jan 2026",
    description:
      "Developed a complete reporting platform that digitized appraisal workflows and improved data visibility using React, Node.js, TypeScript, Prisma, and PostgreSQL.",
  },
  {
    title: "Full Stack Developer - Intern",
    company: "Austere Systems Limited",
    years: "Jan 2025 - June 2025",
    description:
      "Migrated a legacy PHP website to a modern React + Node.js stack, boosting performance, UI responsiveness, and overall user experience.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
          Experience
        </h2>
        <div className="relative ml-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20 rounded-full animate-border-flow"></div>
          {experiences.map((exp, idx) => (
            <div
              className="flex mb-12 items-start relative"
              key={exp.title}
              style={{
                animation: `slide-up 0.6s ease-out forwards`,
                animationDelay: `${idx * 0.2}s`,
              }}
            >
              <span className="absolute -left-[3.25rem] top-2 flex items-center">
                <span className="block h-6 w-6 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:animate-glow-pulse transition-all duration-300"></span>
              </span>
              <div className="flex-1 ml-8 bg-card rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/30 card-hover group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)]">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <h3 className="text-2xl md:text-2xl font-bold">
                    {exp.title}
                  </h3>
                  <div className="bg-primary/20 text-primary text-sm px-4 py-2 rounded-full font-semibold border border-primary/30">
                    {exp.years}
                  </div>
                </div>
                <h4 className="text-lg text-primary mb-3 font-semibold">
                  {exp.company}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
