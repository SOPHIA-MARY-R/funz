import { Component } from "react";
import "./NavbarStyle.css";
import { NavData } from "./Navdata.js";
import { Link } from "react-router-dom";
class Navbar extends Component{
    render(){
        return (
            <div className="NavContainer">
                <div className="UpperContainer">
                    <div className="UContents">
                        <div className="Logo">
                            <Link to="/" className="Home"><h4>book<span>my</span>show</h4></Link>
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
                            <Link to="/signin"><span id="authSpan">Sign in</span></Link>
                        </div>
                        <div className="City">
                            <h6><span id="citySpan">Coimbatore   <i class="fa fa-caret-down" aria-hidden="true"></i></span></h6>
                        </div>
                    </div>
                </div>
                <div className="LowerContainer">
                    <div className="LContents">
                        {NavData.map((item, index) => {
                            return(
                                <div className="Menus" key={index}>
                                    <Link to={item.link}s className={item.classname}>{item.head}</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 export default Navbar;