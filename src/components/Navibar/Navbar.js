import "./NavbarStyle.css";
import { NavData } from "../JSON_Data/Navdata.js";
import { Link } from "react-router-dom";

//Navigation bar
export default function Navbar(){
    return (
        <div className="NavContainer">
            <div className="UpperContainer">
                <div className="UContents">
                    <div className="Logo">
                        <Link to="/" className="Home"><h5>book<span>my</span>show</h5></Link>
                    </div>
                    <div className="Searchbar">
                        <span className="SearchIcon">
                            <i className="fa fa-search"></i>
                        </span>
                        <span formName="Search">
                            <input id="searchInput" type="text" placeholder="Search here"/>
                        </span>
                    </div>
                    <div className="Menu">
                        <h6><span id="menuSpan"><i class="fa-solid fa-bars"></i></span></h6>
                    </div>
                    <div className="Auth">
                        <Link to="/signin" id="AuthLink"><span id="authSpan">Sign in</span></Link>
                    </div>
                    <div className="City">
                        <h6><span id="citySpan">Coimbatore   <i class="fa fa-caret-down" aria-hidden="true"></i></span></h6>
                    </div>
                </div>
            </div>
            <div className="LowerContainer">
                <div className="LContents">
                    {NavData.map((movie) => {
                        return(
                            <div className="Menus" key={movie.id}>
                                <Link to={movie.link} className={movie.classname}>{movie.head}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}