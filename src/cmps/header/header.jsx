import { CTA } from "./CTA"
import { HeaderSocials } from "./header-socials"
import Me from "../../assets/img/arik.jpg"
import Logo from "../../assets/img/arik_logo.png"


export function Header() {
    return <header>
        <div className="container header-container">
            <img className="arik-logo" src={Logo} alt="" />
            <h5>Hello I'm</h5>
            <h1>Arik Davidyan</h1>
            <h5 className="">Fullstack Developer </h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={Me} alt="me" />
            </div>
            <a href="#contact" className="scroll-down">Scroll Down</a>
        </div>
    </header>
}