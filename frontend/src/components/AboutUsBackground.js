import styled, {keyframes, css} from "styled-components";

const random = (min, max) => {
  return Math.floor(Math.random()*(max - min + 1) + min)
}

const randomT = (min, max) => {
  return Math.floor(Math.random()*(max - min + 1) + min)+"s"
}

const move = keyframes`
  from {bottom: -100px}
  to { bottom: ${random(0, 100)}vh;
      transform: translate(${random(-100, 200)}px, 0);
      opacity:0;}
`
const animation = props => `
  ${move} 2s infinite; 
`
const BubbleCreate = () => {
  for (let i= 0; i<50; i++) {
    const bgpos = i % 2 === 0 ? "top right" : "center"
    console.log (`
   
    &:nth-child({${i}}) {
      background: radial-gradient(ellipse at ${bgpos}, #b8c6c6 0%,#30b3d3 46%,#20628c 100%);
      width: ${random(5, 100)}px;
      height: @width;
      left: ${random(1, 100)}vw;
      bottom: ${random(1, 100)}vh;
      animation: ${animation}; 
}
    `)
    return `
   
    &:nth-child({${i}}) {
      background: radial-gradient(ellipse at ${bgpos}, #b8c6c6 0%,#30b3d3 46%,#20628c 100%);
      width: ${random(5, 100)}px;
      height: @width;
      left: ${random(1, 100)}vw;
      bottom: ${random(1, 100)}vh;
      animation: ${animation};
}
    `
  }
}

const Background = styled.div `
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #edfffa 0%,#31c5d6 100%);
  position: relative;
  overflow: hidden;
`

const Bubble = styled.img `
  display: block;
  // background: radial-gradient(ellipse at top right, #b8c6c6 0%,#30b3d3 46%,#20628c 100%)
  border-radius: 100%;
  opacity: .8;
  position: absolute;
   ${
    BubbleCreate()
    }
`

const AboutUsBackground = () => {

  return <>
    <Background>
      <Bubble/>
    </Background>
  </>
}
export default AboutUsBackground