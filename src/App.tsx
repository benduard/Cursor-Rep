import { Navigation } from "./components/navigation";
import { ContactForm } from "./components/contact-form";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { CursorSpotlight } from "./components/cursor-spotlight";
import { TypewriterTitle } from "./components/typewriter-title";
import { AnimatedText } from "./components/animated-text";
import { ScrollAnimation } from "./components/scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Footer } from "@/components/ui/footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <CursorSpotlight />
      <ParticlesBackground />
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(147,51,234,0.15)] via-[rgba(147,51,234,0.08)] to-transparent" />
        <BackgroundPaths />
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <TypewriterTitle />
          <AnimatedText 
            text="Economist | AI Strategist | Web Developer"
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-mono mb-6"
          />
          <AnimatedText 
            text="I create AI-powered systems that help businesses grow smarter and faster."
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-mono"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 relative scroll-mt-16 -mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl mb-12 text-center text-white font-mono">
              About Me
            </h2>
          </ScrollAnimation>
          
          <div className="max-w-3xl mx-auto text-white space-y-8 mb-16">
            <ScrollAnimation>
              <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 min-h-[200px]">
                  <div>
                <h3 className="text-xl text-white mb-3 font-mono">
                      Background & Vision
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                      As an economist turned tech innovator, I blend data-driven insights with cutting-edge AI solutions. My passion lies in creating intelligent systems that transform how businesses operate and grow.
                </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 min-h-[200px]">
                  <div>
                <h3 className="text-xl text-white mb-3 font-mono">
                      Economics Foundation
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                      My economics background from Texas A&M University gives me a unique perspective on business processes and market dynamics, informing how I approach AI implementation and automation strategies.
                </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 min-h-[200px]">
                  <div>
                <h3 className="text-xl text-white mb-3 font-mono">
                      Tech & Innovation
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                      Specializing in AI-powered solutions and web development, I help businesses automate processes, enhance decision-making, and build robust digital presence through custom solutions.
                </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 relative scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(147,51,234,0.03)] to-black" />
        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl mb-12 text-center text-white font-mono">
              Services
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8 mb-4 text-purple-500" />,
                title: "Economics & Strategy",
                description: "Strategic planning and market analysis"
              },
              {
                icon: <Code2 className="h-8 w-8 mb-4 text-purple-500" />,
                title: "Full stack Web Development",
                description: "Streamlining Front-End and Back-End Integration"
              },
              {
                icon: <Briefcase className="h-8 w-8 mb-4 text-purple-500" />,
                title: "AI Solutions",
                description: "AI-Enhanced Automation for Customer-Focused Growth",
                className: "text-sm leading-tight"
              },
              {
                icon: <svg className="h-8 w-8 mb-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
                title: "Automated Lead Generation",
                description: "Automated Lead Generation Funnels"
              }
            ].map((service, index) => (
              <ScrollAnimation key={index}>
                <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <Card className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 min-h-[200px]">
                  <CardHeader>
                      {service.icon}
                    <CardTitle className="text-white font-mono">
                        {service.title}
                    </CardTitle>
                      <CardDescription className={`text-white/60 ${service.className || ''}`}>
                        {service.description}
                      </CardDescription>
                  </CardHeader>
                </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(147,51,234,0.03)] to-black" />
        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl mb-12 text-center text-white font-mono">
              Featured Projects
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: "🤖",
                title: "AI Sales Assistant",
                description: "Automated lead generation and qualification system",
                role: "Lead Developer & AI Strategist",
                impact: "Increased qualified leads by 300%",
                tech: "Python, OpenAI, React, Supabase"
              },
              {
                emoji: "📊",
                title: "Economic Forecasting Platform",
                description: "ML-powered market trend analysis tool",
                role: "Economic Analyst & Developer",
                impact: "95% prediction accuracy rate",
                tech: "Python, TensorFlow, Next.js, PostgreSQL"
              },
              {
                emoji: "🔄",
                title: "Business Process Automation",
                description: "End-to-end workflow automation suite",
                role: "Solution Architect",
                impact: "Reduced processing time by 75%",
                tech: "Node.js, React, MongoDB, Docker"
              },
              {
                emoji: "🎯",
                title: "Smart CRM Integration",
                description: "AI-enhanced customer relationship management",
                role: "Full Stack Developer",
                impact: "40% increase in customer retention",
                tech: "TypeScript, React, Supabase, GPT-4"
              }
            ].map((project, index) => (
              <ScrollAnimation key={index}>
                <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <Card className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 min-h-[300px]">
                  <CardHeader>
                    <div className="text-3xl mb-4">{project.emoji}</div>
                    <CardTitle className="text-white font-mono">
                      {project.title}
                    </CardTitle>
                      <CardDescription className="text-white/60 space-y-2">
                        <div>{project.description}</div>
                        <div className="font-semibold text-purple-400">Role: {project.role}</div>
                        <div className="font-semibold text-green-400">Impact: {project.impact}</div>
                        <div className="text-white/40 text-sm">Tech Stack: {project.tech}</div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 relative scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(147,51,234,0.03)] to-black" />
        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl mb-12 text-center text-white font-mono">
              Insights & Articles
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=2936&auto=format&fit=crop",
                category: "AI & Business",
                title: "How AI Can Boost Sales for Small Businesses",
                description: "Discover practical ways to implement AI in your sales process and achieve measurable results.",
                readTime: "5 min read",
                date: "March 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                category: "Economics",
                title: "What Economists Should Know About Automation",
                description: "Bridging the gap between economic theory and modern automation technologies.",
                readTime: "7 min read",
                date: "March 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2940&auto=format&fit=crop",
                category: "Development",
                title: "My Workflow for Building Full-Stack Apps with AI",
                description: "A detailed look at how I integrate AI tools into my development process.",
                readTime: "8 min read",
                date: "February 2024"
              },
              {
                image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2940&auto=format&fit=crop",
                category: "Tutorial",
                title: "Using Supabase for Effortless Data Capture",
                description: "Step-by-step guide to building robust backend systems with Supabase.",
                readTime: "6 min read",
                date: "February 2024"
              }
            ].map((post, index) => (
              <ScrollAnimation key={index}>
                <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <Card className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 min-h-[500px]">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center text-sm text-white/40 mb-2">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-white font-mono text-xl hover:text-purple-400 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-white/60">
                        {post.description}
                      </CardDescription>
                      <button className="mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm font-mono flex items-center gap-2">
                        Read More 
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                  </CardHeader>
                </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 relative scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(147,51,234,0.03)] to-black" />
        <div className="container mx-auto relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl mb-12 text-center text-white font-mono">
              Get in Touch
            </h2>
          </ScrollAnimation>
          <div className="max-w-5xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;