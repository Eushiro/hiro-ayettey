import React from 'react';
import '../CSS/App.css';
import { ChakraProvider } from "@chakra-ui/react"
import profilePicture from '../images/profile.jpg'
import { Flex, Text } from "@chakra-ui/react"
import { IconCard } from '../Components/IconCard';
import { aboutDescriptions } from "../Descriptions/IconDescription"
import MetaTags from "../Components/MetaTags"

function Home() {
  var iconCards = []
  for (var i = 0; i < aboutDescriptions.length; i++) {
    iconCards.push(IconCard(aboutDescriptions[i], i))
  }
  return (
    <ChakraProvider>
      <div className="App">
        {MetaTags("Home")}
        <Flex h="97vh" direction="column" className="About" alignItems="center">
          <Text fontSize={{ base: "50px", md: "70px", lg: "73px" }} className="AboutTitle">
            Hiro Ayettey
            </Text>
          <img src={profilePicture} className="AboutPhoto" alt="Hiro Ayettey" />
          <Text fontSize={{ base: "20px", md: "28px" }} className="AboutDescription">
            Hi I'm Hiro, a Software Engineering student at the University of Waterloo
          </Text>
          <Flex w="97vw" direction="row" justify="space-evenly" flexWrap="wrap">
            {iconCards}
          </Flex>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default Home
