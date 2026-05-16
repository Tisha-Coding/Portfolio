import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WhiteBoard",
    description:
      "A real-time collaborative whiteboard built using Tldraw and Supabase, allowing multiple users to draw, edit, and save sessions seamlessly.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Tldraw SDK", "Supabase"],
    demoUrl: "https://substance-reclaim-decathlon.ngrok-free.dev/",
    githubUrl: "https://github.com/Tisha-Coding/whiteboard-project",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built using modern web technologies, enabling users to browse products, manage carts, and complete secure orders smoothly.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Razorpay", "Stripe", "JWT Authentication"],
    demoUrl: "https://ecommerce-advanced-pink.vercel.app/",
    githubUrl: "https://github.com/Tisha-Coding/ecommerce-advanced",
  },
  {
    id: 3,
    title: "Team Task Manager App",
    description:
      "A full-stack project management platform built using modern web technologies, enabling team members and admins to manage their projects and tasks efficiently.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Joi", "JWT Authentication"],
    demoUrl: "https://team-task-manager-lovat.vercel.app/signup",
    githubUrl: "https://github.com/Tisha-Coding/Team-Task-Manager",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/0 to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-delay-1">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, key) => (
            <div
              key={key}
              style={{
                animation: `slide-up 0.6s ease-out forwards`,
                animationDelay: `${key * 0.15}s`,
              }}
              className="group bg-card rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] card-hover border border-border/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary border border-primary/30" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <ExternalLink size={22} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            href="https://github.com/Tisha-Coding/"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;