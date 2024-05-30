import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100%;
  background-color: #F5F5F5; 
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  text-align: center;
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

const Contact = () => {
  return (
    <Wrapper>      
      <ContactContainer>      
        <Title>Contact Me</Title>
        <ContactInfo>
          You can reach out to me via the following platforms:
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
            <IconLink
              href="mailto:kanchana.karunarathna15@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </IconLink>
            <IconLink
              href="https://wa.me/+94777954886"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </IconLink>
          </IconsContainer>
        </ContactInfo>
      </ContactContainer>
    </Wrapper>
  );
};

export default Contact;
