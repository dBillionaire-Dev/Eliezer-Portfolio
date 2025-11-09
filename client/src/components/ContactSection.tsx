
import React, { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post('http://localhost:3000/api/messages', formData);
      if (response.data.success) {
        setStatus('Message sent successfully!');
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({ 
          name: '', 
          email: '', 
          subject: '', 
          message: '' 
        });
      } else {
        setStatus('Something went wrong. Please try again.');
        toast({
          title: "Something went wrong. Please try again",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending message',error);
      setStatus('Failed to send message.');
      toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#465D93' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feel free to contact me for any project or collaboration.
            I'm always excited to work on new creative challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you need a complete brand identity, marketing materials,
                or creative consultation, I'm here to bring your vision to life.
                Let's discuss your project and create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300 hover:text-orange-400 transition-colors duration-200"><a href='mailto:impulse.grid@gmail.com' target="_blank">hello@impulse.grid.io</a></p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-300 hover:text-orange-400 transition-colors duration-200"><a href='tel:+2349046060954' target="_blank">+234-904-606-0954</a></p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@impulse.grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit TikTok Profile"
                  className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/2349039143840"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WhatsApp Page"
                  className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                  </svg>
                </a>

                <a
                  href="https://x.com/impulse_grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit X(Twitter) Profile"
                  className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/eli-ekunke-6921112a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/impulse.grid"
                  target="_blank"
                  aria-label="Visit Instagram Profile"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0-2C3.47 0 0 3.47 0 7.75v8.5C0 20.53 3.47 24 7.75 24h8.5C20.53 24 24 20.53 24 16.25v-8.5C24 3.47 20.53 0 16.25 0h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl" style={{ backgroundColor: '#2A3A7A' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-400 text-white placeholder-gray-400"
                    style={{ backgroundColor: '#1F2A5F', borderColor: '#3A4E8A' }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-400 text-white placeholder-gray-400"
                    style={{ backgroundColor: '#1F2A5F', borderColor: '#3A4E8A' }}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-400 text-white placeholder-gray-400"
                  style={{ backgroundColor: '#1F2A5F', borderColor: '#3A4E8A' }}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-400 text-white resize-none placeholder-gray-400"
                  style={{ backgroundColor: '#1F2A5F', borderColor: '#3A4E8A' }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
