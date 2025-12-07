const experiences = [
  {
    title: "Full Stack Developer",
    company: "Innostax Software Labs Pvt LTD",
    years: "June - Present",
    description:
      "Developed a complete reporting platform that digitized appraisal workflows and improved data visibility using React, Node.js, TypeScript, Prisma, and PostgreSQL.",
  },
  {
    title: "Full Stack Developer - Intern",
    company: "Austere Systems Limited",
    years: "Jan - June",
    description:
      "Migrated a legacy PHP website to a modern React + Node.js stack, boosting performance, UI responsiveness, and overall user experience.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>
        <div className="relative border-l-2 border-primary/30 ml-8">
          {experiences.map((exp, idx) => (
            <div className="flex mb-12 items-start relative" key={exp.title}>
              <span className="absolute -left-11 top-2 flex items-center">
                <span className="block h-5 w-5 rounded-full bg-primary border-4 border-background"></span>
              </span>
              <div className="flex-1 ml-8 bg-card rounded-2xl p-8 shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl md:text-2xl font-semibold">
                    {exp.title}
                  </h3>
                  <div className="bg-primary/70 text-primary-foreground text-sm px-4 py-1 rounded-full font-medium">
                    {exp.years}
                  </div>
                </div>
                <h4 className="text-lg text-muted-foreground mb-1 font-semibold">
                  {exp.company}
                </h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
