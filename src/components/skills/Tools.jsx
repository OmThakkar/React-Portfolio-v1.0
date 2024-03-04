import React from 'react';
import { SiCanva } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiFilezilla } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";

const Tools = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Tools</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <SiCanva size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Canva
                        </h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiFigma size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Figma
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <FaGitAlt size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Git
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <FaGithub size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            GitHub
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiOpenai size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            OpenAI
                        </h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <TbBrandFramerMotion size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Framer
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                
            <div className="skills__data">
                <FaDiscord size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Discord
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiMicrosoftoffice size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Office
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiBlender size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Blender
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <BiLogoVisualStudio size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            VS Code
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <FaGoogle size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Google
                        </h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiFilezilla size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            FileZilla
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools