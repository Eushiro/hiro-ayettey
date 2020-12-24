import React from 'react';
import { GridItem, Text, Stack, Flex, Box } from "@chakra-ui/react"
import 'antd/dist/antd.css';
import '../CSS/App.css'

function WorkExperienceCard(jobDescription, key) {
    return (
        <GridItem rowSpan={{ base: 2, sm: 2 }} colSpan={{ base: 18, sm: 14, md: 19, lg: 19, xl: 19 }} mb={{ base: "3vh" }} key={key}>
            <a href={jobDescription.link}>
                <div className="WorkExperienceTextContainer">
                    <Flex className="WorkExperienceCard" direction="row">
                        <Box flexBasis="25%" className="WorkExperienceImageWrapper">
                            <img src={jobDescription.image} className="WorkExperienceImage" alt="work experience" />
                        </Box>
                        <Stack flexBasis={{ base: "100%", sm: "70%" }} ml={{ md: "1.5vw" }} p={{ base: "2vh", sm: "0vh" }}>
                            <Text className="WorkExperienceTextTitle" fontSize={{ base: "30px", md: "40px", lg: "40px" }} >{jobDescription.title}</Text>
                            <Text className="WorkExperienceTextPosition" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>{jobDescription.jobPosition} - {jobDescription.location}</Text>
                            <Text fontSize={{ base: "17px", md: "20px", lg: "20px" }} className="WorkExperienceCardText">{jobDescription.text}</Text>
                        </Stack>
                    </Flex>
                </div>
            </a>
        </GridItem>
    );
}

export default WorkExperienceCard;