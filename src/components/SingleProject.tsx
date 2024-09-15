import "./componentStyles/SingleProject.css"

const SingleProject = (props: any) => {

    const skills = props.skills;
    

    return(
        <div className="project-div">
            <div className="project-header">
                <img src="" alt="" />
                <h1 className="project-title">{props.title}</h1>
                <img src="" alt="" />
            </div>
            

            <h2>{props.explanation}</h2>

            <ul className="skill-list">
                {skills.map((skill: string) => <li className="individual-skill">{skill}</li>)}
            </ul>
            
            <div className="links">
                <a href={props.link} target="blank">
                    {/* <img src={props.webIcon} alt={props.webAlt}/> */}
                    <p>Website</p>
                </a>

                <a href={props.gitHubLink} target="blank">
                    {/* <img src={props.gitHubIcon} alt={props.gitHubAlt}/> */}
                    <p>GitHub</p>
                </a>
            </div>
        </div>
    );
}

export default SingleProject;