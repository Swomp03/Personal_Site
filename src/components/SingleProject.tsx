import "./componentStyles/SingleProject.css"

const SingleProject = (props: any) => {

    const skills = props.skills;
    

    return(
        <div className="project-div">
            <h1>{props.title}</h1>
            <h2>{props.explanation}</h2>

            <ul>
                {skills.map((skill: string) => <li>{skill}</li>)}
            </ul>
        </div>
    );
}

export default SingleProject;