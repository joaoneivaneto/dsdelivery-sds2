import './styles.css'
import {ReactComponent as YoutubeIcon} from "./youtube.svg";
import {ReactComponent as InstagramIcon} from "./Instagram.svg";
import {ReactComponent as LinkedinIcon} from "./Linkedin.svg";
function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante e pós a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
              <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon/>
              </a>
              <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                 <LinkedinIcon/>
              </a>
              <a href="https://www.instagram.com/devsuperior.ig/">
                <InstagramIcon/> 
              </a>
            </div>
        </footer>
    )
}
 export default Footer;