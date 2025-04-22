import {motion} from "framer-motion";

import "./componentStyles/SingleProject.css"
import webIcon from "../images/internetIcon.png"
import gitHubAlt from "../images/GithubIconReverse.png"

import {useRef} from "react";

const SingleProject = (props: any) => {

    const skills = props.skills;
    
    const project_container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05
          }
        }
    };

    const project_item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05
          }
        }
    }

    const project_scrollRef = useRef(null);

    return(
        <>
            <motion.ul
                ref={project_scrollRef}
                variants={project_container}
                initial="hidden"
                whileInView="visible"
            >
                <div className={`project-div ${props.projectBackground}`}>
                    <div className="project-header">
                        <motion.div
                            className="project_item"
                            variants={project_item}
                        >
                            <img className= {`project-icon ${props.leftImgClass}`}  src={props.leftImg} alt={props.leftAlt} />
                        </motion.div>

                        <motion.div
                            className="project_item"
                            variants={project_item}
                        >
                            <h2 className="project-title"><b>{props.title}</b></h2>
                        </motion.div>

                        <motion.div
                            className="project_item"
                            variants={project_item}
                        >
                            <img className={`project-icon ${props.rightImgClass}`} src={props.rightImg} alt={props.rightAlt} />
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="project_item"
                        variants={project_item}
                    >
                        <h2 className="explanation">{props.explanation}</h2>
                    </motion.div>


                    <ul className="skill-list">
                        {skills.map((skill: string) => <motion.div className="project_item" variants={project_item}><li className="individual-skill">{skill}</li></motion.div>)}
                    </ul>
                    
                    
                    <div className="links">
                        {props.siteExists != "False" &&
                            <a className="webIcon" href={props.link} target="_blank">
                                <motion.div
                                    className="project_item"
                                    variants={project_item}
                                >
                                    <img src={webIcon} alt={props.webAlt}/>
                                    <p>Website</p>
                                </motion.div>
                            </a>
                        }

                        {props.gitHubExists != "False" &&
                            <a className="gitHubIcon" href={props.gitHubLink} target="_blank">
                                <motion.div
                                    className="project_item"
                                    variants={project_item}
                                >
                                    <img src={gitHubAlt} alt={props.gitHubAlt}/>
                                    <p>GitHub</p>
                                </motion.div>
                            </a>
                        }
                    </div>
                </div>
            </motion.ul>
        </>
    );
}

export default SingleProject;