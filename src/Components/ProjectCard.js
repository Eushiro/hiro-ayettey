import React from 'react';
import { GridItem, Text, Stack, Flex, Image, Box } from "@chakra-ui/react"
import 'antd/dist/antd.css';
import '../CSS/App.css'

function ProjectCard(projectDescription, key) {
    return (
        <GridItem rowSpan={{ base: 2, sm: 2 }} colSpan={{ base: 18, sm: 14, md: 19, lg: 19, xl: 19 }} mb={{ base: "3vh" }} key={key}>
            <div className="ProjectCardContainer">
                <Flex className="ProjectCard" direction="row">
                    <Box flexBasis="25%">
                        <Image src={projectDescription.image} className="ProjectCardImage" alt="project" />
                    </Box>
                    <Stack flexBasis="70%" ml="1vw">
                        <a href={projectDescription.link}>
                            <Text className="ProjectCardTitle" fontSize={{ base: "30px", md: "40px", lg: "40px" }} >{projectDescription.title}</Text>
                        </a>
                        <Text className="ProjectCardTechnologies" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>{projectDescription.languages}</Text>
                        <Text fontSize={{ base: "17px", md: "20px", lg: "17px" }} className="ProjectCardText">{projectDescription.description}</Text>
                    </Stack>
                </Flex>
            </div>
        </GridItem>
    );
}

export default ProjectCard;
