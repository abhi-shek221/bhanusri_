import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Briefcase,
  Award,
  Star,
  Rocket,
  Cpu,
  Sparkles,
  Moon,
  Zap,
} from "lucide-react";

const SpacePortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30 - 15,
        y: (e.clientY / window.innerHeight) * 30 - 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: -10,
      };
      setShootingStars((prev) => [...prev, newStar]);
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Liver Cirrhosis Prediction",
      desc: "AI-based system using KNN, XGBoost, RF with Flask web UI for real-time predictions of liver cirrhosis.–Developed a Python-based system using Flask for real-time predictions of liver cirrhosis.–Utilized KNN, XGBoost, and RF algorithms for accurate predictions. ",
      tech: ["Python", "Flask", "ML", "scikit-learn"],
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Fitness Management System",
      desc: "Full-stack platform with secure login, trainer allocation, and member dashboards –Developed a React.js + Node.js + Express.js platform for gym management.–Implemented secure login, trainer allocation, and member dashboards. ",
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Vishnu Pharmacy Project",
      desc: "Medicine lookup system enabling instant record retrieval for students and faculty –Created a medicine lookup system for students and faculty.–Reduced manual dependency by enabling instant medicine record retrieval.",
      tech: ["Python", "MySQL", "Visual Studio"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
    },
  ];

  const experience = {
    title: "AI Intern",
    company: "Aptpath Company",
    period: "July 2025 – Aug 2025",
    points: [
      "Built TalentAlign AI with GPT and Sentence Transformers",
      "Automated skill gap detection and job recommendations",
      "Used Qdrant for vector search with embedding caching",
      "Designed scalable HR automation pipelines",
    ],
  };

  const skills = {
    languages: ["Python", "C", "Java", "HTML", "CSS", "MySQL"],
    tools: ["GitHub", "VS Code", "MS Office"],
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
    ],
  };

  const achievements = [
    "1st Place – Poster Presentation on Violence Against Women",
    "Finalist – College Ideathon (2023)",
    "Smart India Hackathon Participant – NVC Detection System",
  ];

  const certifications = [
    "IBM – Machine Learning (Coursera)",
    "Google – Foundations of Cybersecurity (Coursera)",
    "Japanese Language – Global Language Solutions",
    "AI for Everyone: Master the Basics",
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animation: `twinkle ${
                  Math.random() * 3 + 1
                }s infinite alternate`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center">
          <Rocket className="w-20 h-20 mx-auto text-purple-400 mb-6 animate-bounce" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"
                style={{ animation: "shimmer 2s infinite" }}
              ></div>
            </div>
          </div>
          <p className="text-purple-400 text-xl font-semibold animate-pulse">
            Launching Portfolio...
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-purple-500 rounded-full"
                style={{
                  animation: `bounce 1s infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-x-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s infinite alternate`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: "shootingStar 2s linear forwards",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 1), 0 0 60px rgba(236, 72, 153, 0.5); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shootingStar {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(-300px, 300px); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-xl border-b border-purple-500 border-opacity-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            <Sparkles
              className="inline w-6 h-6 text-purple-400 mr-2 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            BHANUSRI
          </div>
          <div className="flex gap-6">
            {["Home", "Projects", "Experience", "Skills", "Contact"].map(
              (section, idx) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section.toLowerCase());
                    document
                      .getElementById(section.toLowerCase())
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative hover:text-purple-400 transition-all duration-300 ${
                    activeSection === section.toLowerCase()
                      ? "text-purple-400"
                      : ""
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {section}
                  {activeSection === section.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className="text-center relative z-10 animate-slideInUp"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="mb-8 relative">
            <div className="absolute inset-0 animate-ping opacity-20">
              <Rocket className="w-24 h-24 mx-auto text-purple-400" />
            </div>
            <Rocket
              className="w-24 h-24 mx-auto text-purple-400 relative"
              style={{ animation: "float 3s ease-in-out infinite" }}
            />
          </div>
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            VENIGALLA BHANUSRI
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Moon className="w-6 h-6 text-purple-300 animate-bounce" />
            <p className="text-2xl text-purple-300">
              AI Enthusiast | ML Engineer | Full Stack Developer
            </p>
            <Star
              className="w-6 h-6 text-pink-300 animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Computer Science Student at SVECW | Building intelligent systems
            that make a difference
          </p>
          <div className="flex gap-4 justify-center">
            {[
              { Icon: Mail, href: "mailto:bhanusri.venigalla03@gmail.com" },
              { Icon: Github, href: "https://github.com/venigalla-bhanusri" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-125 transform"
                style={{
                  animation: "glow 3s infinite",
                  animationDelay: `${idx * 0.2}s`,
                }}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 px-4"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slideInUp">
            <Star
              className="inline w-10 h-10 mb-2 animate-spin"
              style={{ animationDuration: "4s" }}
            />{" "}
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-purple-900 to-black p-6 rounded-2xl border-2 border-purple-500 hover:border-pink-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slideInUp"
                style={{
                  animation: `glow 3s infinite, slideInUp 0.8s ease-out forwards`,
                  animationDelay: `${idx * 0.2}s`,
                  opacity: 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                <div
                  className={`text-transparent bg-gradient-to-r ${project.color} bg-clip-text mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-800 rounded-full text-xs hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer transform hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slideInUp">
            <Briefcase className="inline w-10 h-10 mb-2 animate-bounce" />{" "}
            Experience
          </h2>
          <div className="relative bg-gradient-to-br from-purple-900 to-black p-8 rounded-2xl border-2 border-purple-500 animate-slideInLeft overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-purple-300 mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-gray-400">{experience.company}</p>
                </div>
                <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold animate-pulse">
                  {experience.period}
                </span>
              </div>
              <ul className="space-y-4">
                {experience.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 animate-slideInLeft"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <Star className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0 animate-pulse" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slideInUp">
            <Code
              className="inline w-10 h-10 mb-2"
              style={{ animation: "rotate 4s linear infinite" }}
            />{" "}
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Languages", items: skills.languages, delay: 0 },
              { title: "Tools", items: skills.tools, delay: 0.2 },
              { title: "Interests", items: skills.interests, delay: 0.4 },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-900 to-black p-6 rounded-2xl border-2 border-purple-500 hover:border-pink-500 transition-all duration-500 animate-slideInUp hover:scale-105"
                style={{
                  animationDelay: `${category.delay}s`,
                  animation: `slideInUp 0.8s ease-out forwards, glow 3s infinite ${category.delay}s`,
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-2"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <Award className="inline w-8 h-8 mb-2 animate-bounce" />{" "}
                Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-purple-900 to-black p-5 rounded-xl border-2 border-purple-500 hover:border-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                    style={{
                      animation: `slideInLeft 0.8s ease-out forwards`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slideInRight">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <Award
                  className="inline w-8 h-8 mb-2 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />{" "}
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-purple-900 to-black p-5 rounded-xl border-2 border-purple-500 hover:border-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
                    style={{
                      animation: `slideInRight 0.8s ease-out forwards`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slideInUp">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Sparkles className="inline w-10 h-10 mb-2 animate-pulse" /> Let's
            Connect
          </h2>
          <p className="text-gray-400 mb-12 text-xl">
            Interested in collaborating or have a project in mind? Feel free to
            reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:bhanusri.venigalla03@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              style={{ animation: "glow 3s infinite" }}
            >
              <Mail className="w-6 h-6 group-hover:animate-bounce" />
              <span className="font-semibold">
                bhanusri.venigalla03@gmail.com
              </span>
            </a>
            <a
              href="tel:+917569133973"
              className="px-8 py-4 bg-purple-800 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 font-semibold"
            >
              +91-7569133973
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-purple-500 border-opacity-30 bg-black bg-opacity-50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Venigalla Bhanusri. Built with React & passion for space
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpacePortfolio;
