import './Development.css'
import Link from '@mui/material/Link'

export default function Development(props) {

    return(
        <div id="development">
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
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div id="research">
                <h2>Research</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
        
    )
}