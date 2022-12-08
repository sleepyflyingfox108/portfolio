import './ProjectCard.css'

export default function ProjectCard(props) {

    return(
        <div id="projectcard">
            <img src={props.project.image} onClick={() => props.onClick(props.index)}></img>
            <h3>{props.project.name}</h3>
            <p>{props.project.keywords}</p>
        </div>
    )
}