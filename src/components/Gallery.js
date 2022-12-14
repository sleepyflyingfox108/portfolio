import './Gallery.css'
import ProjectCard from './ProjectCard.js'

export default function Gallery(props) {

    const chooseProject = (index) => {
        props.setPage(index + 2)
    }

    return(
        <div id="gallery">
            <div id="welcome">
                <h1>Welcome! I’m <b>sleepyflyingfox108</b>, a senior at Brown University. I am currently exploring lots of different fields and cultivating many different skills. This portfolio focuses on my visual design journey as a beginner and usual backend programmer.</h1>
            </div>
            <div id="projects">
                {props.projectData.map((item, index) => (
                <div id={"project-"+index} onClick={() => chooseProject(index)}>
                    <ProjectCard project={item}/>
                    <br></br>
                </div>
                ))}
            </div>
        </div>
    )
}