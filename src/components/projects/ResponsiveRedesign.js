import './ResponsiveRedesign.css'
import Link from '@mui/material/Link'

export default function ResponsiveRedesign(props) {

    return(
        <div id="responsive-redesign">
            <div id="intro">
                <h1>Responsive Redesign</h1>
                <p><em>Redesigning a webpage to be more usable, accessible, and responsive</em></p>
                <div id="intro-links">
                <Link href="#background" underline="hover" color="inherit">
                <span>Background</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#research" underline="hover" color="inherit">
                <span>Research</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#design" underline="hover" color="inherit">
                <span>Design</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#conclusion" underline="hover" color="inherit">
                <span>Conclusion</span>
                </Link>
                </div>
            </div>
            <div id="background">
                <h2>Background</h2>
                <p><b>The aim of this project</b> was to identify an existing website’s usability and accessibility issues, improve upon them, and make the new website responsive to screen size changes.
                <br></br>
                <br></br>
                <b>Usability and accessibility are extremely important subjects of study because</b> most websites are made to be used by a variety of people beyond just the designer. It is the user’s thought process that ultimately determines whether the site will solve the problem the designer set out to solve. Websites that are functional, but poorly designed, may be just as inefficient as websites that are completely non-functional in terms of users being able to complete their intended goal.
                <br></br>
                <br></br>
                <b>A website’s responsivity, or its display on different screen sizes, is also important</b> in a world where different types of devices are increasingly becoming commonplace. A designer must take into account many types of screen sizes and shapes, since a user may end up viewing the website on any of these.
                <br></br>
                <br></br>
                For this mission, I chose the homepage of the website for Eastside Veterinary Clinic, a local animal clinic. It’s a simple website with lots of possible design improvements, so a great starting point through which to study the subjects listed above; I focused on just the homepage to allow for a deep dive into these subjects.  
                </p>
                <div className='website-link'>
                    <a href="https://www.eastsideveterinary.com" target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/oldsite.png"}></img>
                    </a>
                </div>
                <em>Click the image to visit the original site.</em>
            </div>
            <div id="research">
                <h2>Research</h2>
                <p>
                The initial stage of this project was to determine the existing site’s design strengths and weaknesses.
                <br></br>
                Since a site like this is designed to be used by a wide variety of people who may or may not have much technical experience, I kept my analyses as general as possible, viewing it through the lens of a general first-time user.
                <br></br>
                <br></br>
                A summary of my findings for both usability and accessibility are below:
                </p>
                <div id="row">
                    <div id="usability">
                    <h3>Usability</h3>
                        <b>Learnability</b> - <em>Is it easy to learn to use (new users)?</em> 
                        <br></br>
                        This website is simple to learn how to use - you scroll down like a single sheet of paper. In general, the website is plain, without much marking of hierarchy - there aren’t much sectioned off areas, headers, etc. This doesn’t make it immediately clear where to go for what info. This leads to <b>low-medium learnability.</b>
                        <br></br>
                        <br></br>
                        <b>Memorability</b> - <em>Is it easy to recall what to do (casual users)?</em> 
                        <br></br>
                        In some areas there are links scattered throughout, and images or elements floating without a clear position or hierarchy. It isn’t quite intuitive or matching of what someone would expect, which would essentially make a casual user have to remember the quirks of this site each time. This leads to <b>low memorability.</b>
                        <br></br>
                        <br></br>
                        <b>Efficiency</b> - <em>Can typical tasks be done quickly (frequent users)?</em> 
                        <br></br>
                        Generally, the website is simple and if someone knows where to go, it would be very quick to navigate to that section. So it is <b>highly efficient</b> in this sense.
                        <br></br>
                        <br></br>
                    </div>
                    <div id="accessibility">
                        <h3>Accessibility</h3>
                        <b>Underlined non-links</b> - WebAIM noted that in some areas, the text is underlined even though it is not a link. Almost universally, underlined text represents links online so this should be avoided to curb misunderstanding.
                        <br></br>
                        <br></br>
                        <b>Poor visibility</b> - There are areas where text is light green or red against a white backgrouund. WebAIM noted that this leads to poor visibility because contrast is low.
                        <br></br>
                        <br></br>
                        <b>No page regions</b> - WebAIM noted that there is a lack of general page regions. There is not much use of headers, and no “header one” for ARIA purposes.
                        <br></br>
                        <br></br>
                        I do agree with these findings and find they overlap a lot with the general usability problems I noted with usability, the biggest problem being a lack of clear info hierarchy / separation.
                    </div>
                </div>
            </div>
            <div id="design">
                <h2>Design</h2>
                <p>
                The next step was to think up some more usable and accessible designs. Since the goal of this project was also to create a responsive website, three designs are included, showing how the site is intended to look for a large desktop, a tablet, and a phone.
                </p>
                <p>
                <b>Lo-Fi Prototypes</b>
                <br></br>
                With lo-fi prototypes, I focused on creating a general layout of the new website and a clear hierarchy using elements like columns and headers.
                <br></br>
                Annotations focus on how these choices create a more usable, accessible website.
                <br></br>
                <br></br>
                </p>
                <div className='photo-row'>
                    <Link href="https://raw.githubusercontent.com/sleepyflyingfox108/responsive-redesign-submission/main/assets/Desktop.png" target="_blank">
                    <img src={process.env.PUBLIC_URL + "/images/lo-fi-desktop-thumbnail.png"}></img>
                    </Link>
                    <Link href="https://raw.githubusercontent.com/sleepyflyingfox108/responsive-redesign-submission/main/assets/Tablet.png" target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/lo-fi-tablet-thumbnail.png"}></img>
                    </Link>
                    <Link href="https://raw.githubusercontent.com/sleepyflyingfox108/responsive-redesign-submission/main/assets/Phone.png" target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/lo-fi-phone-thumbnail.png"}></img>
                    </Link>
                </div>
                <em>Click to open the annotated prototype in another tab.</em>
                <p>
                <b>Hi-Fi Prototypes</b>
                <br></br>
                With hi-fi prototypes, I largely focused on consolidating creative choices such as font size, font family, and color to further aid in info hierarchy, memorability, and the final aesthetic of the website.
                <br></br>
                Annotations focus on how the elements will be implemented in code. 
                </p>

                <div className='photo-row'>
                    <Link href="https://raw.githubusercontent.com/sleepyflyingfox108/responsive-redesign-submission/main/assets/hi-fi-desktop.png" target="_blank">
                    <img src={process.env.PUBLIC_URL + "/images/hi-fi-desktop-thumbnail.png"}></img>
                    </Link>
                    <Link href="https://raw.githubusercontent.com/sleepyflyingfox108/responsive-redesign-submission/main/assets/hi-fi-tablet.png" target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/hi-fi-tablet-thumbnail.png"}></img>
                    </Link>
                    <Link href="https://raw.githubusercontent.com/sleepyflyingfox108/responsive-redesign-submission/main/assets/hi-fi-phone.png" target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/hi-fi-phone-thumbnail.png"}></img>
                    </Link>
                </div>
                <em>Click to open the annotated prototype in another tab.</em>


                <p>
                <b>Website</b>
                <br></br>
                And finally, here is the deployed and functional website, which aims to exactly mirror the hi-fi prototypes.
                </p>
                <div className='website-link'>
                    <a href="https://sleepyflyingfox108.github.io/responsive-redesign/" target="_blank">
                        <img src={process.env.PUBLIC_URL + "/images/website-thumbnail.png"}></img>
                    </a>
                </div>
                <em>Click to see the completed website.</em>
            </div>
            <div id="conclusion">
                <h2>Conclusion</h2>
                <p>
                This project gave me a deep insight into the mind of a user as well as the things that make a website effective in achieving its goal. 
                As someone who usually works on teams that operate on the backend of websites, I am usually 90% concerned with functionality and 10% concerned with design. But during this website, I learned just how important design is and how it’s equally important to functionality.

                </p>
            </div>
            
        </div>
    )
}