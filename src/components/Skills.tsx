"use client";
import AnimateSection from "./AnimateSection";
import skills from "../data/skills.json";
import { motion } from "framer-motion";

const MDiv: any = motion.div;

// ICON MAPPING → match your folder: /public/images/icons/*.svg
const skillLogos: any = {
  JavaScript: "/images/icons/javascript.svg",
  PHP: "/images/icons/php.svg",
  HTML: "/images/icons/html.svg",
  CSS: "/images/icons/css.svg",
  Java: "/images/icons/java.svg",

  React: "/images/icons/react.svg",
  "Next.js": "/images/icons/nextjs.svg",
  Laravel: "/images/icons/laravel.svg",
  Bootstrap: "/images/icons/bootstrap.svg",

  MySQL: "/images/icons/mysql.svg",
  PostgreSQL: "/images/icons/postgresql.svg",
  MongoDB: "/images/icons/mongodb.svg",

  Figma: "/images/icons/figma.svg",
  Git: "/images/icons/git.svg",
  GitHub: "/images/icons/github.svg",
};

export default function Skills() {
  return (
    <AnimateSection>
      <section id="skills" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-textc-primary mb-10">
          Skills
        </h2>

        <div className="space-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="grid grid-cols-[200px_1fr] gap-8 items-center"
            >
              {/* LEFT CATEGORY BOX */}
              <div className="bg-brand-background-grey/40 border border-brand-background-grey/20
                rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center text-center min-h-[120px]">

                <h3 className="text-brand-green font-semibold text-lg leading-tight text-center">
                  {category}
                </h3>
              </div>

              {/* RIGHT ICON GRID */}
              <div className="bg-brand-background-grey/20 border border-brand-background-grey/30 
                rounded-2xl p-5 flex flex-wrap gap-4 shadow-sm">

                {items.map((skill: string) => (
                  <div
                    key={skill}
                    className="w-16 h-16 rounded-xl bg-brand-background-darkest/40 border border-brand-background-grey/30 
                    flex items-center justify-center hover:border-brand-green transition"
                  >
                    <img
                      src={skillLogos[skill] || "/images/icons/default.svg"}
                      alt={skill}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
