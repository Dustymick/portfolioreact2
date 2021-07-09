import React from "react";

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Dustin
                        <br className="hidden lg:inline-block" />I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                       I'm a recent graduate of Vanderbilt University coding and full-stack development program, where I created responsive web applications utilizing React.js, 
                       JavaScript, Node.js, and several CSS frameworks; as well as back-end fixtures Express.js and MySQL.  As a former member of the cruise and maritime industry,
                       I served as a certfifed OnBase System Administrator, providing training and support to well over 200 OnBase users.  As a result, I excel at communicating with others 
                       and relationship building.  
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About; 