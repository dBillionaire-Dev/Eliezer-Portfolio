
// import React, { useState } from 'react';
// import { Mail, MapPin, Phone, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Feel free to contact me for any project or collaboration. 
//             I'm always excited to work on new creative challenges.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-2xl font-bold text-white mb-6">
//                 Let's Start a Conversation
//               </h2>
//               <p className="text-gray-300 leading-relaxed">
//                 Whether you need a complete brand identity, marketing materials, 
//                 or creative consultation, I'm here to bring your vision to life. 
//                 Let's discuss your project and create something amazing together.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
//                   <Mail className="w-6 h-6 text-red-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">Email</h3>
//                   <p className="text-gray-300">eliezerek@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
//                   <Phone className="w-6 h-6 text-red-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">Phone</h3>
//                   <p className="text-gray-300">+234-903-914-3840</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
//                   <MapPin className="w-6 h-6 text-red-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">Location</h3>
//                   <p className="text-gray-300">Abuja, Nigeria</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-800 p-8 rounded-xl">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-400 text-white"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-400 text-white"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-400 text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-red-400 text-white resize-none"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 Send Message
//                 <Send className="w-5 h-5" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
