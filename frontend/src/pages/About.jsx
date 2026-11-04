import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiFlutter } from 'react-icons/si';
import { TbBrandOpenai, TbChartDots } from 'react-icons/tb';
import { FiDownload } from 'react-icons/fi';
// CRITICAL: Import the PDF directly so Vite bundles it correctly
import resumePdf from '../assets/pdf/resume.pdf'; 

const About = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-slate-300" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'SQL (MySQL)', icon: <SiMysql className="text-blue-500" /> },
    { name: 'AI / ML', icon: <TbBrandOpenai className="text-teal-400" /> },
    { name: 'Data Pipelines', icon: <TbChartDots className="text-purple-400" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-sky-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About <span className="text-emerald-400">Me</span></h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-6 bg-slate-900/60 p-8 rounded-2xl border border-slate-700 backdrop-blur-md shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white">Bridging Data Engineering & Full Stack Development</h3>
            
            <p className="leading-relaxed text-slate-300 text-lg">
              I am a versatile engineer with a unique blend of skills in <strong className="text-emerald-400">Data Engineering, AI/ML, and Full Stack Development</strong>. My expertise lies in building end-to-end systems from architecting automated data pipelines that clean and transform raw datasets, to training AI models, and wrapping them in secure, responsive web applications.
            </p>
            
            <p className="leading-relaxed text-slate-300">
              I believe that data is only as valuable as the systems that deliver it. That is why I specialize in the MERN stack (MongoDB, Express, React, Node.js) alongside Python. Whether I'm building the backend for a research management system like <strong>BAJOSET</strong>, or developing the offline AI mobile app <strong>KasaScan Pro</strong> to help farmers in Jigawa, my goal is always to solve real-world problems with clean, scalable code.
            </p>

            <p className="leading-relaxed text-slate-300">
              As a lifelong learner, I am constantly optimizing database queries, exploring new cloud technologies, and designing intuitive user interfaces that make complex data easy to understand.
            </p>
            
            {/* Stats Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/50 mt-6">
              <div>
                <p className="text-emerald-400 font-bold text-2xl">10+</p>
                <p className="text-sm text-slate-400 font-medium">Production Projects</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-2xl">4+</p>
                <p className="text-sm text-slate-400 font-medium">Industry Systems</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold text-2xl">100%</p>
                <p className="text-sm text-slate-400 font-medium">Dedication</p>
              </div>
            </div>

            {/* Corrected CV Download Link */}
            <div className="pt-4">
              <a 
                href={resumePdf} 
                download="Atiku_Haruna_CV.pdf"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-emerald-500/30 transform hover:-translate-y-1"
              >
                <FiDownload className="mr-2" /> Download Full CV
              </a>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Tech Arsenal</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl hover:bg-slate-700 transition-all border border-slate-700 hover:border-emerald-400/50 hover:-translate-y-1 shadow-lg"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-[11px] font-medium text-center text-slate-300 leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;