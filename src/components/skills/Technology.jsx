import React from 'react'
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandVite } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";

const Technology = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Technologies</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <BiLogoHtml5 size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            HTML 5
                        </h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <BiLogoCss3 size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            CSS 3
                        </h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <BiLogoJavascript size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            JavaSCript
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <IoLogoReact size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            ReactJS
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <IoLogoNodejs size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            NodeJS
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <TbBrandVite size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Vite
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                
            <div className="skills__data">
                <BiLogoCPlusPlus size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            C++
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <IoLogoPython size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Python
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <TbSql size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            SQL
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <BiLogoMongodb size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            MongoDB
                        </h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                <BiLogoBootstrap size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Bootstrap
                        </h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                <BiLogoTailwindCss size="1.8rem" color='#333333'/>
                    <div>
                        <h3 className="skills__name">
                            Tailwind
                        </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology