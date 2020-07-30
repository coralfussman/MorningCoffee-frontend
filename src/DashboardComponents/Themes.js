import React from 'react';
import styled, { css, keyframes, ThemeProvider } from "styled-components";
// import theme from 'styled-theming';


// export const themes = theme('mode', 'variant', {
export const themes = {
    coffee: {
      primaryColor: "#E5E5E5",
      accentColor: "#EAC0A2",
      backgroundColor: "#F9F9F9",
      textColor: "#51463A",
      secondaryColor: "#51463A",
     
    },
    acqua: {
      primaryColor: "rgb(229, 229, 229, .5)",
      accentColor: "#1B8C81",
      backgroundColor: "#458622",
      textColor: "#1B8C81",
      secondaryColor: "#1B8C81"
    },
    coral: {
      primaryColor: "#E5E5E5",
      accentColor: "rgb(148, 228, 201)",
      backgroundColor: "#EA5358",
      textColor: "#B9667F",
      secondaryColor: "#B9667F",
      backgroundImage: 'https://i.pinimg.com/originals/fe/e4/c6/fee4c620ea682072d3e5f8cb777110bb.jpg'

    },
    darkmode: {
      primaryColor: "rgb(229, 229, 229, .3)",
      accentColor: "rgb(229, 229, 229, .5)",
      backgroundColor: "rgb(36, 36, 36)",
      textColor: "#51463A",
      secondaryColor: "rgb(229, 229, 229, .5)",
      backgroundImage: "http://www.seekgif.com/uploads/2017/05/dark-background-wallpaper-by-hoaphuc-revelwallpapers--2.jpeg"


    }, 
    abstract: {
      primaryColor: 'rgb(229, 229, 229, .8)',
      accentColor: "rgb(216, 142, 93)",
      backgroundColor: "#F9F9F9",
      textColor: "#51463A",
      secondaryColor: "#51463A",
      backgroundImage: 'http://www.seekgif.com/uploads/vintage-wooden-background-8.jpeg'

    },
    summer: {
      primaryColor: "rgb(229, 229, 229, .5)",
      accentColor: "#458622",
      backgroundColor: "#EA5358",
      textColor: "#000000",
      secondaryColor: "#458622",
      backgroundImage: 'https://c.stocksy.com/a/PqU200/z9/595225.jpg'
    },
    lemon: {
      primaryColor: "rgb(255, 255, 255, .8)",
      accentColor: "rgb(109, 134, 76)",
      backgroundColor: "#EA5358",
      textColor: "#000000",
      secondaryColor: "#FFFFFF",
      backgroundImage: 'https://salesandservicetireandsuspension.com/wp-content/uploads/parser/lemon-wallpapers-1.jpg'
    }
}
  

export const InvertedFont = styled.h3`
  
  color: ${props => props.theme.themes.secondaryColor}
  `

export const SVG = styled.img`
  
  body: ${props => props.theme.themes.secondaryColor}
`

export const ThemePanel = styled.div`

  height: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.themes.secondaryColor}
`
export const SVGPanel = styled.div`

  margin: 0px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 90%;
  justify-content: center;
  border-radius: 0px 50px 50px 0px;
  align-items: center;
  box-shadow: 5px 5px 15px 5px rgb(207, 207, 207, .3);
  overflow: auto;
  background: ${props => props.theme.themes.primaryColor}
`


  export const Button = styled.button`
    border-radius: 8px 8px 8px 8px;
    border-width: 0ch;
    border-color: rgb(180, 180, 180);
    font-family: Jost;
    font-size: 20px;
    color: rgb(92, 92, 92);
    margin-bottom: 20px;
    background: ${props => props.theme.themes.primaryColor}
  `
  export const ExButton = styled.button`
  height: 25px;
  width: 25px;
  background: #EAC0A2;
 
  border-radius: 50%;
  border-width: 0ch;
  margin: -5px;
  padding: 0px;
  border-color: rgb(180, 180, 180);
  font-family: Jost;
  font-size: 20px;
  color: rgb(92, 92, 92);
  margin-bottom: 20px;
  z-index: 3;
  font-size: 12px;
  background: ${props => props.theme.themes.accentColor};
`
export const MediaPanel = styled.div`

margin-left: 50px;
  display: flex;
  flex-direction: column;
  background: rgb(229, 229, 229);
  
  height: 70%;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50px 0px 0px 50px;
  box-shadow: 5px 5px 15px 5px rgb(192, 192, 192);
  background: ${props => props.theme.themes.primaryColor}
`
/* background: ${props => props.themes.primaryColor}; */
export const WidgeDash = styled.div`

display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30vh;
  width: 70vw;
  background: rgb(240, 239, 239);
  padding: 10px;
  margin: 10px;
  margin-bottom: 10px;
  background: ${props => props.theme.themes.primaryColor}
`
export const SearchBar = styled.input`
align-items: left;
  height: 30px;
  width: 200px;
  margin: 20px;
  float: left;
  z-index: 1;
  border: 0;
  font-size: 15px;
  font-weight: 500;
  border-style: solid; 
  background-color: rgb(255, 255, 255, .7);
  border-bottom-width: 4px;
  border-color: ${props => props.theme.themes.accentColor};
  

`

export const NewsCards = styled.div`
font-size: 16px;
  font-weight: 300;
  margin: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(240, 239, 239, .9);
 
  height: 300px;
  width: 300px;
  box-shadow: 5px 5px 15px 5px rgb(192, 192, 192);
  justify-content: space-evenly;
  
  `
  /* ${props => props.selected ? 'transform: translateX(5%);' : null} */
 /* background: ${props => props.themes.primaryColor}; */

//  export default {themes};

// const Theme = ({ children }) => (
//   <ThemeProvider theme={themes}>{children}</ThemeProvider>
// );

// export default Theme;