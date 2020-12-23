import React from 'react';
import HomeImage from "../images/home.svg"
import { Link } from "gatsby"
import '../CSS/App.css'

function HomeCard() {
    return (
        <Link to="/">
            <div className="HomeCard">
                <img
                    alt="home"
                    src={HomeImage}
                />
            </div>
        </Link>
    );
}

export { HomeCard };