import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Code2, GraduationCap } from 'lucide-react';

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Let's Start a Conversation
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you have a question about our products, or you are reviewing this university project, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Panel - Developer & Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:w-2/5 bg-brand-900 text-white p-10 lg:p-14 relative overflow-hidden"
          >
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-brand-50">
                  <div className="bg-white/10 p-3 rounded-full"><MapPin size={20} /></div>
                  <p>Rawalpindi, Punjab, Pakistan</p>
                </div>
                <div className="flex items-center gap-4 text-brand-50">
                  <div className="bg-white/10 p-3 rounded-full"><Phone size={20} /></div>
                  <p>+92 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-4 text-brand-50">
                  <div className="bg-white/10 p-3 rounded-full"><Mail size={20} /></div>
                  <p>student@university.edu</p>
                </div>
              </div>

              {/* Required University Details - Highlighted Beautifully */}
              <div className="mt-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 text-brand-300 font-semibold mb-4 uppercase tracking-wider text-xs">
                  <GraduationCap size={16} /> University Project Profile
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-brand-100/70 text-sm">Developer Name</span>
                    <span className="font-bold">Hammad Khaliq</span> {/* CHANGE THIS TO YOUR ACTUAL NAME */}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-100/70 text-sm">Registration Number</span>
                    <span className="font-bold font-mono bg-white/10 px-2 py-1 rounded text-sm">FA24-BAI-018</span> {/* CHANGE THIS */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-3/5 p-10 lg:p-14"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" placeholder="Hammad" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" placeholder="Khaliq" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" placeholder="hammad@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="submit" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-600 transition-colors shadow-md w-full sm:w-auto flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}