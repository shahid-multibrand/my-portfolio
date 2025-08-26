"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto py-24 px-6 mb-16
                 bg-gradient-to-br from-dark via-secondary to-gray-900 
                 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.5)] 
                 hover:shadow-[0_0_60px_rgba(245,158,11,0.8)] transition-shadow duration-500 text-center"
    >
      <h3 className="text-4xl font-bold text-primary mb-12 animate-text-glow">
        Contact Me
      </h3>

      <p className="text-gray-200 mb-4 text-lg">
        E-mail: <span className="text-accent font-semibold animate-text-glow">shahid.iu.cse@gmail.com</span>
      </p>
      <p className="text-gray-200 mb-8 text-lg">
        Mobile: <span className="text-accent font-semibold animate-text-glow">+8801722821005</span>
      </p>

      <a
        href="mailto:shahid.iu.cse@gmail.com"
        className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent rounded-full 
                   text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.5)] 
                   hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] 
                   hover:scale-105 transition-all duration-300"
      >
        Send Message
      </a>

      
    </section>
  );
}
