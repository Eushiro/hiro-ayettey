import React from 'react';
import '../CSS/App.css'
import 'antd/dist/antd.css';
import { Steps } from 'antd'
import resumesvg from '../images/resume.svg'
import { Flex, Text, Spacer } from "@chakra-ui/react"

const { Step } = Steps;

function WorkExperience() {
    return (
        <Flex h="97vh" direction="row" className="WorkExperience" justify="flex-start" >
            <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="WorkExperienceTitle" flexBasis="100%">
                Work Experience
            </Text>
            <Steps direction="vertical" progressDot className="WorkExperienceTimeline">
                <Step title="Sept-Dec 2020" description="TD Labs" status="finish" className="WorkExperienceTimelineItem" />
                {/* <img src={resumesvg} /> */}
                <Step title="Jan-Apr 2020" description="TextNow" status="finish" className="WorkExperienceTimelineItem" />
                <Step title="May-Aug 2019" description="Threads" status="finish" className="WorkExperienceTimelineItem" />
            </Steps>
        </Flex>
    )
}

export default WorkExperience;