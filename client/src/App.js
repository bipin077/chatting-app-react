import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Chats from "./Components/Chats";
import { GlobalStyle } from "./GlobalStyles";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

const App = () =>
{

    const theme = {
        colors : {
            green : "#06283D",
            lightGreen : "#256D85",
            light : "#f3f3f3",
            chatReceiver : "#3989bb"
        }
    }

   return (
    <ThemeProvider theme = {theme}>
        <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={ <Chats /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={<Register /> } />
                </Routes>
        </BrowserRouter>
    </ThemeProvider>

   )
}

export default App;
