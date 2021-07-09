import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        box-sizing: border-box;
    }   

    html,
    body,
    #root {
        height: 100vh;
        width: 100%;
    }

    #root {
        display: flex;
        background: #1A1C2C;
    }

`

export const defaultTheme = {
    // Colors:
    accentColor: '#ED4A5F',
    accentColorDark: '#db374c',
    accentColorLight: '#F06173',
    octoGreen: '#12dea9',
    octoBlue: '#00ECFF',
    octoGradientColor: 'linear-gradient(90deg, rgba(3,2,14,1) 1%, rgba(25,20,186,0.8239670868347339) 41%, rgba(18,222,169,1) 82%);',

    // Background-colors:
    
    backgroundLigthNavy: "#292d3dd3",
    backgroundDarkNavy: "#1A1C2C",

    // BorderRadius
    borderRadius: "6px",

    // Box Shadows:
    boxShadowDark: `-5px 6px 15px 1px rgba(0,0,0,0.50)`,
    boxShadowLight: `-5px 6px 15px 1px rgba(0,0,0,0.25)`,
    boxShadowLighter: `-5px 6px 15px 1px rgba(0,0,0,0.15)`,
    boxShadowNav: `2px 0 24px 0 rgba(0,0,0,0.04)`,
    boxShadowTiles: `0 2px 24px 0 rgba(0,0,0,0.04)`,
    boxShadowInTiles: `0 1px 3px 0 rgba(0,0,0,0.2)`,

    // Sizes
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Text Size
    textSizeXXL: '32px',
    textSizeXL: '24px',
    textSizeMotionTitle: '22px',
    textSizeL: '20px',
    textSizeM: '15px',
    textSizeDefault: "16px",
    textSizeS: '12px',

    // Text Weight
    textWeightThin: '300',
    textWeightRegular: '400',
    textWeightMedium: '500',
    textWeightBold: '700'

}
