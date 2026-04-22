import { Brain, Code, Download, Send, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-delay-1">
            <h3 className="text-3xl font-bold leading-tight">Passionate Web Developer</h3>

            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              With 1 year of experience in web development, I specialize in
              creating responsive, accessible, and performant web applications
              using modern technologies.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.4)] hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                Get In Touch
                <Send size={20} />
              </a>

              <a
                href="https://raw.githubusercontent.com/Tisha-Coding/Tisha-Resume/main/Tisha_Resume.pdf"
                download="Tisha_Resume.pdf"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold shadow-[0_8px_20px_rgba(139,92,246,0.15)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.3)] hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Brain,
                title: "Technical Thinker",
                desc: "I enjoy designing logical, efficient systems using technologies like React, Node.js, and Prisma.",
              },
              {
                icon: User,
                title: "Experience-Driven Design",
                desc: "I create interfaces that feel smooth, responsive, and easy for users to navigate.",
              },
              {
                icon: Code,
                title: "Modern Development",
                desc: "I write clean, structured code using modern standards, tools, and workflows.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  animation: `slide-up 0.6s ease-out forwards`,
                  animationDelay: `${idx * 0.15}s`,
                }}
                className="gradient-border p-7 card-hover group transition-all duration-300 hover:shadow-[0_15px_35px_rgba(139,92,246,0.15)]"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-primary/15 flex-shrink-0 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
