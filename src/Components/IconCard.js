import React from 'react';
import { Text } from "@chakra-ui/react"
import '../CSS/App.css'
import { Link } from 'gatsby'

function isFile(linkName) {
    return /\.[0-9a-z]+$/i.test(linkName)
}

function IconCard(iconDescription, key) {
    var linksToFile = isFile(iconDescription.link)

    var body = (<div className="AboutCard">
        <img
            alt="icon"
            src={iconDescription.image}
        />
        <Text fontSize={{ base: "1.5em", md: "2em" }} className="AboutCardText">{iconDescription.text}</Text>
    </div>)

    if (linksToFile) {
        return (
            <div key={key}>
                <a href={iconDescription.link}>
                    {body}
                </a>
            </div>
        );
    } else {
        return (
            <div key={key}>
                <Link to={iconDescription.link}>
                    {body}
                </Link>
            </div>
        )
    }
}

export { IconCard };