import { createGlobalStyle, ThemeProvider, css} from "styled-components"
//import {themes} from './Themes';
// import theme from 'styled-theming';




const GlobalStyle = createGlobalStyle`

  body {
    
    width:  100%;
    height: 100%;
    background-size: 100% 100%;
    background: ${props  => props.theme.themes ? `url(${props.theme.themes.backgroundImage})no-repeat` : "none" };
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: ${props  => props.theme.themes ? props.theme.themes.textColor : "#000000" };
    min-height: 100vh;
    min-width: 100vw;
  }
  .timer {
  height: 120vh;
  width: 100vw;
  color: ${props  => props.theme.themes ? props.theme.themes.secondaryColor : "#000000" };
  }
  .a {
  height: 120vh;
  width: 100vw;
  color: ${props  => props.theme.themes ? props.theme.themes.secondaryColor : "#000000" };
}
    

`;



export default GlobalStyle;
