import React from 'react';
import { ChakraProvider, Grid, GridItem, Text } from "@chakra-ui/react"
import { ExternalSiteCard } from "../Components/ExternalSiteCard"
import IconDescription from "../Descriptions/IconDescription"
import GithubImage from "../images/github.svg"
import { HomeCard } from "../Components/HomeCard"
import '../CSS/App.css'
import MetaTags from "../Components/MetaTags"
import { projectDescriptions } from "../Descriptions/ProjectDescription"
import ProjectCard from "../Components/ProjectCard"

var githubDescription = new IconDescription(
    "Github",
    GithubImage,
    "https://github.com/eushiro"
)

function Projects() {
    var projectCards = []
    for (var i = 0; i < projectDescriptions.length; i++) {
        projectCards.push(ProjectCard(projectDescriptions[i], i))
    }

    return (
        <ChakraProvider>
            <div className="App">
                {MetaTags("Projects")}
                <Grid className="WorkExperience" templateRows="repeat(15, 1fr)" templateColumns="repeat(20, 1fr)" >
                    <GridItem colStart={2} rowStart={1} colSpan={{ base: 0, md: 12 }}>
                        <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="ProjectsTitle">
                            Projects
                        </Text>
                    </GridItem>
                    {projectCards}
                </Grid>
                {ExternalSiteCard(githubDescription)}
                {HomeCard()}
            </div>
        </ChakraProvider>
    );
}

export default Projects;