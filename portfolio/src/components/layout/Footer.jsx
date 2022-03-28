import './Footer.css'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <ul>
                <li><a href="/"><AiFillFacebook /></a></li>
                <li><a href="/"><AiFillInstagram /></a></li>
                <li><a href="/"><AiFillLinkedin/></a></li>
                <li><a href="/"><AiFillGithub /></a></li>
            </ul>
        </footer>
    )
}

export default Footer