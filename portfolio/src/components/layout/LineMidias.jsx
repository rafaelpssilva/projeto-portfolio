import './LineMidias.css'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function LineMidias() {
    return (
        <div className="line-medias">
            <ul>
                <li><a href="/"><AiFillFacebook /></a></li>
                <li><a href="/"><AiFillInstagram /></a></li>
                <li><a href="/"><AiFillLinkedin/></a></li>
                <li><a href="/"><AiFillGithub /></a></li>
            </ul>
        </div>
    )
}

export default LineMidias