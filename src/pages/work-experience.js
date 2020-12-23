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
import resumesvg from '../images/resume.svg'

const { Step } = Steps;

var linkedInDescription = new IconDescription(
    "LinkedIn",
    LinkedInImage,
    "https://www.linkedin.com/in/hiroayettey/"
)

function WorkExperience() {
    return (
        <ChakraProvider>
            <div className="App">
                <Grid h="97vh" className="WorkExperience" templateRows="repeat(15, 1fr)" templateColumns="repeat(20, 1fr)" flexWrap="wrap">
                    <GridItem colStart={2} rowStart={1} colSpan={{ base: 0, md: 12 }}>
                        <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="WorkExperienceTitle">
                            Work Experience
                        </Text>
                    </GridItem>
                    <GridItem rowStart={3} colStart={1} colSpan={{ base: 19, md: 19 }}>
                        <Steps progressDot direction="horizontal" className="WorkExperienceTimeline" size="default">
                            <Step title="May-Aug 2019" description="Threads" status="finish" className="WorkExperienceTimelineItem" />
                            <Step title="Jan-Apr 2020" description="TextNow" status="finish" className="WorkExperienceTimelineItem" />
                            <Step title="Sept-Dec 2020" description="TD Labs" status="finish" className="WorkExperienceTimelineItem" />
                        </Steps>
                    </GridItem>
                    {/* <GridItem rowStart={2} colStart={4}>
                    <img src={resumesvg} style={{ width: "20vh", height: "20vh" }} />
                </GridItem> */}
                </Grid>
                {ExternalSiteCard(linkedInDescription)}
                {HomeCard()}
            </div>
        </ChakraProvider >
    );
}

export default WorkExperience;