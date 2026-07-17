"use client"
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget; // ✅ Save reference immediately

  setResult("Sending...");

  const formData = new FormData(form);

  formData.append(
    "access_key",
    "12af5d70-3b1d-43e3-abfa-f512458104bc"
  );

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (data.success) {
    setResult("Message sent successfully!");
    form.reset(); // ✅ Use saved reference
  } else {
    console.log(data);
    setResult(data.message);
  }
};

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();

//   setResult("Sending...");

//   const formData = new FormData(event.currentTarget);

//   formData.append(
//     "access_key",
//     "12af5d70-3b1d-43e3-abfa-f512458104bc"
//   );

//   const response = await fetch(
//     "https://api.web3forms.com/submit",
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   const data = await response.json();

//   if (data.success) {
//     setResult("Message sent successfully!");
//     (event.currentTarget as HTMLFormElement).reset();
//   } else {
//     console.log(data);
//     setResult(data.message);
//   }
// };

    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData
    // });

    // const data = await response.json();
    // setResult(data.success ? "Success!" : "Error");
    // };

  return (
    <section id="contact" className="py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-wider text-euro-orange-500 uppercase mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Get in Touch with Our Experts
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-euro-blue-900 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:info@eurofinmanpowers.eu" className="text-slate-700 font-medium hover:text-euro-blue-900 transition-colors">info@eurofinmanpowers.eu</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-euro-blue-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+352123456789" className="text-slate-700 font-medium hover:text-euro-blue-900 transition-colors">+352 123 456 789</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-euro-blue-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Office Address</div>
                  <div className="text-slate-700 font-medium leading-relaxed">
                    Boulevard Royal 15<br />
                    2449 Luxembourg City<br />
                    Luxembourg
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-euro-blue-900 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</div>
                  <div className="text-slate-700 font-medium">
                    Monday - Friday: 9:00 AM - 6:00 PM (CET)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-euro-blue-900 focus:border-transparent transition-shadow bg-slate-50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-euro-blue-900 focus:border-transparent transition-shadow bg-slate-50" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-euro-blue-900 focus:border-transparent transition-shadow bg-slate-50" placeholder="+1 234 567 890" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Country of Residence</label>
                  <input type="text" id="country" name="country" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-euro-blue-900 focus:border-transparent transition-shadow bg-slate-50" placeholder="E.g., Germany" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-euro-blue-900 focus:border-transparent transition-shadow bg-slate-50 resize-none" placeholder="Tell us about your career goals or recruitment needs..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-euro-blue-900 hover:bg-euro-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-100 transition-colors flex items-center justify-center gap-2 group mt-2">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p>{result}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
