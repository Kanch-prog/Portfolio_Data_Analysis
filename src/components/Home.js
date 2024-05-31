import React from 'react';
import styled from 'styled-components';
import ParticlesComponent from './particles';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100%;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  z-index: 1;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  text-align: center;
  z-index: 1;
`;

const ParticlesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const IntroContainer = styled.div`
  width: 100%;
  background-color: white; 
  z-index: 1;    
`;

const PortfolioContainer = styled.div`
  width: 100%;    
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin: 0;
  z-index: 1;  
`;

const ContactContainer = styled.div`
  width: 100%;    
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;  
  z-index: 1
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: inherit;
  font-size: 2em;
  transition: color 0.3s;

  &:hover {
    color: #0073b1; 
  }

  &.github:hover {
    color: #333; 
  }
`;

const Home = () => { 
  return (
    <Wrapper>      
      <HomeContainer>      
        <ParticlesWrapper>
          <ParticlesComponent id="particles" />
        </ParticlesWrapper>
        <Name>Kanchana <img 
            src={`${process.env.PUBLIC_URL}/img/Home_single_big.png`}
            alt="Logo" 
            style={{ 
              display: 'inline', 
              marginBottom: '-20px',
              marginRight: '10px', 
              marginLeft: '10px' 
            }} 
            width="80px" 
          /> Karunarathna</Name>
        <Introduction>
          Welcome to Kanchana Karunarathna's homepage. <br />
          <IconsContainer>
            <IconLink
              href="https://github.com/Kanch-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FaGithub />
            </IconLink>
            <IconLink
              href="https://linkedin.com/in/kanchana-karunarathna-308844b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </IconLink>
          </IconsContainer>
           Switching careers into the data analysis industry, where I can apply my analytical skills in new and impactful ways.
        </Introduction>
      </HomeContainer>

      <IntroContainer>
        <Intro />
      </IntroContainer>

      <PortfolioContainer>
        <Portfolio />
      </PortfolioContainer>

      <ContactContainer>
        <Contact />
      </ContactContainer>
    </Wrapper>
  );
};

export default Home;
