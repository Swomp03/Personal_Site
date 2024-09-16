import "./componentStyles/SingleProject.css"
import webIcon from "../images/internetIcon.png"
import gitHubAlt from "../images/GithubIconReverse.png"

const SingleProject = (props: any) => {

    const skills = props.skills;
    

    return(
        <div className="project-div">
            <div className="project-header">
                <img src="" alt="" />
                <h1 className="project-title">{props.title}</h1>
                <img src="" alt="" />
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