import './AnimatedLSystems.css'
import Link from '@mui/material/Link'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AnimatedLSystems(props) {

    return(
        <div id="animated-lsystems">
            <div id="intro">
                <h1>Animated L-Systems</h1>
                <p><em>Exploring computer graphics, recursive systems, and user input</em></p>
                <div id="intro-links">
                <Link href="#background" underline="hover" color="inherit">
                <span>Background</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#concepts" underline="hover" color="inherit">
                <span>Concepts</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#architecture" underline="hover" color="inherit">
                <span>Architecture</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#final-demo" underline="hover" color="inherit">
                <span>Final Demo</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#conclusion" underline="hover" color="inherit">
                <span>Conclusion</span>
                </Link>
                </div>
            </div> 
            <div className='section'>
                <div id="background">
                    <h2>Background</h2>
                    <p>
                    <b>The aim of this project</b> was to create an program that allowed users to see different L-Systems in interactive scenes.
                    <br></br>
                    <br></br>
                    Generally, this project was meant to explore different graphics concepts and combine them into one program. This project combined user input, mathematical recursion, and 3D graphics rendering to display a scene that the user could change depending on certain parameters they put in.
                    <br></br>
                    <br></br>
                    For this project, our team used Qt and OpenGL to create five different plant-like L-systems in five animated scenes. A user could change different aspects of this scene (angle, radius, animation speed, etc.) and see it change in real time on the screen. My task was to focus on <b>visual rendering</b>, which consisted of rendering the scenes, animation, and different shading options.
                    </p>
                </div>
                <div id="concepts">
                    <h2>Research</h2>
                    <p>
                    The initial stage of this project was to split and do research for the respective portions of the project. We split them roughly up into 3 pieces - <b>L-systems, UI, and visual rendering</b>. 
                    </p>
                    <h3>L-Systems</h3>
                    <p>
                    L-system describes a recursive, string-rewriting system. They are similar to fractals, but instead are often used to map the natural branching structures of many plants or other organic shapes.
                    <br></br>
                    L-systems start with a set of rules that, when applied recursively, produce a string of characters. When each character is mapped to an instruction, a turtle can produce a plant-like structure.
                    </p>
                    <Accordion id="lsystem-accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        L-System Example: Binary Tree
                        </AccordionSummary>
                        <AccordionDetails id="accordiondetails">
                            <p>
                                These are the rules of the L-system:
                                <ul>
                                    <li>
                                    <b>variables</b>: 0, 1
                                    </li>
                                    <li>
                                    <b>constants</b>: “[”, “]”
                                    </li>
                                    <li>
                                    <b>axiom</b>: 0
                                    </li>
                                    <li>
                                    <b>rules</b>: (1 → 11), (0 → 1[0]0)
                                    </li>
                                </ul>
                                Those rules are then used to produce a string, depending on the recursive depth we decide:
                                <br></br>
                                <br></br>
                                axiom: 0
                                <br></br>
                                1st recursion: 1[0]0
                                <br></br>
                                2nd recursion: 11[1[0]0]1[0]0
                                <br></br>
                                3rd recursion: 1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0
                                <br></br>
                                etc...
                                <br></br>
                                <br></br>
                                Then each character is assigned to a certain action that a turtle will perform:
                                <ul>
                                    <li>
                                    0: draw a line segment ending in a leaf
                                    </li>
                                    <li>
                                    1: draw a line segment
                                    </li>
                                    <li>
                                    [: push position and angle, turn left 45 degrees
                                    </li>
                                    <li>
                                    ]: pop position and angle, turn right 45 degrees
                                    </li>
                                </ul>
                                Finally, the turtle ends up drawing the L-system visually:
                            </p>
                            <div id='binary-tree-img-row'>
                            <img src={process.env.PUBLIC_URL + "/images/lsystem/axiom.png"}></img>
                            <img src={process.env.PUBLIC_URL + "/images/lsystem/first-rec.png"}></img>
                            <img src={process.env.PUBLIC_URL + "/images/lsystem/second-rec.png"}></img>
                            <img src={process.env.PUBLIC_URL + "/images/lsystem/third-rec.png"}></img>
                            </div>
                            <p className='side-note'><em>The axiom, first, second, and third recursion as drawn by the turtle.</em>
                            <br></br>
                            Source for this example: https://en.wikipedia.org/wiki/L-system</p>
                        </AccordionDetails>
                    </Accordion>
                    <p>We produced five different L-systems which created five different looking plants for this project.</p>

                    <h3>UI</h3>
                    <p>
                    For this project, the UI was closely tied with the concept of L-systems but also to the visual rendering of the scene. The UI consisted of the user being able to change the angle of the L-system, the radius of the branches and how much the radius declined when a new branch was formed, whether to turn on toon shading or not (explained below), and the speed at which the animation played.
                    </p>

                    <h3>Visual Rendering</h3>
                    <p>
                    The visual rendering, which was my main focus for this project, focused on how to actually draw the L-system to the screen once the rules were produced from the user input and L-system logic.
                    <br></br>
                    It also consisted of making two lighting options for the program - the default was <b>Phong shading</b> (more accurate to real-life shading) and a user could select <b>toon shading</b> (cartoonish with saturated colors, sharp lines, black outlines).
                    </p>
                </div>

                <div id="architecture">
                    <h2>Architecture</h2>
                    <p>You can see the (simplified) architecture of this program below.</p>
                    <img src={process.env.PUBLIC_URL + "/images/lsystem/lsystemarchitecture.png"}></img>
                    <p className='side-note'>
                        <em>
                        Note: Most of my visual coding work was done in OpenGL shaders, which consisted of changing .vert and .frag files that are not instantiated or included in the architecture, but change the way the underlying code editor (Qt) interprets and renders each pixel of the display.
                        </em>
                    </p>
                    <p>
                        <b>Main Window:</b> Contains logic for actually displaying pixel data to screen.
                        <br></br>
                        <b>Support Canvas 3D:</b> Contains logic for coloring each pixel according to SceneData.
                        <br></br>
                        <b>LSystemScene:</b> Contains logic for actually drawing LSystems at each frame according to generated ruleset, and visual / animation parameters.
                        <br></br>
                        <b>LSystem:</b> Contains logic for creating an LSystem based on user parameters.
                        <br></br>
                        <b>LSystemTimer:</b> Contains logic for timekeeping to animate scenes.
                        <br></br>
                        <b>Turtle:</b> Contains logic for drawing shapes according to ruleset.
                        <br></br>
                        <b>Cylinder:</b> Contains logic for creating a cylindrical shape.
                        <br></br>
                        <b>Sphere:</b> Contains logic for creating a spherical shape.
                        <br></br>
                        <b>ShapeMesh:</b> Contains logic for storing vertex data about a shape.

                        <h3>Design Choices</h3>
                        <p>The main <b>tradeoff</b> of this architecture was that the user was limited to seeing five pre-chosen L-systems instead of being able to create their own through text input, as we planned early on. Ultimately, we determined that for wider and more universal use, users would not generally have knowledge of working L-systems (and random string input can often lead to non-sensical, aesthetically odd L-systems). </p>
                    </p>
                </div>

                <div id='final-demo'>
                    <h2>Final Demo</h2>
                    <p>Here is a final video demo of the program!</p>
                    <iframe src="https://drive.google.com/file/d/1_1BjNIcCrL-jcP2k9_T_1Ct8zYbMju4m/preview" width="800" height="450" allow="autoplay"></iframe>
                    <p>
                    We ended up making five L-systems: a potted plant, a forest plant, a mountain bush, a desert cactus, and a winter tree. 
                    <br></br>
                    <br></br>
                    Users could change the number of recursions for the L-system, the angle at which the turtle turned, the length it traveled, or the radius of the branches. They could also change the animation’s speed and amount of precipitation.
                    <br></br>
                    <br></br>
                    For each L-system, they also had the option of turning toon shading on or off.
                    </p>
                </div>

                <div id='conclusion'>
                    <h2>Conclusion</h2>
                    <p>This project was an deep dive into the backend of visual programming; as such, it combined two concepts that are often divided in traditional software engineering.
                    <br></br>
                    The team experience on this project was immensely useful; all three of the concepts studied were concepts we had no experience in before. But by breaking it down into manageable components and being in charge of our own pieces, we were able to put them together without having to spend time all learning the different concepts indvidually.
                    <br></br>
                    This project also dealt with a lot of mathematical concepts, not just in the L-system concept but also in the way the visual aspect was parsed and rendered by the screen.
                    <br></br>
                    Ultimately, this project allowed me to develop my mathematical coding skills and on working on top of a large already existing codebase, both of which are extremely helpful skills going into backend and frontend development.
                    </p>
                </div>

            </div>
        </div>
        
    )
}