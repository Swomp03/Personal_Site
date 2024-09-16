import "./componentStyles/SingleProject.css"
import webIcon from "../images/internetIcon.png"
import gitHubAlt from "../images/GithubIconReverse.png"

const SingleProject = (props: any) => {

    const skills = props.skills;
    

    return(
        <div className={`project-div ${props.projectBackground}`}>
            <div className="project-header">
                <img className= {`project-icon ${props.leftImgClass}`}  src={props.leftImg} alt={props.leftAlt} />
                <h2 className="project-title"><b>{props.title}</b></h2>
                <img className={`project-icon ${props.rightImgClass}`} src={props.rightImg} alt={props.rightAlt} />
            </div>
            

            <h2 className="explanation">{props.explanation}</h2>

            <ul className="skill-list">
                {skills.map((skill: string) => <li className="individual-skill">{skill}</li>)}
            </ul>
            
            <div className="links">
                <a className="webIcon" href={props.link} target="blank">
                    <img src={webIcon} alt={props.webAlt}/>
                    <p>Website</p>
                </a>

                <a className="gitHubIcon" href={props.gitHubLink} target="blank">
                    <img src={gitHubAlt} alt={props.gitHubAlt}/>
                    <p>GitHub</p>
                </a>
            </div>
        </div>
    );
}

export default SingleProject;