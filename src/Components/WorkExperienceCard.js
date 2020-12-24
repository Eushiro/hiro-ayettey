import React from 'react';
import { GridItem, Text, HStack, Stack } from "@chakra-ui/react"
import 'antd/dist/antd.css';
import '../CSS/App.css'

function WorkExperienceCard(jobDescription, key) {
    return (
        <GridItem rowSpan={{ base: 2, sm: 4, md: 2, lg: 2, xl: 2 }} colSpan={{ base: 18, sm: 14, md: 19, lg: 19, xl: 19 }} mb={{ base: "3vh" }} key={key}>
            <div className="WorkExperienceCardContainer">
                <div className="WorkExperienceTextContainer">
                    <HStack className="WorkExperienceCard" spacing="2vw">
                        <img src={jobDescription.image} className="WorkExperienceImage" />
                        <Stack>
                            <a href={jobDescription.link}>
                                <Text className="WorkExperienceTextTitle" fontSize={{ base: "30px", md: "40px", lg: "40px" }} >{jobDescription.title}</Text>
                            </a>
                            <Text className="WorkExperienceTextPosition" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>{jobDescription.jobPosition} - {jobDescription.location}</Text>
                            <Text>{jobDescription.text}</Text>
                        </Stack>
                    </HStack>
                </div>
            </div>
        </GridItem>
    );
}

export default WorkExperienceCard;