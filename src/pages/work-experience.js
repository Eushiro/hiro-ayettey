import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { Steps } from 'antd'
import { Grid, GridItem, Text, HStack, Stack } from "@chakra-ui/react"
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
    for (var i = 0; i < jobDescriptions.length; i++) {
        jobCards.push(WorkExperienceCard(jobDescriptions[i], i))
    }
    return (
        <ChakraProvider>
            <div className="App">
                {MetaTags("Work Experience")}
                <Grid className="WorkExperience" templateColumns="repeat(20, 1fr)" pb="20vh">
                    <GridItem colStart={2} rowStart={1} colSpan={{ base: 0, md: 12 }}>
                        <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="WorkExperienceTitle">
                            Work Experience
                        </Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 19, md: 19 }} mb="4vh">
                        <Steps progressDot direction="horizontal" className="WorkExperienceTimeline" size="default">
                            <Step title="May-Aug 2019" description="Threads" status="finish" className="WorkExperienceTimelineItem" />
                            <Step title="Jan-Apr 2020" description="TextNow" status="finish" className="WorkExperienceTimelineItem" />
                            <Step title="Sept-Dec 2020" description="TD Labs" status="finish" className="WorkExperienceTimelineItem" />
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