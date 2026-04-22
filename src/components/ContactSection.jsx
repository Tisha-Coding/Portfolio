import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("Lt7bFUiAjymHgF7cU");

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_3iy9lv9",
        "template_1d53qtw",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ttisha2528@gmail.com",
        }
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-32 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-delay-1">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-delay-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Contact Information</h3>
            <div className="flex flex-col gap-8">
              {[
                { icon: Mail, label: "Email", value: "ttisha2528@gmail.com", href: "mailto:ttisha2528@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7973208007", href: "tel:+919973208007" },
                { icon: MapPin, label: "Location", value: "Greater Noida, Uttar Pradesh", href: null },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{ animation: `slide-up 0.5s ease-out forwards`, animationDelay: `${idx * 0.15}s` }}
                  className="flex items-start gap-5 p-6 rounded-xl bg-background/40 border border-border/30 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_12px_30px_rgba(139,92,246,0.15)] hover:scale-105"
                >
                  <div className="p-4 rounded-xl bg-primary/15 flex-shrink-0 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold group-hover:text-primary transition-colors">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors block font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground block font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4" style={{ animation: `slide-up 0.5s ease-out forwards`, animationDelay: "0.6s" }}>
              <h4 className="font-semibold mb-6 text-center md:text-left">Connect With Me</h4>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/tisha-3835a8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:scale-125 hover:shadow-[0_8px_20px_rgba(139,92,246,0.3)]">
                  <Linkedin size={22} />
                </a>
                <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ypszhws" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:scale-125 hover:shadow-[0_8px_20px_rgba(139,92,246,0.3)]">
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>
          <form
            className="bg-card p-8 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/30 animate-fade-in-delay-3"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Send a Message</h3>
            <div className="space-y-6">
              <div className="relative group">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 group-focus-within:text-primary transition-colors"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-background transition-all duration-300",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary",
                    "focus:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
                    focusedField === "name" ? "border-primary/50" : "border-border"
                  )}
                  placeholder="Your name"
                />
              </div>
              <div className="relative group">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 group-focus-within:text-primary transition-colors"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-background transition-all duration-300",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary",
                    "focus:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
                    focusedField === "email" ? "border-primary/50" : "border-border"
                  )}
                  placeholder="your@email.com"
                />
              </div>
              <div className="relative group">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-3 group-focus-within:text-primary transition-colors"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-background resize-none transition-all duration-300",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary",
                    "focus:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
                    focusedField === "message" ? "border-primary/50" : "border-border"
                  )}
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 mt-8",
                  "disabled:opacity-70 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
