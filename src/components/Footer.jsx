import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-secondary/40 relative border-t border-border/50 mt-16 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-20 animate-shimmer pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section - Brand & Message */}
          <div className="text-center md:text-left space-y-2 animate-fade-in">
            <h3 className="text-lg font-bold text-foreground">
              <span className="text-primary">✨</span> Tisha
            </h3>
            <p className="text-xs text-muted-foreground/80">
              Building beautiful web experiences with <span className="text-primary font-semibold">React</span> & <span className="text-primary font-semibold">Node.js</span>
            </p>
          </div>

          {/* Center Section - Quick Info */}
          <div className="text-center animate-fade-in-delay-1">
            <p className="text-xs font-medium text-foreground mb-2">
              Full Stack Developer | Web Designer
            </p>
            <p className="text-xs text-muted-foreground/70">
              Turning ideas into elegant digital solutions ⚡
            </p>
          </div>

          {/* Right Section - Back to Top */}
          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/15 hover:bg-primary/25 text-primary transition-all duration-300 border border-primary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-110 hover:-translate-y-1 group animate-fade-in-delay-2"
            title="Back to top"
          >
            <ArrowUp size={22} className="group-hover:animate-bounce" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-muted-foreground/70">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-foreground">Tisha</span>. Crafted with <span className="text-red-500 animate-pulse inline-block">❤️</span> All rights reserved.
          </p>
          <p className="text-muted-foreground/70">
            Version <span className="text-primary font-semibold">1.0</span> | Last updated <span className="text-primary font-semibold">2026</span>
          </p>
        </div>

        {/* Fun Message */}
        <div className="text-center mt-6 text-xs text-muted-foreground/60 italic animate-pulse">
          "Keep coding, keep creating! 🚀"
        </div>
      </div>
    </footer>
  );
};
