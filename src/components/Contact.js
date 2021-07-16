import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

function Contact() {

    return (
      <section id="contact">
        <div clasName="container px-5 py-1 mx-auto">
            <div className="text-center mb-20"> 
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Contact Information
                </h1>    
            </div>
                <div className="p-4 flex justify-around">
                    <div>
                        <a href="tel:206-240-1927">
                            <img className="rounded" src="./phone2.png"></img>
                        </a>
                            <p className="text-center">206-240-1927</p>
                    </div>
                    <div>
                        <a href="mailto:damicklo5@gmail.com">
                            <img className="rounded" src="./email2.png"></img>
                        </a>
                            <p className="text-center">damicklo5@gmail.com</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/dustinmicklos/">
                            <img className="rounded" src="./linkedin2.png"></img>
                        </a>
                            <p className="text-center">Linkedin</p>
                    </div>
                    <div>
                        <a href="https://github.com/Dustymick">
                            <img className="rounded" src="./github2.png"></img>
                        </a>
                            <p className="text-center">GitHub</p>
                    </div>
                </div>
        </div>
      </section>
    )
  }
  
  export default Contact