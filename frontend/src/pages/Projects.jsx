import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// 1. IMPORT ALL LOCAL IMAGES
import kasascanImg from '../assets/projects/kasascan.jpg';
import ecommerceImg from '../assets/projects/ecommerce.jpg';
import dataPipelineImg from '../assets/projects/data-pipeline.jpg';
import bajosetImg from '../assets/projects/bajoset.jpg';
import deviceShieldImg from '../assets/projects/deviceshield.jpg';
import csvPipelineImg from '../assets/projects/csv-pipeline.jpg';
import studentSystemImg from '../assets/projects/student-system.jpg';
import expenseTrackerImg from '../assets/projects/expense-tracker.jpg';
import portfolioImg from '../assets/projects/portfolio.jpg';

const Projects = () => {
  const projects = [
    // --- YOUR TOP TIER GITHUB PROJECTS ---
    {
      title: "KasaScan Pro (AI Mobile App)",
      description: "An offline-capable AI application that analyzes soil health from images and provides fertilizer recommendations in Hausa for rural farmers.",
      tech: ["Flutter", "AI/ML", "Hausa NLP"],
      image: kasascanImg, // 2. USE THE IMPORTED VARIABLE
      github: "https://github.com/SmartCode-Hubs/kasascan-pro",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A complete MERN stack e-commerce solution with JWT authentication, cart state management, and a full Admin Dashboard for analytics and CRUD operations.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: ecommerceImg,
      github: "#", 
      live: "#"
    },
    {
      title: "End-to-End E-Commerce Data Engineering",
      description: "A scalable data pipeline that extracts, transforms, and loads e-commerce data for analytics, utilizing Python, Pandas, and SQL databases.",
      tech: ["Python", "Jupyter", "SQL", "ETL"],
      image: dataPipelineImg,
      github: "https://github.com/SmartCode-Hubs/End-to-End-Ecommerce-Data-Engineering",
      live: "#"
    },
    {
      title: "BAJOSET (Academic Journal System)",
      description: "A robust research management system enabling authors to submit articles and editors to manage peer reviews.",
      tech: ["PHP", "MySQL", "HTML5"],
      image: bajosetImg,
      github: "https://github.com/SmartCode-Hubs/Babura-Journal-of-Science-Engineering-and-Technology-BAJOSET-",
      live: "https://bajoset.futb.edu.ng/"
    },
    {
      title: "DeviceShieldPro",
      description: "Ultimate device protection app featuring a stunning glassmorphism splash screen, animated loading progress, and secure authentication flow.",
      tech: ["UI/UX", "Authentication", "Mobile"],
      image: deviceShieldImg,
      github: "https://github.com/SmartCode-Hubs/DeviceShieldPro",
      live: "#"
    },
    {
      title: "CSV to SQL Data Pipeline",
      description: "Automated pipeline with weekly scheduling, data cleaning, transformation, logging, and duplicate protection.",
      tech: ["Python", "Pandas", "MySQL"],
      image: csvPipelineImg,
      github: "https://github.com/SmartCode-Hubs/csv-to-sql-pipeline",
      live: "#"
    },
    
    // --- THE AUSPIFY INTERNSHIP TASKS ---
    {
      title: "Student Management System",
      description: "A full-stack MERN application to manage student records with full CRUD capabilities, secure login, and statistical analysis.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: studentSystemImg,
      github: "#", 
      live: "#"
    },
    {
      title: "Expense Tracker",
      description: "A secure web application to track income, expenses, and visualize financial summaries using charts and dynamic data visualization.",
      tech: ["React", "Recharts", "JWT Auth"],
      image: expenseTrackerImg,
      github: "#", 
      live: "#"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion with a fully functional contact backend.",
      tech: ["React", "Tailwind", "Vite"],
      image: portfolioImg,
      github: "#", 
      live: "https://atikuharuna.cv/"
    }
  ];

  return (
    <div 
      className="pt-24 pb-16 min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" 
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/90 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My <span className="text-emerald-400">Projects</span></h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A comprehensive showcase of my full-stack applications, AI integrations, and data engineering pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }} 
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-400/50 transition-all group flex flex-col shadow-2xl"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden border-b border-slate-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-6 border-t border-slate-700/50 pt-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <FiGithub className="mr-2" size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
                    <FiExternalLink className="mr-2" size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;