import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import theme from "./constants/theme";
import Router from "./routes/Router";


function App() {
  const token = localStorage.getItem("token")
  const [buttonText, setButtonText] = useState(token ? "Logout" : "Login")


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header buttonText={buttonText} setButtonText={setButtonText} />
        <Router buttonText={buttonText} setButtonText={setButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
