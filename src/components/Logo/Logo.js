import Logo from "./AnkaraImg.png";
import "./Logo.css"

const LogoImg = () =>{
    return(
        <div className="conteinerImg">
            <img src={Logo} className="logoImg" alt="logo"/>
        </div>
    )
}
 
export default LogoImg;