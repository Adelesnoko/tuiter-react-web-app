import React from "react";
import TuitsList from "../tuits";
import WhatsHappening from "../whats-happening";
import "./index.css";

function HomeScreen() {
    return(
        <>    
            <h4>Home</h4>
            <WhatsHappening />
            <TuitsList />
        </>
        
    );
};
export default HomeScreen;