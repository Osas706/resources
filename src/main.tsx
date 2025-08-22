import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react/extend-theme";
import { StrictMode } from "react";

const theme = extendTheme({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} >
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
