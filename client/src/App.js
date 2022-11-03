import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Chats from "./Components/Chats";
import { GlobalStyle } from "./GlobalStyles";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
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
                    <Route path="/" element={ <PrivateRoutes><Dashboard /></PrivateRoutes> } />
                    <Route path="/chats/:id" element={ <PrivateRoutes><Chats /></PrivateRoutes>} />
                    <Route path="/login" element={ <PublicRoutes><Login /></PublicRoutes> } />
                    <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes> } />
                </Routes>
        </BrowserRouter>
    </ThemeProvider>

   )
}

export default App;
