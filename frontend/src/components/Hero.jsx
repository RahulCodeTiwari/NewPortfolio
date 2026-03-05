// frontend/src/components/Hero.jsx
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Delivered", value: "4+" },
  { label: "Happy Clients", value: "3+" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-container pt-12 md:pt-20 flex items-center"
    >
      <div className="grid gap-16 md:grid-cols-2 md:items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="section-eyebrow flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance & full-time work
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            I Build{" "}
            <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent">
              Scalable Web Apps
            </span>{" "}
            Using Modern MERN Stack
          </h1>

          <p className="max-w-xl text-lg  leading-relaxed">
            Software Developer specializing in{" "}
            <span className="font-semibold ">
              React, Node.js, Express & MongoDB
            </span>
            . I help businesses launch fast, responsive and scalable digital
            products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="tel:+917706987149" className="btn-primary">
              📞 Book a Call
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full border border-base bg-card text-sm font-semibold hover:scale-105 transition"
            >
              ⚡ View My Work
            </button>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-card border border-base shadow-sm">
              🚀 Full Stack Development
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-base shadow-sm">
              🧩 MERN Stack
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-base shadow-sm">
              🎨 UI/UX Focused
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-card border border-base rounded-3xl p-8 shadow-2xl">

            {/* Profile */}
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-2xl bg-gradient from-violet-600 to-cyan-500 flex items-center justify-center text-3xl font-bold shadow-lg">
                RT
              </div>

              <div>
                <p className="text-sm">Portfolio of</p>
                <h3 className="text-xl font-bold">Rahul Tiwari</h3>
                <p className="text-sm">
                  Software Developer · MERN Developer
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-violet-600">
                    {s.value}
                  </p>
                  <p className="text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-8 rounded-2xl bg-base/60 border border-base p-4 text-sm">
              Passionate about building performance-focused, scalable
              applications that help brands grow digitally.
            </div>
          </div>

          {/* Glow Background */}
          <div className="absolute -top-16 -right-10 h-48 w-48 bg-violet-600/20 blur-[120px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}