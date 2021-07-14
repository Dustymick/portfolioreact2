import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

function Contact() {

    return (
      <section id="contact">
          <div clasName="container px-5 py-10 mx-auto">
            <div className="text-center mb-20"> 
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Contact Information
                </h1>    
            </div>
                <div className="p-6 flex justify-around rounded items-center">
                    <div>
                        <a href="tel:206-240-1927">
                                    <img src="./phone.jpg"></img>
                                </a>
                                    <p>206-240-1927</p>
                    </div>
                    <div>
                        <a href="mailto:damicklo5@gmail.com">
                            <img src="./email-image.png"></img>
                        </a>
                            <p>damicklo5@gmail.com</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/dustinmicklos/">
                            <img src="./linkedin.png"></img>
                        </a>
                            <p>Linkedin</p>
                    </div>
                    <div>
                        <a href="https://github.com/Dustymick">
                            <img src="./github.png"></img>
                        </a>
                            <p>GitHub</p>
                    </div>
                </div>
          </div>
      </section>
    )
  }
  
  export default Contact