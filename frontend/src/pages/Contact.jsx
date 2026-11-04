import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Failed to connect to server. Is the backend running?' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="pt-24 pb-16 min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{ 
        // A modern, abstract background image that fits the dark theme
        backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')" 
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/90 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact <span className="text-emerald-400">Me</span></h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? Let's talk.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info - Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400"><FiMail size={24} /></div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-medium text-white">atikuharunajigawa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400"><FiPhone size={24} /></div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-medium text-white">+2348140195260</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400"><FiMapPin size={24} /></div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="font-medium text-white">Nigeria</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all text-white resize-none placeholder-slate-500"
                  placeholder="Hello Atiku, I would like to..."
                ></textarea>
              </div>

              {/* Status Message */}
              {status.text && (
                <div className={`p-4 rounded-lg text-sm font-medium border ${status.type === 'success' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' : 'bg-red-400/10 text-red-400 border-red-400/20'}`}>
                  {status.text}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : <><FiSend className="mr-2" /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;