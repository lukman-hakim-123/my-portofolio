import { projects } from "../data/projects";

export default function ProjectSection() {
  return (
    <section className="py-24 bg-[#111827]" id="projects">
      <h2 className="text-5xl font-bold text-center mb-6">Featured Projects</h2>

      <p className="text-center text-xl text-zinc-400 mb-16">
        Some of my recent work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#0f1620] border border-[#2a3444] rounded-2xl overflow-hidden shadow-lg 
             hover:border-blue-400 hover:-translate-y-3 transition-all duration-300 group
             h-full flex flex-col"
          >
            {/* Image */}
            <div className="aspect-[16/9] overflow-hidden bg-[#0f1620]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02] antialiased"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>

              <p className="text-zinc-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-md bg-[#1a2332] border border-[#2a3444] text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                className="block text-center w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 
                 transition text-white font-semibold mt-auto"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
