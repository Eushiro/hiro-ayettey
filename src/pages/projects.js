import React from 'react';
import { ChakraProvider, Flex, Text } from "@chakra-ui/react"
import { ExternalSiteCard } from "../Components/ExternalSiteCard"
import IconDescription from "../Descriptions/IconDescription"
import GithubImage from "../images/github.svg"
import { HomeCard } from "../Components/HomeCard"
import '../CSS/App.css'

var githubDescription = new IconDescription(
    "Github",
    GithubImage,
    "https://github.com/eushiro"
)

function Projects() {
    return (
        <ChakraProvider>
            <div className="App">
                <Flex h="97vh" direction="row" justify="flex-start" className="Projects" flexWrap="wrap">
                    <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="ProjectsTitle">
                        Projects
                    </Text>
                </Flex>
                {ExternalSiteCard(githubDescription)}
                {HomeCard()}
            </div>
        </ChakraProvider>
    );
}

export default Projects;