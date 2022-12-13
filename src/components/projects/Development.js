import './Development.css'
import Link from '@mui/material/Link'

export default function Development(props) {

    return(
        <div id="development">
            <div className='section'>
                <div id="intro">
                    <h1>Development</h1>
                    <p><em>Developing and working with React state logic</em></p>
                    <div id="intro-links">
                    <Link href="#background" underline="hover" color="inherit">
                    <span>Background</span>
                    </Link>
                    <span> &#x2022; </span> 
                    <Link href="#research" underline="hover" color="inherit">
                    <span>Research</span>
                    </Link>
                    <span> &#x2022; </span> 
                    <Link href="#planning" underline="hover" color="inherit">
                    <span>Planning &amp; General Architecture</span>
                    </Link>
                    <span> &#x2022; </span> 
                    <Link href="#final-website" underline="hover" color="inherit">
                    <span>Final Website</span>
                    </Link>
                    <span> &#x2022; </span> 
                    <Link href="#conclusion" underline="hover" color="inherit">
                    <span>Conclusion</span>
                    </Link>
                    </div>
                </div> 
                <div id="background">
                    <h2>Background</h2>
                    <p>
                    <b>The aim of this project</b> was to get more experience with state variables in ReactJS and capturing user interaction to change the program state by making a site that allows users to filter and sort information.
                    <br></br>
                    <br></br>
                    <b>State variables in JavaScript programs are integral to the user interaction experience.</b> They are immensely helpful in making websites responsive to user input, because when the state of the program changes, the website is rerendered with the new state. This means that if a user input happens to change the state of the program, the website will update in response to whatever the user just did. State can also help in storing what the user has inputted, such as cart functionality on many websites. 
                    <br></br>
                    <br></br>
                    For this project, I created a site that listed various cities in Asia and allowed the user to filter them according to religions practiced or regions they were in, sort by population, and save / unsave favorites.
                    </p>
                    <p><b>This was a solo project.</b></p>
                </div>
                <div id="research">
                    <h2>Research</h2>
                    <p>
                    As a mostly backend programmer, this project was a major introduction for me into React and Javascript, as well as more advanced HTML and CSS.
                    <br></br>
                    For prior React and JavaScript research and experience, I got experience with basic React functionality in creating a simple bakery page that allowed users to add items to a cart.
                    </p>
                    <img src={process.env.PUBLIC_URL + "/images/development/bakery-thumbnail.png"} id='bakery-thumbnail'></img>
                    <p><em>Normally this would link to the site, but it's not anonymous right now...</em></p>
                    <p>
                    In this program, the cart is a dictionary and the total is a value. Both are state variables that get added to when the user clicks “Add to Cart”.
                    </p>
                </div>
                <div id='planning'>
                    <h2>Planning &amp; General Architecture</h2>
                    <p>
                    For the project, I decided to use Asian cities as a database for filtering and sorting as there are a lot of possible characteristics to compare and contrast between them.
                    <br></br>
                    Generally, I planned the architecture of this program to have 3 components; App, Filters, and City.
                    </p>
                    <img src={process.env.PUBLIC_URL + "/images/development/diagram.png"} id='diagram'></img>
                    <p>
                    <b>City</b> contains the html for each City card as well as the logic needed to add/remove a city from the state variable called "Favorites" and change the card button.
                    <br></br>
                    <br></br>
                    <b>Filters</b> contains the logic for updating all state variables except "Favorites" according to whatever parameters the users has chosen.
                    <br></br>
                    <br></br>
                    <b>App</b> does the actual filtering and sorting on the dataset. It contains a City for each list item in the json and one Filter component.
                    </p>

                </div>

                <div id='final-website'>
                    <h2>Final Website</h2>
                    <p>Finally, you can visit the new website in another tab below. It is coded in React, JavaScript, HTML, and CSS.</p>
                    <a href='https://sleepyflyingfox108.github.io/development/' target='_blank' >
                        <img src={process.env.PUBLIC_URL + "images/development-thumbnail.png"} id='final-website-image'></img>
                    </a>
                    <p>
                    When a user clicks any of the filters or sorts, it filters the displayed cards according to the parameters the user has entered. A user also has the ability to add or remove cards from a “Favorites” list which can be toggled on and off, and keep track of the total “Favorites” population.
                    </p>

                    <h3>How State Is Used</h3>
                    <p>
                    There are five state variables in this program that are updated by various user inputs. Below is a table listing the state variable, what it is used for, and how user input on the front-end of the website changes this state variable on the back-end.
                    </p>

                    <table>

                        <tr>
                            <th colspan="1">State Variable</th>
                            <th colspan="1">Description</th>
                            <th colspan="1">Corresponding User Input</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td class='colOne'>
                                populationSort
                                </td>
                                <td class='colTwo'>
                                a Boolean that describes whether the list should be sorted by population or not
                                </td>
                                <td class='colThree'>
                                radio button under "Sort by: Population"
                                </td>
                            </tr>
                            <tr>
                                <td class='colOne'>
                                currRegion
                                </td>
                                <td class='colTwo'>
                                a String that describes the current region to be filtered by
                                </td>
                                <td class='colThree'>
                                radio button under "Filter by: Region"
                                </td>
                            </tr>
                            <tr>
                                <td class='colOne'>
                                currReligions
                                </td>
                                <td class='colTwo'>
                                an Array of Strings that describes the religions to be filtered by
                                </td>
                                <td class='colThree'>
                                stackable checkboxes under "Filter by: Religion" (<em>supports <b>AND</b> behavior</em>)
                                </td>
                            </tr>
                            <tr>
                                <td class='colOne'>
                                favorites
                                </td>
                                <td class='colTwo'>
                                a Dictionary mapping city name Strings to JSON City Objects
                                </td>
                                <td class='colThree'>
                                add / remove favorites buttons for each City
                                </td>
                            </tr>
                            <tr>
                                <td class='colOne'>
                                displayFavorites
                                </td>
                                <td class='colTwo'>
                                a Boolean describing whether or not the Favorites list should be displayed and sorted
                                </td>
                                <td class='colThree'>
                                checkbox next to "Display Favorites"
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <div id='conclusion'>
                    <h2>Conclusion</h2>
                    <p>Making this website primarily helped me strengthen my React and JavaScript skills, but it also gave me key insights into how user input works behind the scenes and how it can change a program.
                    <br></br>
                    It also showed me how the UI/UX of a program, the general structure of the app, and the database behind it are all connected. Since I created my own JSON, parsed through it, created logic for filters, and then also decided how those filters were displayed to the user, it illustrated, in a simple way, the full pipeline behind a website.
                    <br></br>
                    <br></br>
                    After having done this project, I feel much more confident in my understanding of frontend programming and design.
                    </p>
                </div>

            </div>
        </div>
        
    )
}