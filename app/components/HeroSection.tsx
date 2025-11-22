export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] pt-16">
      {/* Lingkaran cahaya di pojok kiri atas */}
      <div className="absolute top-8 left-4 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_50%)] blur-2xl"></div>

      {/* Lingkaran cahaya di pojok kanan bawah */}
      <div className="absolute bottom-24 right-12 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_40%)] blur-2xl"></div>

      {/* Kotak Melayang */}
      <div className="absolute top-[39%] left-[72.5%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgba(56,189,248,0.20)] animate-float-glow"></div>

      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 bg-blue-500/10 border border-blue-400 rounded-xl mb-6 mt-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
        <span className="text-blue-400 text-3xl font-bold select-none -translate-y-[4px]">
          &lt;/&gt;
        </span>
      </div>

      <h1 className="text-7xl font-bold text-white">
        Hi, I’m <span className=" text-blue-400">Lukman Hakim</span>
      </h1>
      <p className="text-zinc-400 mt-6 text-2xl text-center ">
        An IT graduate and aspiring web developer passionate about
        <span className="hidden sm:inline">
          <br />
        </span>
        building clean, functional, and modern web applications.
      </p>

      {/* Tombol-tombol */}
      <div className="flex gap-4 mt-10">
        {/* Tombol View My Work */}
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
        >
          View My Work
        </a>

        {/* Tombol Download CV */}
        <a
          href="/cv.pdf"
          download
          className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-500/10 shadow-[0_0_15px_rgba(56,189,248,0.3)] font-medium transition-all duration-300 select-none"
        >
          Download CV
        </a>
      </div>

      <div className="flex items-center justify-center gap-6 mt-10 text-zinc-400 text-sm">
        {/* Icon 1 + Teks */}
        <div className="flex items-center gap-1.5">
          <span className="text-blue-400/70 text-xl font-bold select-none">
            &lt;/&gt;
          </span>
          <span className="text-zinc-400 font-medium text-base">Code</span>
        </div>

        {/* Icon 2 + Teks */}
        <div className="flex items-center gap-1.5">
          <span className="text-violet-400/70 text-xl">🎨</span>
          <span className="text-zinc-400 font-medium text-base">Design</span>
        </div>

        {/* Icon 3 + Teks */}
        <div className="flex items-center gap-1.5">
          <span className="text-sky-400/70 text-xl">🚀</span>
          <span className="text-zinc-400 font-medium text-base">Deploy</span>
        </div>
      </div>
    </section>
  );
}
