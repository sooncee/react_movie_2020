import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation(){
    return (
    <div className="nav">
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#">RADIO</a>
        </div>
        <div>
            <h3>YOUR LIBRARY</h3>
            <a href="#">Recently Played</a>
            <a href="#">Favorite Movies</a>
            <a href="#">Actocs</a>
            <a href="#">Movie</a>
        </div>
        <div>
        <h3>PLAYLIST</h3>
            <a href="#">Movie Top 50</a>
            <a href="#">Action Movie Top 50</a>
            <a href="#">Romance season</a>
        </div>

    </div>
    );
}

export default Navigation;