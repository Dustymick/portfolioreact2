import React from "react";
import { BadgeCheckIcon, ChipIcon  } from "@heroicons/react/solid";
import { projects } from "../data"

function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="flex flex-col w-full mb-20">
                <div className="text-center mb-2">
                  <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Projects
                    </h1>
                </div>
                <div className="flex flex-wrap -m-0 p-4">
                    {projects.map((project) => (
                      <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 h-3/4 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3 pt-4">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                      </a>
                    ))}
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium title-font mb-2 text-white">
                    GitHub Links:
                    </h1>
                        <p className="leading relaxed">
                            <a className="hover:text-green-300" href="https://github.com/tpgent01/alien-generator">Alien Life Form Generator</a>
                            <br></br>
                            <a className="hover:text-green-300"  href="https://github.com/Dustymick/Mid-South-Blog-Spot">Mid-South Blog Spot</a>
                            <br></br>
                            <a className="hover:text-green-300" href="https://github.com/alehr45/haul-that">Haul That</a>
                            <br></br>
                            <a className="hover:text-green-300" href="https://github.com/alehr45/weekly-food-planner">Food Planner Pro</a>
                        </p>
                </div>   
            </div>
        </section>
    );
}

export default Projects;