import React from "react";

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Dustin
                    </h1>
                    <p className="mb-8 leading-relaxed">
                       I'm a recent graduate of Vanderbilt University coding and full-stack development program, where I created responsive web applications utilizing React.js, 
                       JavaScript, Node.js, and several CSS frameworks; as well as back-end fixtures Express.js and MySQL.  As a former member of the cruise and maritime industry,
                       I served as a certfifed OnBase software System Administrator, providing training and support to well over 200 OnBase software users.  With my prior experiences, education, 
                       and certifications, it is true that I'm passionate about software and technology, and can quickly adapt to new technological tools, languages, and softwares.  Not only that, I  
                       possess strong communications skills, enjoy meeting new people and building 
                       genuine relationships with all.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Contact Information
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Projects
                        </a>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="./IMG-0841.JPG" 
                        />
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default About; 