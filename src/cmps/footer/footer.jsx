import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export const Footer = () => {
    return <footer>
        <a href="#" className="footer-logo">ARIK DAVIDYAN</a>
        <ul className="permalinks clean-list flex">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#protfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials flex">
            <a href="https://www.facebook.com/arikdavidyan" target="_blank"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/arikdavidyan/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://twitter.com/TheMuscleTussle" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            {/* <a href="https://github.com/CarmelYona" target="_blank" rel="noopener noreferrer"><BsGithub /></a> */}
        </div>

        <div className="footer-copyright">
            <small>&copy; Arik Davidyan. All rights reserved.</small>
        </div>
    </footer>
}