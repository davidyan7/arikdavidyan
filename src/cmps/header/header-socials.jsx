import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


export const HeaderSocials = () => {
    return <div className="header-socials flex">
        <a href="https://www.linkedin.com/in/arikdavidyan/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://twitter.com/TheMuscleTussle" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        {/* <a href="https://github.com/CarmelYona" target="_blank" rel="noopener noreferrer"><BsGithub /></a> */}
    </div>
}