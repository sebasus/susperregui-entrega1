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
                    <LogoImg className="logoImg"/>   
                    <Brand/> 
                    <div className="conteinerList">
                        <li className="section">
                            <Link to={'/'}>Sahumerios</Link> 
                        </li>
                        <li className="section">
                            <Link to={'/'}>Velas</Link>   
                        </li>
                        <li className="section">
                            <Link to={'/'}>Aromatizantes</Link> 
                        </li>
                    </div>
                    <CartWidget/>
                </ul>
            </nav>
        </header>    
    )
}
export default NavBar;