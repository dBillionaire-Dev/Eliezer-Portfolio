// import { useState } from "react";

// function ContactSection() {


//     return (
//         <div className="flex flex-col items-center justify-center p-4">
//             {!showForm && (
//                 <button
//                     onClick={() => setShowForm(true)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
//                 >
//                     Contact Me
//                 </button>
//             )}

//             {showForm && (
//                 <form className="flex flex-col gap-4 w-full max-w-md mt-4 bg-white p-6 rounded-xl shadow-lg">
//                     <label className="flex flex-col">
//                         Name:
//                         <input type="text" className="border p-2 rounded" />
//                     </label>

//                     <label className="flex flex-col">
//                         Email:
//                         <input type="email" className="border p-2 rounded" />
//                     </label>

//                     <label className="flex flex-col">
//                         Message:
//                         <textarea className="border p-2 rounded" rows="4"></textarea>
//                     </label>

//                     <button
//                         type="submit"
//                         className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
//                     >
//                         Send Message
//                     </button>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default ContactSection;
