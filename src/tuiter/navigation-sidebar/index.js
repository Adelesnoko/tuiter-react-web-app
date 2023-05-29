import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    return (
        <div className="list-group">
            {links.map((link) => 
                <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                {link}
                </Link>
            )}
            {/* <Link to={"/tuiter/home "} className={`list-group-item
                ${active === "home" ? "active" : ""}`}>Home</Link>
            <Link to={"/tuiter/explore "} className={`list-group-item
                        ${active === "explore" ? "active" : ""}`}>Explore</Link>
            <Link to={"/tuiter/notifications "} className={`list-group-item
                        ${active === "notifications" ? "active" : ""}`}>Notifications
            </Link>
            <Link to={"/tuiter/messages "} className={`list-group-item
                        ${active === "messages" ? "active" : ""}`}>Messages</Link>
            <Link to={"/tuiter/bookmarks "} className={`list-group-item
                        ${active === "bookmarks" ? "active" : ""}`}>Bookmarks</Link>
            <Link to={"/tuiter/lists "} className={`list-group-item
                        ${active === "lists" ? "active" : ""}`}>Lists</Link>
            <Link to={"/tuiter/profile "} className={`list-group-item
                        ${active === "profile" ? "active" : ""}`}>Profile</Link>
            <Link to={"/tuiter/more "} className={`list-group-item
                        ${active === "more" ? "active" : ""}`}>More</Link> */}
            {/* <Link className="list-group-item">Home</Link>
            <Link className="list-group-item">Explore</Link>
            <Link className="list-group-item">Notifications</Link>
            <Link className="list-group-item">Messages</Link>
            <Link className="list-group-item">Bookmarks</Link>
            <Link className="list-group-item">Lists</Link>
            <Link className="list-group-item">Profile</Link>
            <Link className="list-group-item">More</Link> */}
        </div>
    );
};
export default NavigationSidebar;