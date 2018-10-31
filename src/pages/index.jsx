/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation, mapleFill, FallingAnimation, FallingAnimation2, heart } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import mapleLeaf from '../images/mapleLeaf.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
  transform-style: preserve-3d;
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl lg:w-full font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 30px rgba(0, 0, 0, 1);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${mapleLeaf});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    ${tw('text-teal')};
    font-style: italic;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="mapleLeaf" width={50} stroke={colors.orange} left="0%" top="20%" fill={"#e2d661"}/>
          <SVG icon="hexa" width={58} left="60%" top="70%" fill={"#aee261"} stroke={"#b28cea"}   />
          <SVG icon="box" width={26} stroke={"#4ba2de"}  fill={"#b28cea"} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          {/*<SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />*/}
          <SVG icon="mapleLeaf" width={12} stroke={colors.orange} fill={"#e2d661"} left="90%" top="50%" />
          {/*<SVG icon="circle" width={16} fill={colors['grey-darkest']} left="70%" top="90%" />*/}
          <SVG icon="mapleLeaf" width={16} stroke={colors.orange} fill={"#e2d661"} left="30%" top="65%" />
          {/*<SVG icon="circle" width={6} fill={colors['grey-darkest']}left="75%" top="10%" />*/}
          {/*<SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />*/}
        </UpDownWide>
        {/*<SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />*/}
        {/*<SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />*/}
        {/*<SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />*/}
        {/*<SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />*/}
        {/*<SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />*/}
        {/*<SVG icon="mapleLeaf" width={8} stroke={colors['grey-darker']} fill={"#aa4400"} left="25%" top="5%" />*/}
        {/*<SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />*/}
        {/*<SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />*/}
        {/*<SVG icon="box" width={16} fill={colors.purple} left="10%" top="10%" />*/}
        {/*<SVG icon="box" width={12} fill={colors.purple} left="40%" top="30%" />*/}
        <SVG icon="hexa" width={16} stroke={colors.teal} left="10%" top="50%" />
        {/*<SVG icon="hexa" width={18} stroke={colors.teal} left="80%" top="70%" />*/}
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hey, <br /> I'm Gladden.
          </BigTitle>
          <Subtitle>I'm new.</Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, #415680 0%,  #3c3c3c 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Pics</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Newborn"
              link="/newborn"
              bg="linear-gradient(to right, #aee261 0%, #d3c8be 100%)"
              children=""
            >
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        {/*<UpDown>*/}
          {/*<SVG icon="box" width={6} fill={colors.purple} left="85%" top="75%" />*/}
          {/*<SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />*/}
          {/*<SVG icon="mapleLeaf" width={8} stroke={colors.white} fill={"#aa4400"} left="25%" top="5%" />*/}
          {/*<SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />*/}
        {/*</UpDown>*/}
        {/*<UpDownWide>*/}
          {/*<SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />*/}
          {/*<SVG icon="mapleLeaf" width={12} stroke={colors.white} fill={"#aa4400"} left="90%" top="30%" />*/}
          {/*<SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />*/}
          {/*<SVG icon="mapleLeaf" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />*/}
          {/*<SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />*/}
          {/*<SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />*/}
        {/*</UpDownWide>*/}
        {/*<FallingAnimation>*/}
          {/*/!*<SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />*!/*/}
          {/*<SVG icon="mapleLeaf" fill={"#aa4400"}  width={12} stroke={colors.white} left="40%" top="0%" />*/}
          {/*/!*<SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />*!/*/}
          {/*<SVG icon="hexa" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />*/}
          {/*/!*<SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />*!/*/}
          {/*/!*<SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />*!/*/}
        {/*</FallingAnimation>*/}
        {/*<FallingAnimation2>*/}
            {/*/!*<SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />*!/*/}
          {/*<SVG icon="mapleLeaf" fill={"#aa4400"}  width={12} stroke={colors.white} left="40%" top="0%" />*/}
            {/*/!*<SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />*!/*/}
          {/*<SVG icon="hexa" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />*/}
            {/*/!*<SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />*!/*/}
            {/*/!*<SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />*!/*/}
        {/*</FallingAnimation2>*/}
        {/*<SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />*/}
        {/*<SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />*/}
        {/*<SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />*/}
        {/*<SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />*/}
        {/*<SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />*/}
        {/*<SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />*/}
      </Divider>
      <Divider  bg="linear-gradient(to right, #3c3c3c 0%, #aee261 100%)" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        {/*<UpDown>*/}
          {/*<SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />*/}
          {/*<SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />*/}
          {/*<SVG icon="mapleLeaf" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />*/}
          {/*<SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />*/}
        {/*</UpDown>*/}
        {/*<UpDownWide>*/}
          {/*<SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />*/}
          {/*<SVG icon="mapleLeaf" width={12} stroke={colors.white} left="95%" top="50%" />*/}
          {/*<SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />*/}
          {/*<SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />*/}
        {/*</UpDownWide>*/}
        {/*<SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />*/}
        {/*<SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />*/}
        {/*<SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />*/}
        {/*<SVG icon="box" width={12} fill={colors.purple} left="20%" top="30%" />*/}
        {/*<SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />*/}
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          {/*<AboutHero>*/}
            {/*<Avatar src={avatar} alt="John Doe" />*/}
            {/*<AboutSub>*/}
              {/*The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating*/}
              {/*Emoji into my speech to better express myself. Winky face.*/}
            {/*</AboutSub>*/}
          {/*</AboutHero>*/}
          {/*<AboutDesc>*/}
            {/*You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel*/}
            {/*every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should*/}
            {/*make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The*/}
            {/*kids want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that*/}
            {/*all right?*/}
          {/*</AboutDesc>*/}
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:mfinkca@gmail.com">Hello</a> to my mom and pop :)
          </ContactText>
        </Inner>
        <Footer>
          Made with <SVG icon="heart" fill="#e00079" left="inherit" top="10px" className={heart}/> for Gladden Fink.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        {/*// <UpDown>*/}
        {/*//   <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />*/}
        {/*//   <SVG icon="mapleLeaf" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />*/}
        {/*</UpDown>*/}
        {/*<UpDownWide>*/}
          {/*<SVG icon="mapleLeaf" width={12} stroke={colors.white} left="95%" top="50%" />*/}
          {/*<SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />*/}
          {/*<SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />*/}
        {/*</UpDownWide>*/}
        {/*<SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />*/}
        {/*<SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />*/}
        {/*<SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />*/}
        {/*<SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />*/}
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
