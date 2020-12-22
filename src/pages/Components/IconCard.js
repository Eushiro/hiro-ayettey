import React from 'react';
import profilePicture from '../../images/profile.jpg'
import { Text } from "@chakra-ui/react"
import '../../CSS/App.css'

function IconCard(iconDescription, key) {
    return (
        <div key={key}>
            <a href={iconDescription.link}>
                <div className="AboutCard">
                    <img
                        alt="icon"
                        src={iconDescription.image}
                    />
                    <Text fontSize={{ base: "1.5em", md: "2em", lg: "2em", xl: "2em" }} className="AboutCardText">{iconDescription.text}</Text>
                </div>
            </a>
        </div>
    )
}

export default IconCard;