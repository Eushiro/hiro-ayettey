import React from 'react';
import '../CSS/App.css';
import About from "./Components/About";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <About />
      </div>
    </ChakraProvider>
  );
}
export default App
