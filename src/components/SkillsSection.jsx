import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML 5", level: 90, category: "frontend" },
  { name: "CSS 3", level: 80, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Redux", level: 70, category: "frontend"},
  { name: "TypeScript", level: 50, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  {name: "Context API", level: 70, category: "frontend"},
  {name: "Redux Toolkit", level: 70, category: "frontend"},
  {name: "React Hooks", level: 70, category: "frontend"},

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  {name: "PostgreSQL", level: 70, category: "backend"},
  {name: "JWT Authentication", level: 90, category: "backend"},
  {name: "Zod", level: 80, category: "backend"},

  // Tools
  { name: "Git", level: 80, category: "tools" },
  { name: "Github", level: 80, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
  { name: "Render", level: 80, category: "tools" },
  { name: "Fork", level: 70, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-32 px-4 relative bg-gradient-to-b from-secondary/10 to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          My <span className="text-primary"> Skills</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 animate-fade-in-delay-1">
          Technologies and tools I work with
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-delay-2">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-semibold text-sm",
                "hover:scale-105 active:scale-95",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_8px_20px_rgba(139,92,246,0.3)] animate-glow-pulse"
                  : "bg-background/60 text-foreground/70 border border-border hover:border-primary/50 hover:bg-background/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slide-up 0.5s ease-out forwards`,
                animationDelay: `${key * 0.1}s`,
              }}
              className={cn(
                "bg-card p-7 rounded-xl transition-all duration-300",
                "border border-border/50",
                "hover:border-primary/50",
                "relative overflow-hidden group",
                hoveredIndex === key
                  ? "shadow-[0_20px_40px_rgba(139,92,246,0.15)] scale-105"
                  : "shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
              )}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0",
                  "transition-all duration-300 rounded-xl",
                  hoveredIndex === key ? "opacity-100" : "opacity-0"
                )}
              />

              <div className="relative z-10">
                <div className="text-left mb-6">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <div className="w-full bg-secondary/40 h-3 rounded-full overflow-hidden border border-border/30">
                  <div
                    className={cn(
                      "bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full",
                      "origin-left animate-[grow_1.5s_ease-out]",
                      "shadow-[0_0_12px_rgba(139,92,246,0.4)]",
                      hoveredIndex === key && "shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                    )}
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-4">
                  <span className="text-sm font-bold text-primary text-lg">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
