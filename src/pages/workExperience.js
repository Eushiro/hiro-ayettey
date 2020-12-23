import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import '../CSS/App.css'
import WorkExperience from "../Components/WorkExperience"

function workExperience() {
    return (
        <ChakraProvider>
            <div className="App">
                <WorkExperience />
            </div>
        </ChakraProvider>
    );
}

export default workExperience;