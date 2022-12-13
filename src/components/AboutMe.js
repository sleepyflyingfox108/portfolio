import './AboutMe.css'

export default function AboutMe(props) {

    // const chooseProject = (index) => {
    //     props.setPage(index + 2)
    // }

    return(
        <div id="about-me">
            <img src={process.env.PUBLIC_URL + "/images/flyingfox.jpeg"} id='flyingfox'></img>
            <p>
            <b>Hi! I’m sleepyflyingfox108.</b>
            <br></br>
            <br></br>
            I am currently a senior at Brown University, graduating in May 2023, and an incoming site reliability engineer at Atlassian.
            <br></br>
            <br></br>
            In the realm of computer science, I have studied artificial intelligence and deep learning in the past. I have been involved in computer vision research at Brown, and in my future job I hope to get more experience with scripting and Linux systems.
            <br></br>
            <br></br>
            Outside of computer science, I am studying English and French. I love to read and write in my free time. I am also involved with the Ivy Film Festival as a web developer, and with CSEBRI, a non-profit organization that aims to raise cultural awareness around AAPI heritage and the AAPI experience in America.
            <br></br>
            <br></br>
            I am very curious about lots of different things and am always seeking to develop new skills; this year I have focused on my frontend development and design skills.
            <br></br>
             While I love computer science and all the incredible things it can do, I have always felt that a human element was missing from my past education and experiences. So this year I have tried to focus on bringing together the two sides of my experiences.

            </p>
        </div>
    )
}