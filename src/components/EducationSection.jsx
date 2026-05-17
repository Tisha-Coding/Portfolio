import { useState } from "react";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Master of Computer Applications (MCA)",
    institute: "Thapar Institute of Engineering and Technology, Patiala",
    score: "9.53 CGPA",
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Government College for Girls, Ludhiana",
    score: "93.1%",
  },
  {
    icon: School,
    degree: "Senior Secondary (Class XII)",
    institute: "S.D.P. College for Girls, Ludhiana",
    score: "92.92%",
  },
  {
    icon: Award,
    degree: "Secondary (Class X)",
    institute: "Shri Shalig Ram Jain Public School, Ludhiana",
    score: "92.22%",
  },
];

export const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="education"
      className="py-32 px-4 relative bg-gradient-to-b from-secondary/10 to-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          My <span className="text-primary"> Education</span>
        </h2>
        <p className="text-center text-foreground/60 mb-20 animate-fade-in-delay-1">
          My academic journey and milestones
        </p>

        {/* Alternating timeline */}
        <div className="relative">
          {/* center line (desktop) / left line (mobile) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/10 rounded-full animate-border-flow" />

          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={edu.degree}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative mb-12 last:mb-0"
                style={{
                  animation: `slide-up 0.6s ease-out forwards`,
                  animationDelay: `${idx * 0.15}s`,
                }}
              >
                {/* node dot */}
                <span className="absolute left-6 md:left-1/2 -translate-x-1/2 top-7 z-10 flex items-center justify-center">
                  <span
                    className={`block h-5 w-5 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 ${
                      hoveredIndex === idx ? "scale-150 animate-glow-pulse" : ""
                    }`}
                  />
                </span>

                {/* card — alternates side on desktop */}
                <div
                  className={`pl-16 md:pl-0 ${
                    isLeft
                      ? "md:pr-[calc(50%_+_2.5rem)]"
                      : "md:pl-[calc(50%_+_2.5rem)]"
                  }`}
                >
                  <div
                    className={`relative bg-card rounded-2xl p-7 border border-border/40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(139,92,246,0.18)] hover:-translate-y-1 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* connector arrow */}
                    <span
                      className={`hidden md:block absolute top-7 h-3 w-3 rotate-45 bg-card border-border/40 ${
                        isLeft
                          ? "-right-1.5 border-t border-r"
                          : "-left-1.5 border-b border-l"
                      }`}
                    />

                    <div
                      className={`flex items-center gap-4 mb-3 ${
                        isLeft ? "md:flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div className="p-3 rounded-xl bg-primary/15 flex-shrink-0 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {edu.score}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg md:text-xl leading-snug mb-1.5 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.institute}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
