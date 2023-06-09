import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaListUl, FaEllipsisH} from "react-icons/fa";
import {AiFillHome, AiOutlineUser, AiOutlineLogin} from "react-icons/ai";
import {GiArchiveRegister} from "react-icons/gi";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [active] = pathname.split("/");
    const links = [
        { name: "home", icon: <AiFillHome /> },
        { name: "explore", icon: <FaHashtag />  },
        { name: "notifications", icon: <FaRegBell />  },
        { name: "messages", icon: <FaRegEnvelope />  },
        { name: "bookmarks", icon: <FaRegBookmark />  },
        { name: "lists", icon: <FaListUl />  },
        // { name: "profile", icon: <AiOutlineUser />  },
        // { name: "login", icon: <AiOutlineLogin />  },
        // { name: "register", icon: <GiArchiveRegister />  },
        { name: "more", icon: <FaEllipsisH />  },
    ];
    const { currentUser } = useSelector((state) => state.user);
    
    return (
        <div className="list-group">
            {!currentUser && 
                <Link 
                    className={`list-group-item ${active === "login" ? "active" : ""}` }
                    to="/tuiter/login">
                    <div className="d-flex align-items-center">
                        <span className="me-2"><AiOutlineLogin /></span>
                        <span className="icon-text">Login</span>
                    </div>  
                </Link>
            }
            {!currentUser && 
                <Link 
                className={`list-group-item ${active === "register" ? "active" : ""}` }
                    to="/tuiter/register">
                    <div className="d-flex align-items-center">
                        <span className="me-2"><GiArchiveRegister /></span>
                        <span className="icon-text">Register</span>
                    </div>
                </Link>
            }
            { currentUser && 
                <Link 
                className={`list-group-item ${active === "profile" ? "active" : ""}` }
                    to="/tuiter/profile">
                    <div className="d-flex align-items-center">
                        <span className="me-2"><AiOutlineUser /></span>
                        <span className="icon-text">Profile</span>
                    </div>
                </Link>
            }
            {links.map((link) => 
                <Link 
                    key={link.name}
                    to={`/tuiter/${link.name}`} 
                    className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
                    <div className="d-flex align-items-center">
                        <span className="me-2">{link.icon}</span>
                        {/* <FontAwesomeIcon icon={link.icon} className="me-2" /> */}
                        <span className="d-sm-none d-lg-block">{link.name}</span>
                    </div>
                </Link>
            )}
        </div>
        
    );
};
export default NavigationSidebar;