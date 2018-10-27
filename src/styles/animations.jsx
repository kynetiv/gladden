/* global tw */
import styled, { keyframes, css } from 'react-emotion';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const mapleColor = keyframes`
  0% {
    fill: url(#MyGradient);
  }
  50% {
    fill: url(#MyGradient2);
  } 
    100% {
    fill: url(#MyGradient3);
  }
`;

export const mapleFill = css`
  animation: ${mapleColor} 5s linear infinite alternate;
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

export const UpDown = styled.div`
  animation: ${upDownAnimation} 4s ease-in-out infinite alternate;
  ${tw('pin absolute')};
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation} 18s ease-in-out infinite alternate;
  ${tw('pin absolute')};
`;

export const waveAnimation = css`
  animation: ${wave} 40s linear infinite alternate;
`;

const fallingKeyframe = keyframes`
    
    0% {
        transform: translate3d(0,-1000px,0) rotate(0deg);
        fill: url(#MyGradient);
    }
    
    100% {
        transform: translate3d(-350px,1000px,0) rotate(90deg);
       
    }
}
`;

export const FallingAnimation = styled.div`
  animation: ${fallingKeyframe} 40s linear infinite alternate;
  ${tw('pin absolute')};
`;

const falling2Keyframe = keyframes`
    0% {
        transform: translate3d(0,-500px,0) rotate(-20deg);
    }
    
    100% {
        transform: translate3d(-230px,1000px,0) rotate(-70deg);
    }
`;

export const FallingAnimation2 = styled.div`
  animation: ${falling2Keyframe} 18s linear infinite;
  ${tw('pin absolute')};
`;



const heartPulse = keyframes`
{
    0% {  
      transform: scale(0.7); 
    }
    50% { 
     transform: scale(0.8); 
    }
    100% {
     transform: scale(0.7); 
    }
}
`;

export const heart = css `
position: relative;
`;

export const heartAnimation = css`
position: absolute;
animation: ${heartPulse} 2s ease infinite;
transform-origin: center center;

`;