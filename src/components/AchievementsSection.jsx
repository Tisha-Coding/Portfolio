import { useState } from "react";
import { cn } from "../lib/utils";
import {
  Trophy,
  Medal,
  Award,
  FileText,
  ScrollText,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const tabs = ["all", "achievements", "certifications"];

const items = [
  {
    icon: Medal,
    title: "10th Gold Medalist",
    desc: "Secured 1st position in school for outstanding academic performance in Class X.",
    tag: "Rank",
    category: "achievements",
  },
  {
    icon: Trophy,
    title: "2nd Position in Class XII",
    desc: "Achieved 2nd position with 92.92% in the Senior Secondary examination.",
    tag: "Rank",
    category: "achievements",
  },
  {
    icon: Award,
    title: "Roll of Honour - BCA",
    desc: "Awarded the Roll of Honour for securing 2nd position in Panjab University during BCA.",
    tag: "Honour",
    category: "achievements",
  },
  {
    icon: GraduationCap,
    title: "Merit-cum-Scholarship",
    desc: "Awarded the Merit-cum-Scholarship from Thapar Institute of Engineering and Technology for academic excellence.",
    tag: "Scholarship",
    category: "achievements",
  },
  {
    icon: FileText,
    title: "Co-authored Patent",
    desc: "Co-authored a patent and research paper on a Smart Parking System.",
    tag: "Research",
    category: "achievements",
  },
  {
    icon: Sparkles,
    title: "Online Quizzes & Digital Content",
    desc: "Actively participated in numerous online quizzes and digital certificate-making contests.",
    tag: "Participation",
    category: "achievements",
  },
  {
    icon: ScrollText,
    title: "Full Stack Web Development with AI",
    desc: "Certificate of completion in Full Stack Web Development with AI from Aimerz.",
    tag: "Aimerz",
    category: "certifications",
  },
  {
    icon: ScrollText,
    title: "Full Stack Development (Web)",
    desc: "Certificate of completion in Full Stack Development (Web) from PW Skills.",
    tag: "PW Skills",
    category: "certifications",
  },
  {
    icon: ScrollText,
    title: "Basic Computer Knowledge",
    desc: "Certification in the Basic Computer Knowledge course from Detective Corporation.",
    tag: "Detective Corp.",
    category: "certifications",
  },
];

export const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredItems = items.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section
      id="achievements"
      className="py-32 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/40"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Achievements &amp; <span className="text-primary"> Certifications</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 animate-fade-in-delay-1">
          Recognitions, awards, and credentials I've earned along the way
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-delay-2">
          {tabs.map((tab, key) => (
            <button
              key={key}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-semibold text-sm",
                "hover:scale-105 active:scale-95",
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-[0_8px_20px_rgba(139,92,246,0.3)] animate-glow-pulse"
                  : "bg-background/60 text-foreground/70 border border-border hover:border-primary/50 hover:bg-background/80"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, key) => (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slide-up 0.5s ease-out forwards`,
                animationDelay: `${key * 0.1}s`,
              }}
              className={cn(
                "bg-card p-7 rounded-xl transition-all duration-300",
                "border border-border/50 hover:border-primary/50",
                "relative overflow-hidden group flex flex-col",
                hoveredIndex === key
                  ? "shadow-[0_20px_40px_rgba(139,92,246,0.15)] scale-105"
                  : "shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0",
                  "transition-all duration-300 rounded-xl",
                  hoveredIndex === key ? "opacity-100" : "opacity-0"
                )}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-4 rounded-xl bg-primary/15 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2 text-left">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-left">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
