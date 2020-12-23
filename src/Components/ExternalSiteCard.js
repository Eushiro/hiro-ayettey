import React from 'react';
import '../CSS/App.css'

function ExternalSiteCard(iconDescription) {
    return (
        <a href={iconDescription.link}>
            <div className="ExternalSiteCard">
                <img
                    alt="icon"
                    src={iconDescription.image}
                />
            </div>
        </a>
    );
}

export { ExternalSiteCard };