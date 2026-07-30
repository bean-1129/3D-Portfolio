import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Saurabh
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer with a passion for coding, programming, and creating
          powerful software solutions.{" "}
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-10 flex flex-wrap gap-10 justify-center items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="relative group">
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 scale-75 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out origin-bottom pointer-events-none bg-slate-800 rounded-xl shadow-2xl px-4 py-3 min-w-[140px] z-20">
                <p className="text-xs font-semibold text-white text-center whitespace-nowrap mb-2">
                  {skill.name}
                </p>
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${(skill.efficiency || 0) * 10}%`,
                      background: `linear-gradient(90deg, hsl(${(skill.efficiency || 0) * 12}, 80%, 55%) 0%, hsl(${(skill.efficiency || 0) * 12}, 85%, 45%) 100%)`,
                      boxShadow:
                        "0 0 8px hsla(" +
                        (skill.efficiency || 0) * 12 +
                        ", 80%, 50%, 0.5)",
                    }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 block text-center mt-1.5">
                  {skill.efficiency || 0}/10
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Timeline</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Embarking on a journey in Computer Science, my timeline highlights
            key milestones that shaped my skills and passion for technology.
          </p>
        </div>
        <div className="mt-12 flex bg-slate-100">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
