import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent block">
              Tisha
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed font-light">
            I build modern and user-friendly websites that look great and work
            smoothly. I focus on clean design, simple interactions, and a
            seamless experience for users.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
