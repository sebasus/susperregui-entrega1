import "./NavBar.css";
import LogoImg from "../Logo/Logo";
import Brand from "../Brand/Brand";
import CartWidget from "../Cart/CartWidget";

const NavBar = () =>{
    return(
        <header>    
            <nav Classname="navBar" >
                <ul className="list">
                    <LogoImg className="logoImg"/>   
                    <Brand/> 
                    <div className="conteinerList">
                        <li className="section">
                            <a href="/">Sahumerios</a>
                        </li>
                        <li className="section">
                            <a href="/">Velas</a>    
                        </li>
                        <li className="section">
                            <a href="/">Aromatizantes</a> 
                        </li>
                    </div>
                    <CartWidget/>
                </ul>
            </nav>
        </header>    
    )
}
export default NavBar;