import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
// Import the PDF
import resumePdf from '../assets/pdf/resume.pdf';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-16"
      style={{ 
        // A premium, modern workspace background image
        backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')" 
      }}
    >
      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-slate-900/85 z-0"></div>

      {/* Subtle glowing blobs to keep the modern feel */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base text-emerald-400 font-semibold tracking-wide uppercase mb-4">
            Hello, World. I am
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            <span className="block">Atiku Haruna</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 pb-2">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
            I build scalable, high-performance web applications using React, Node.js, and modern cloud technologies. Passionate about clean code and intuitive user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all md:text-lg shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transform hover:-translate-y-1"
            >
              View My Work
              <FiArrowRight className="ml-2 -mr-1" />
            </Link>
            
            {/* Resume Download Button */}
            <a
              href={resumePdf} 
              download="Atiku_Haruna_CV.pdf" // This forces the browser to download it as a PDF
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 transition-all md:text-lg transform hover:-translate-y-1"
            >
              Download CV
              <FiDownload className="ml-2 -mr-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;