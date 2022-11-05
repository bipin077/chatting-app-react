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




`