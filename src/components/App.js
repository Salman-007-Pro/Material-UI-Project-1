import React from "react";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello World
    </ThemeProvider>
  );
};

export default App;
