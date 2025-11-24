import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#0f1620]" id="contact">
      <h2 className="text-5xl font-bold text-center mb-8">Let's Connect</h2>
      <p className="text-center text-zinc-400 text-xl">
        I'm always interested in new opportunities and collaborations
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        <a
          href="https://github.com/lukman-hakim-123"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a2332] hover:bg-[#223042] transition border border-[#2a3444]"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>

        <a
          href="#"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a2332] hover:bg-[#223042] transition border border-[#2a3444]"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.lukman.hakim@gmail.com"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a2332] hover:bg-[#223042] transition border border-[#2a3444]"
        >
          <FaEnvelope className="text-xl" />
          Email
        </a>
      </div>
      <div className="flex justify-center mt-12 px-4">
        <a
          href="https://wa.me/6285870939617"
          target="_blank"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
