import React from 'react';
import { GridItem, Text, Stack, Flex, Image, Box } from "@chakra-ui/react"
import 'antd/dist/antd.css';
import '../CSS/App.css'

function ProjectCard(projectDescription, key) {
    var mediaTag = (<Image src={projectDescription.image} className="ProjectCardImage" alt="project" />)
    if (projectDescription.image.includes(".mp4")) {
        mediaTag = (<video autoPlay muted loop playsInline src={projectDescription.image} type="video/mp4" className="ProjectCardImage" alt="project" />)
    }
    return (
        <GridItem rowSpan={{ base: 2 }} colSpan={{ base: 20 }} mb={{ base: "3vh" }} key={key}>
            <a href={projectDescription.link}>
                <div className="ProjectCardContainer">
                    <Flex className="ProjectCard" direction="row">
                        <Box flexBasis={{ md: "35%", lg: "30%", xl: "25%" }} className="ProjectCardImageWrapper">
                            {mediaTag}
                        </Box>
                        <Stack flexBasis={{ base: "100%", sm: "70%", md: "65%", lg: "65%", xl: "70%" }} ml={{ md: "2vw" }} p={{ base: "2vh", sm: "0vh", md: "1vh", lg: "0vh" }}>
                            <Text className="ProjectCardTitle" fontSize={{ base: "30px", md: "38px", lg: "40px" }} >{projectDescription.title}</Text>
                            <Text className="ProjectCardTechnologies" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>{projectDescription.languages}</Text>
                            <Text fontSize={{ base: "17px", md: "17px", lg: "20px" }} className="ProjectCardText">{projectDescription.description}</Text>
                        </Stack>
                    </Flex>
                </div>
            </a>
        </GridItem>
    );
}

export default ProjectCard;
