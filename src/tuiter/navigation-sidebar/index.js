import React from "react";
import { Link, useLocation } from "react-router-dom";
import {FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaListUl, FaEllipsisH} from "react-icons/fa";
import {AiFillHome, AiOutlineUser} from "react-icons/ai";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    // const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    const links = [
        { name: "home", icon: <AiFillHome /> },
        { name: "explore", icon: <FaHashtag />  },
        { name: "notifications", icon: <FaRegBell />  },
        { name: "messages", icon: <FaRegEnvelope />  },
        { name: "bookmarks", icon: <FaRegBookmark />  },
        { name: "lists", icon: <FaListUl />  },
        { name: "profile", icon: <AiOutlineUser />  },
        { name: "more", icon: <FaEllipsisH />  },
    ];
      
    return (
        <div className="list-group">
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