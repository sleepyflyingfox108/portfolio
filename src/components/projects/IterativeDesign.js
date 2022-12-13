import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './IterativeDesign.css'
import Link from '@mui/material/Link'

export default function IterativeDesign(props) {
    const [sketch, setSketch] = React.useState(1);

    const handleSketchChange = (event, newValue) => {
        console.log(newValue)
        setSketch(newValue);
    }

    const renderSketch = () => {
        switch(sketch) {
            case 1: return (<div className='sketch' id="sketch-1">
                                <p>
                                Our first design focused on having separate interfaces for sellers and buyers, with each being taken to different pages listing potential customers or relevant stores.
                                </p>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/1.3.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/1.1.png"}></img>
                                </div>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/1.2.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/1.4.png"}></img>
                                </div>
                            </div>);
            case 2: return (<div className='sketch' id="sketch-2">
                                <p>
                                Our second design focused on a potential buyer focused interface, with a home page acting as a general marketplace and histories of past orders.
                                </p>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/2.1.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/2.2.png"}></img>
                                </div>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/2.3.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/2.4.png"}></img>
                                </div>
                            </div>);
            case 3: return (<div className='sketch' id="sketch-3">
                                <p>
                                Our third design focused on a marketplace like website (similar to Etsy), with all accounts being generic and not specifically buyer or vendor accounts.
                                </p>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/3.2.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/3.1.png"}></img>
                                </div>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/3.3.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/3.4.png"}></img>
                                </div>
                            </div>);
            case 4: return (<div className='sketch' id="sketch-3">
                                <p>
                                Our fourth design focused on a marketplace like website for buyers but the vendor UI would be factored out into a separate site.
                                </p>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/4.2.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/4.1.png"}></img>
                                </div>
                                <div className='row'>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/4.3.png"}></img>
                                    <img src={process.env.PUBLIC_URL + "/images/id-sketches/4.4.png"}></img>
                                </div>
                            </div>);
            default: return null;
          }
    }

    return(
        <div id="iterative-design">
            <div id="intro">
                <h1>Iterative Design</h1>
                <p><em>Collecting, interpreting, and implenting user feedback</em></p>
                <div id="intro-links">
                <Link href="#background" underline="hover" color="inherit">
                <span>Background</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#initial-design" underline="hover" color="inherit">
                <span>Initial Design</span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#hifi-prototype" underline="hover" color="inherit">
                <span>Hi-Fi Prototype &amp; Peer Critique </span>
                </Link>
                <span> &#x2022; </span> 
                <Link href="#user-testing" underline="hover" color="inherit">
                <span>User Testing and Analysis </span>
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
                    <b>The aim of this project</b> was to build a website prototype for a startup based on their stated mission, and to redesign it following various types of feedback.
                    <br></br>
                    <br></br>
                    <b>Iterative design describes the process of continuously updating and redesigning an initial prototype based on outside feedback. This process is important because </b>websites are ultimately going to be serving a variety of people with different abilities and backgrounds. Getting the opinions of people with different expertise and background may help a designer see design flaws they hadn’t considered before, and create a better, more universally effective design.
                    <br></br>
                    <br></br>
                    For this project, our team worked on a website prototype for a startup called Pantore and redesigned it following the critique of fellow UI/UX student designers, then collected and evaluated remote user feedback from UserTesting.com.
                    </p>
                    <p><b>This was a project consisting of 3 team members total.</b></p>
                </div>
                <div id="initial-design">
                    <h2>Initial Design</h2>
                    <p>
                    Our chosen startup, Pantore, is a Brazilian startup that aims to connect restaurants and bulk food buyers to wholesalers and bulk food sellers. By providing a digital platform for them to connect, Pantore consolidates the marketplace, making it easy for restaurants to compare different wholesalers, and for wholesalers to access a large pool of potential customers.
                    <br></br>
                    <br></br>
                    When considering <b>the audience</b> for this website (restaurant managers and wholesalers), we determined they most likely have some experience with websites and online ordering, and with marketplace-formatted transactions. 
                    <br></br>
                    <br></br>
                    We used the startup’s mission and these audience considerations to start drafting some potential sketches for the website.
                    </p>
                    <Stack spacing={2}>
                    <Pagination
                        count={4}
                        renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                        )}
                        onChange={handleSketchChange}
                    />
                    </Stack>
                    <br></br>
                    {renderSketch()}
                    <br></br>
                    <p>
                    <b>Lo-Fi Wireframe</b>
                    <br></br>
                    Ultimately, we went with a design where a user could open a generic account. On that account, they could then open different stores if they wanted and list products for that store. Accounts would be brought to the general landing page, which would be a sort of marketplace with hot products and deals of the day, and an ability to browse all the stores or make orders.
                    <br></br>
                    <br></br>
                    We decided on this because it’s similar to how a marketplace operates in real life - we simply provide the space, and people can open as many shops as they want or also just peruse stores. This may be more inconvenient for those who decide to be mostly buyers or sellers, but <b>the tradeoff is that all users get flexibility and don’t have to learn vastly different interfaces if they happen to be both.</b>
                    <br></br>
                    <br></br>
                    You can see our wireframe below:
                    <br></br>
                    </p>
                    <iframe 
                    style={{
                        border: '1px solid'}}
                        width="800" 
                        height="450" 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fvs95MjKQ9vubfYZEnM53lj%2FIterative-Design%3Fnode-id%3D3%253A4%26t%3DC6MSi28vnKwLtuV8-1"
                        allowFullScreen='true'></iframe>         
                </div>
                <div id="hifi-prototype">
                    <h2>Hi-Fi Prototype &amp; Peer Critique</h2>
                    <p>
                    We then created a hi-fi prototype and presented it to our classmates and got their feedback. This was immensely helpful as our classmates were going through the same process as us with different startups, so they had experienced lots of different design ideas. Below is a summary of the feedback and how we improved upon our hi-fi prototype following the feedback.
                    </p>

                    <table>
                        <colgroup>
                            <col class="col1" />
                            <col class="col2" />
                        </colgroup>
                        <tr>
                            <th colspan="2">Group Critique Feedback &amp; Feedback</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>
                                In the Cart / Checkout page, people were unsure about whether the prices displayed for an product were per item or overall. 
                                </td>
                                <td>
                                We added a Unit Price and Subtotal column to our cart to make this clearer.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                In the Cart / Checkout page, since restaurants often need the same order at a certain frequency (milk every two weeks, e.g.), this would be a helpful feature to add.
                                </td>
                                <td>
                                We added an “Order Frequency” ability in the Cart / Checkout Page.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                The pages for a buyer viewing a vendor’s store and a vendor viewing their own store were too similar and confused users about whether they were viewing their own store or someone else’s.
                                </td>
                                <td>
                                We added an indicator that you are looking at your own store when applicable.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Users were unsure how to add products, vendors, or orders to their favorites.
                                </td>
                                <td>
                                We added an explicit “Save Cart” option to the Cart / Checkout page. We also created an unsaved and saved state for the Star icon.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                    <h3>Hi-Fi Prototype</h3>
                    <p>
                    <b>Our general design choices were</b> to use color to indicate info hierarchy and separation, with the navbar and footer being different colors than the general body of the page. We stuck with sans serif fonts for readability, and larger / different fonts for headers.
                    </p>

                    <iframe 
                    style={{border: '1px solid'}}
                    width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMwJpph9p2yKWwtClrHJqlM%2FIterative-Design%253A-Shared%3Fpage-id%3D3%253A6%26node-id%3D29%253A582%26viewport%3D25%252C270%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D29%253A582" allowfullscreen='true'></iframe>

                </div>

                <div id="user-testing">
                    <h2>User Testing</h2>
                    <p>
                    After we improved our hi-fi prototype, we sent it to UserTesting.com and had it tested by three remote users. We gave each of our users the same task to do and asked them questions about the difficulty of each task along the way, as well as their general thoughts on the website.
                    </p>
                    <br></br>
                    <Accordion id="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        User Tasks
                        </AccordionSummary>
                        <AccordionDetails id="accordiondetails">
                        <p>
                        <b>Below is the text given to the users verbatim.</b>
                        <br></br>
                        This web application is meant to connect restaurants with wholesale suppliers. Restaurants are able to order supplies from vendors using the site and vendors can create storefronts. We aim to determine whether navigating and ordering from the site is intuitive. Imagine you are a restaurant owner setting up a recurring food order.
                        <br></br>
                        <br></br>
                        This is an interactive mockup, not an actual website, so not all links are operable. Some buttons necessary for the task are dummy elements, but you should still interact with them as if they were real. Some pages are pre-filled to indicate their appearance after certain actions were performed but assume that nothing has been done yet.
                        <br></br>
                        <br></br>
                        Please think aloud as you navigate the site. Thank you for your input!
                        </p>
                        <h3>Subtasks</h3>
                        <p>
                        <ol>
                        <li>
                        Briefly familiarize yourself with the website by visiting the My Favorites Order History page, as well as any others you can find.
                        </li>
                        <li>
                        From Luigi’s Dairy, add the following to your cart: 10 lb of cheddar, 2 lb of Swiss, 4 lb of gouda, 4 lb of brie, 4 lb of muenster, and 4 lb of provolone. 
                        </li>
                        <li>
                        From Billford Supplies, add the following to your cart: 4 lb of Basmati rice.
                        </li>
                        <li>
                        Make sure the order frequency comes every two weeks and save the cart, giving it some representative name.
                        </li>
                        <li>
                        Checkout!
                        </li>
                        </ol>
                        </p>
                        <h3>Post-Task Questions</h3>
                        <p>
                        <ol>
                        <li>
                        What was your first thought upon seeing the landing page? 
                        </li>
                        <li>
                        When you added items to your cart, did you do so from the landing page, vendor page, or favorites page?
                        </li>
                        <li>
                        Where there any points where you were unclear about the purpose of a button or were confused by the layout?
                        </li>
                        <li>
                        If you were able to explore, what did you think of the pages that weren’t involved in the task?
                        </li>
                        <li>
                        Anything else you want to tell us? Any feedback is greatly appreciated!
                        </li>
                        </ol>
                        </p>
                        
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        User #1 Video
                        </AccordionSummary>
                        <AccordionDetails id="accordiondetails">
                            <iframe width="800" height="450" src="https://drive.google.com/file/d/1UgUSeOk2O_nyTf_D7RNnzAAx1wtDB8BV/preview" class="video-embed" allow="autoplay"></iframe>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        User #2 Video
                        </AccordionSummary>
                        <AccordionDetails id="accordiondetails">
                            <iframe width="800" height="450" src="https://drive.google.com/file/d/1hpDLAQZhaFAMbaW_-RPzw5GSXkuKpb2v/preview" class="video-embed" allow="autoplay"></iframe>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion id="accordion">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        User #3 Video
                        </AccordionSummary>
                        <AccordionDetails id="accordiondetails">
                            <iframe width="800" height="450" src="https://drive.google.com/file/d/1Xj0Fgm-vtesCgDmopJEuDUB0ZVi_DZ3Q/preview" class="video-embed" allow="autoplay"></iframe>
                        </AccordionDetails>
                    </Accordion>

                    <h3>Frequent Errors</h3>
                    <p>
                        <ul>
                            <li>
                            The most frequent confusion came from the fact that the website was a prototype; users would click dummy buttons and weren’t sure whether or not it was supposed to lead to an action.
                            </li>
                            <li>
                            Two of the users noted that it was somewhat difficult to find the Order History page, as it was in the footer.
                            </li>
                        </ul>
                    </p>

                    <h3>General Conclusions</h3>

                    <p>
                    In general, testers were able to accurately navigate through the steps using their intuition. Due to the nature of the prototype, testers were not always able to tell if they had successfully completed a click. Despite this, each tester accurately followed the checkout process, and they all successfully completed the subtasks. This result was generally in line with our expectations given that the flow of the page mimics common food ordering pages.
                    </p>

                    <h3>Possible Redesigns</h3>
                    <p>
                    Based on comments from the testers, we would likely develop the following changes:
                        <ul>
                            <li>
                            Include a “past vendors” carousel on the landing page to highlight vendors the user has purchased from before. Testers recommended this in order to make it easier to find vendors they had made previous purchases from.
                            </li>
                            <li>
                            Move the favorites, order history, and profile settings to the profile menu. Testers leveraged the order history page, and this would consolidate the navigation bar and raise the order history page within the overall page hierarchy.
                            </li>
                            <li>
                            Provide more distinction between the vendor and buyer functions of the website by creating two separate website layouts depending on the type of user. Some testers noted a possible conflation between vendor and buyer capabilities.
                            </li>
                        </ul>
                    </p>
                </div>

                <div id="conclusion">
                        <h2>Conclusion</h2>
                        <p>
                        Through this project, I got exposure to a lot of different concepts - designing as a team, getting feedback from designers after presenting a prototype, and getting feedback from users after watching them interact with a prototype.
                        <br></br>
                        Up to this point, I had mostly focused on the coding aspect of computer science. This project involved no coding at all, which was unique and I felt really valuable because it encouraged me to put equal thought and consideration into the design of a website.
                        <br></br>
                        It also encouraged me to look for feedback from as many avenues as possible: fellow classmates, possible users, UI/UX professors, etc. I feel that the teamwork and feedback aspect of this was helpful in moving forward and working on large companies consisting of huge teams.
                        <br></br>
                        Moving forward, I feel that I have a much better understanding of the design and prototyping process that goes on before coding even begins.
                        </p>
                </div>

            </div>
        </div>
        
    )
}