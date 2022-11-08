import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin : 0;
    padding : 0;
    border : none;
    outline : none;
    box-sizing : border-box;
    font-family: 'Playfair Display', serif;
    transition : .2s linear all;
}

html {
    font-size : 62.5%;
}

.dgWJve {
    width: 100%;
    overflow-y: scroll;
}

body{
    background : ${({theme})=>theme.colors.light};
}

::-webkit-scrollbar {
    width: 6px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(76 35 35);
    color: red;
    background: #41124b;
}




`