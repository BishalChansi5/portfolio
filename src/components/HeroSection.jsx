const HeroSection = ({ onClick }) => {
  return (
    <>
      <div className="pt-24 text-white flex flex-col md:flex-row items-center justify-around gap-10">
        <div className="relative flex flex-col items-center text-center gap-4">
          <div className="absolute -top-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-purple-500/40 animate-spin-slow"></div>
            <div className="absolute w-60 h-60 rounded-full bg-purple-600 opacity-20 blur-3xl animate-pulse"></div>

            <div className="absolute inset-2 rounded-full bg-purple-600/20 blur-xl"></div>

            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="relative h-48 w-48 z-10 object-cover rounded-full border-4 border-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            />
          </div>

          <h2 className="text-3xl font-bold tracking-wide mt-2">
            Bishal <span className="text-purple-400">Chansi</span>
          </h2>

          <div className="flex gap-3 flex-wrap justify-center mt-1">
            <span className="px-4 py-1 rounded-full bg-purple-700/40 border border-purple-500 text-sm">
              JavaScript Developer
            </span>
            <span className="px-4 py-1 rounded-full bg-purple-700/40 border border-purple-500 text-sm">
              React & Angular
            </span>
            <span className="px-4 py-1 rounded-full bg-purple-700/40 border border-purple-500 text-sm">
              Express & MySQL
            </span>
          </div>

          <p className="mt-2 max-w-md text-sm">
            Passionate about building clean, modern and meaningful interfaces. I
            turn ideas into beautiful digital experiences — with React, Angular,
            Tailwind and a love for pixel-perfect UI.
          </p>

          <div className="flex gap-4 mt-4">
            <button className=" cursor-pointer px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-800 transition">
              <a
                href={"https://np.linkedin.com/in/bishal-chansi-777a30309"}
                target="_blank"
              >
                Hire Me
              </a>
            </button>

            <button
              onClick={onClick}
              className=" cursor-pointer px-6 py-2 rounded-lg bg-purple-900 hover:bg-purple-700 border border-purple-700 transition"
            >
              <a to="/projects">View Project</a>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mb-24">
          <p className="text-2xl">
            Hello! I Am{" "}
            <span className="text-purple-500 font-semibold">Bishal Chansi</span>
          </p>
          <p className="">Lifetime Learner.....</p>

          <div>
            <img
              src="./images/Me.png"
              alt=""
              id="image"
              className="hidden md:block h-40 w-40"
            />
          </div>

          <div className="caption mt-6 pl-4 flex flex-col items-center">
            <div className="text-lg">A Developer who</div>

            <h1 className="text-4xl font-bold leading-tight">
              Judges a book <br />
              by its &nbsp;
              <span className="text-purple-500">cover</span>...
            </h1>

            <p className="mt-2 opacity-90">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </div>

      {/* Sub Section */}
      <div className="text-center mt-14">
        <p className="text-3xl font-bold mb-2">I'm a Front-End Developer</p>
        <p className="opacity-90">
          Currently, I'm a Frontend Developer at The Big Solutions
        </p>
        <p>
          “Actively building my backend foundations using Express.js, MySQL, and
          MongoDB to become a full-stack developer.”
        </p>
      </div>

      {/* BOTTOM CALL TO ACTION */}
    </>
  );
};

export default HeroSection;
