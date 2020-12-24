import React from 'react';
import { GridItem, Text, Box, Stack, Flex } from "@chakra-ui/react"
import 'antd/dist/antd.css';
import '../CSS/App.css'

function WorkExperienceCard(jobDescription, key) {
    return (
        <GridItem rowSpan={{ base: 2, sm: 2 }} colSpan={{ base: 18, sm: 14, md: 19, lg: 19, xl: 19 }} mb={{ base: "3vh" }} key={key}>
            <div className="WorkExperienceTextContainer">
                <Flex className="WorkExperienceCard" direction="row">
                    <Box flexBasis="25%">
                        <img src={jobDescription.image} className="WorkExperienceImage" alt="work experience" />
                    </Box>
                    <Stack flexBasis="70%" ml="1.5vw">
                        <a href={jobDescription.link}>
                            <Text className="WorkExperienceTextTitle" fontSize={{ base: "30px", md: "40px", lg: "40px" }} >{jobDescription.title}</Text>
                        </a>
                        <Text className="WorkExperienceTextPosition" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>{jobDescription.jobPosition} - {jobDescription.location}</Text>
                        <Text fontSize={{ base: "17px", md: "20px", lg: "17px" }} className="WorkExperienceCardText">{jobDescription.text}</Text>
                    </Stack>
                </Flex>
            </div>
        </GridItem>
    );
}

export default WorkExperienceCard;