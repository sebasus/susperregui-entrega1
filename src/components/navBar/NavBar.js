import "./NavBar.css";
import LogoImg from "../Logo/Logo";
import Brand from "../Brand/Brand";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <header>    
            <nav className="navBar" >
                <ul className="list">
                    <Link to={'/'}><LogoImg className="logoImg"/></Link>    
                    <Brand/> 
                    <div className="conteinerList">
                        <li className="section">
                            <Link to={'/Sahumerios'}>Sahumerios</Link> 
                        </li>
                        <li className="section">
                            <Link to={'/Velas'}>Velas</Link>   
                        </li>
                        <li className="section">
                            <Link to={'/Aromatizantes'}>Aromatizantes</Link> 
                        </li>
                        <li className="section">
                            <Link to={'/Cart'}><CartWidget/></Link> 
                        </li>
                    </div>
                </ul>
            </nav>
        </header>    
    )
}
export default NavBar;