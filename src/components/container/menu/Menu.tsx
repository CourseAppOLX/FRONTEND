import { useState } from "react";
import DefaultHeader from "../DefaultHeader";
import "./Menu.css";

import setingimg from './resourse/Help3.png';
import img from './resourse/1783235.png';
import imgdashboard from './resourse/Dashboard2.png';
import imganalitycs from './resourse/analitytics6.png';
import imgwallet from './resourse/Wallet6.png';
import imgnotification from './resourse/noti.png';
import imgsetings from './resourse/seting.png';
import imgexit from './resourse/exit.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserActionType, IAuthUser } from "../../auth/types";
import http from "../../../http";
// 


// 
const Menu = () => {
    // const [indexImg, setIndexImg] = useState(1);
    // const [isDarkMode, setIsDarkMode] = useState(false);
  
    
   

    const {isAuth, user} = useSelector ((store: any) => store.auth as IAuthUser);
  
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      
        const navigator = useNavigate();
        const dispatch = useDispatch();

        const logout = (e: any) => {
          e.preventDefault();
          localStorage.removeItem('token');
          http.defaults.headers.common[
            "Authorization"
            ] = ``;
            dispatch({type: AuthUserActionType.LOGOUT_USER});
            navigator('/');
        }


        const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
        }

        const [isNavActive, setIsNavActive] = useState(false);

        const navbar = () => {
            setIsNavActive(!isNavActive);
        }
        const isAdmin : boolean = user?.roles==="Admin";
    return(
        <>
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

        <div className="toggle" onClick={toggleSidebar}>
            <i><img src={img} height="50vw" width="50vw" alt=""/></i>
        </div>


        <div className="logo">
            {/* <img src="resourse/netflix-logo-circle-png-5.png" height="50vw" width="70vw" alt="logo"/> */}
            <h3 className="email"><Link className="emailtext" aria-current="page" to="/profile">
                    {user?.email}
                  </Link></h3>
        </div>

{/*

 <h3 className="email"><Link className="emailtext" aria-current="page" to="/profile">
                    {user?.email}
                  </Link></h3>

*/}
        <nav>
            <div className="nav-title">
                Management
            </div>

            <ul>
            <Link  aria-current="page" to="/home">
                <li onClick={navbar} className={`nav-item ${isNavActive ? '' : 'active'}`}>
                    <i ><img src={imgdashboard} height="35vw" width="35vw" alt="home"/></i>
                    <span>Home</span>
                </li>
                </Link>

                {isAdmin &&
                <Link  aria-current="page" to="/admin">
                <li  onClick={navbar} className={`nav-item ${isNavActive ? 'active' : ''}`}>

                   
                    <i ><img src={imganalitycs} height="35vw" width="35vw" alt="admin"/></i>
                    <span>Admin Panel</span>
                  
                </li>
                </Link>
                 }


                <Link  aria-current="page" to="/category">
                    <li  onClick={navbar} className={`nav-item ${isNavActive ? 'active' : ''}`}>
                    <i ><img src={imgwallet} height="35vw" width="35vw" alt="Wallet"/></i>
                    <span>Category</span>
                    </li>
                </Link>
                
<Link  aria-current="page" to="/admin">
    <li  onClick={navbar} className={`nav-item ${isNavActive ? 'active' : ''}`}>
                    <i ><img src={imgnotification} height="35vw" width="35vw" alt="Notifications"/></i>
                    <span>Notifications</span>
                </li>
                </Link>
                
<Link  aria-current="page" to="/admin">
    <li  onClick={navbar} className={`nav-item ${isNavActive ? 'active' : ''}`}>
                    <i ><img src={imgsetings} height="35vw" width="35vw" alt="Seting"/></i>
                    <span>Settings</span>
                </li>
                </Link>
                
            </ul>

            <hr /> 
            <div className="nav-title">
                Supports
            </div>

            <ul>
               <Link  aria-current="page" to="/admin">
                     <li  onClick={navbar} className={`nav-item ${isNavActive ? 'active' : ''}`}>
                    <i ><img src={setingimg} height="35vw" width="35vw" alt="Help"/></i>
                    <span>Get Help</span>
                </li>
                
                </Link> 
       
<Link  aria-current="page" to="/logout" onClick={logout}>
    
     <li  onClick={navbar} className={`nav-item ${isNavActive ? 'active' : ''}`}>
                    <i ><img src={imgexit} height="35vw" width="35vw" alt="Feedback"/></i>
                    <span>Exit</span>
                </li>
                
                </Link>
              

            </ul>


        </nav>

        <div>
      {/* Your JSX content here */}
     
      
    </div>

    </div>



        </>
    )
}

export default Menu;