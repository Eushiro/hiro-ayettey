import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { Steps } from 'antd'
import { Grid, GridItem, Text } from "@chakra-ui/react"
import { ExternalSiteCard } from "../Components/ExternalSiteCard"
import IconDescription from "../Descriptions/IconDescription"
import LinkedInImage from "../images/linkedin.svg"
import { HomeCard } from "../Components/HomeCard"
import 'antd/dist/antd.css';
import '../CSS/App.css'
import MetaTags from "../Components/MetaTags"
import { jobDescriptions } from "../Descriptions/JobDescription"
import WorkExperienceCard from "../Components/WorkExperienceCard"

const { Step } = Steps;

var linkedInDescription = new IconDescription(
    "LinkedIn",
    LinkedInImage,
    "https://www.linkedin.com/in/hiroayettey/"
)

function WorkExperience() {
    var jobCards = []
    var timelineSteps = []
    for (var i = 0; i < jobDescriptions.length; i++) {
        jobCards.push(WorkExperienceCard(jobDescriptions[i], i))
        var step = <Step title={jobDescriptions[i].date} description={jobDescriptions[i].title} status="finish" className="WorkExperienceTimelineItem" />
        timelineSteps.push(step)
    }
    return (
        <ChakraProvider>
            <div className="App">
                {MetaTags("Work Experience", "https://hiroayettey.com/work-experience")}
                <Grid className="WorkExperience" templateColumns="repeat(20, 1fr)" pb="20vh">
                    <GridItem colStart={2} rowStart={1} colSpan={{ base: 0, md: 12 }}>
                        <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="WorkExperienceTitle">
                            Work Experience
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 20 }} className="WorkExperienceTimeline" mb="4vh">
                        <Steps progressDot direction="horizontal" size="default">
                            {timelineSteps}
                        </Steps>
                    </GridItem>
                    {jobCards.reverse()}
                </Grid>
                {ExternalSiteCard(linkedInDescription)}
                {HomeCard()}
            </div>
        </ChakraProvider >
    );
}

export default WorkExperience;