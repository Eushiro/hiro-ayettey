import React from 'react';
import profilePicture from '../../images/profile.jpg'
import { Flex, Text } from "@chakra-ui/react"
import '../../CSS/App.css'
import IconCard from './IconCard';
import aboutDescriptions from "../../Descriptions/IconDescription"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function About() {
    var data = useStaticQuery(query)
    var iconCards = []
    for (var i = 0; i < aboutDescriptions.length; i++) {
        iconCards.push(IconCard(aboutDescriptions[i], i))
    }
    return (
        <Flex h="97vh" direction="column" className="About" alignItems="center">
            <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="AboutTitle">
                Hiro Ayettey
            </Text>
            <img src={profilePicture} className="AboutPhoto" alt="Hiro Ayettey" />
            <Img fluid={data.file.childImageSharp.fluid} />
            <Text fontSize={{ base: "20px", md: "28px" }} className="AboutDescription">
                Hi I'm Hiro, a Software Engineering student at the University of Waterloo
            </Text>
            <Flex w="97vw" direction="row" justify="space-evenly" flexWrap="wrap">
                {iconCards}
            </Flex>
        </Flex>
    );
}

export default About;