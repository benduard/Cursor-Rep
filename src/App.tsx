import { Navigation } from "./components/navigation";
import { ContactForm } from "./components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { CursorSpotlight } from "./components/cursor-spotlight";
import { TypewriterTitle } from "./components/typewriter-title";

function App() {
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
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-[rgba(147,51,234,0.1)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <TypewriterTitle />
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-mono">
            Economics Background · AI Solutions · Web Development
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative scroll-mt-20">
        <div className="absolute inset-0 bg-[rgba(147,51,234,0.05)]" />
        <div className="container mx-auto">
          <h2 className="text-4xl mb-12 text-center text-white font-mono">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto text-white space-y-8 mb-16">
            <div className="bg-black border border-purple-500/30 rounded-xl p-6 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-xl text-white mb-3 font-mono">
                Houston Roots
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                Born and raised in the vibrant city of Houston, where my passion for technology and economics began to take shape.
              </p>
            </div>
            
            <div className="bg-black border border-purple-500/30 rounded-xl p-6 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-xl text-white mb-3 font-mono">
                Academic Journey
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                Made the move to College Station to pursue my Bachelor of Science in Economics at Texas A&M University.
              </p>
            </div>
            
            <div className="bg-black border border-purple-500/30 rounded-xl p-6 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-xl text-white mb-3 font-mono">
                Entrepreneurial Spirit
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                Launched my own web development and AI solutions enterprises during my second year of college.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8 mb-4 text-purple-500" />,
                title: "Economics & Finance",
                description: "Strong foundation in financial analysis"
              },
              {
                icon: <Code2 className="h-8 w-8 mb-4 text-purple-500" />,
                title: "Full Stack Development",
                description: "Building modern web applications"
              },
              {
                icon: <Briefcase className="h-8 w-8 mb-4 text-purple-500" />,
                title: "AI Solutions Expert",
                description: "Implementing intelligent systems"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-black border-purple-500/30 transition-all duration-300 hover:border-purple-500">
                <CardHeader>
                  {item.icon}
                  <CardTitle className="text-white font-mono">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-white/60">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative scroll-mt-20">
        <div className="absolute inset-0 bg-[rgba(147,51,234,0.05)]" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl mb-12 text-center text-white font-mono">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: "🤖",
                title: "AI Automation Agency",
                description: "Streamlining business processes through AI"
              },
              {
                emoji: "🔍",
                title: "SEO Optimization",
                description: "Enhancing digital presence"
              },
              {
                emoji: "</> ",
                title: "Software Development",
                description: "Expert technical guidance"
              },
              {
                emoji: "🎧",
                title: "Automated Support",
                description: "AI-powered solutions"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-black border-purple-500/30 transition-all duration-300 hover:border-purple-500">
                <CardHeader>
                  <div className="text-3xl mb-4">{project.emoji}</div>
                  <CardTitle className="text-white font-mono">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/60">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative scroll-mt-20">
        <div className="absolute inset-0 bg-[rgba(147,51,234,0.05)]" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl mb-12 text-center text-white font-mono">
            Let's Connect
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/30 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <a href="https://github.com/benduard" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-purple-500 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ruben-valderrama-27b956328/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-purple-500 transition-colors">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/rubsxen/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-purple-500 transition-colors">
                Instagram
              </a>
            </div>
            <div className="text-white/60 text-sm font-mono">
              © 2025 Ruben Valderrama
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;