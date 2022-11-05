import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Chats from "./Components/Chats";
import { GlobalStyle } from "./GlobalStyles";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import Register from "./Screens/Register";
import Settings from "./Screens/Settings";

const App = () =>
{

    const theme = {
        colors : {
            green : "#06283D",
            lightGreen : "#256D85",
            light : "#f3f3f3",
            chatReceiver : "#3989bb",
            sidebarBottom : "#064064"
        },
        media : {
            mobile : "480px",
            tablet : "768px",
            laptop : "1023px",
            desktop : '1200px',
            exlg : "1201px"
        }
    }

   return (
    <ThemeProvider theme = {theme}>
        <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={ <PrivateRoutes><Dashboard /></PrivateRoutes> } />
                    <Route path="/profile" element={ <PrivateRoutes><Profile /></PrivateRoutes> } />
                    <Route path="/settings" element={ <PrivateRoutes><Settings /></PrivateRoutes> } />
                    <Route path="/chats/:id" element={ <PrivateRoutes><Chats /></PrivateRoutes>} />
                    <Route path="/login" element={ <PublicRoutes><Login /></PublicRoutes> } />
                    <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes> } />
                </Routes>
        </BrowserRouter>
    </ThemeProvider>

   )
}

export default App;
