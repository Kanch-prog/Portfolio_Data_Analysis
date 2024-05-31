import React from 'react';
import styled from 'styled-components';

const IntroContainerIn = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: flex-start;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 100px;
  width: 80%;
  background-color: white;
`;

const Image = styled.img`
  width: 300px;
  margin-right: 20px;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-top: 0px;
  margin-left: 50px;
  line-height: 30px;
`;

const HighlightedText = styled.span`
  color: green;
  font-weight: bold;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: flex-start;
  width: 80%;
  margin: 100px;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  margin-top: 0px;
  position: relative;
`;

const Line = styled.div`
  width: 280px;
  height: 2px;
  background-color: green;
  margin-top: 5px;
  margin-left: -5%;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
`;

const Position = styled.p`
  position: absolute;
  top: -50px;
  text-align: center;
  white-space: nowrap; 
  margin-left: 295px;
  color: #808080;
  font-family: var(--font-family-monospace);
`;

const Place = styled.p`
  position: absolute;
  top: 10px;
  text-align: center;
  margin-left: 320px;
  color: #404040;
  font-family: var(--font-family-monospace);
`;

const Year = styled.p`
  margin-top: 10px;
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
`;

const SkillBox = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 10px;
`;

const skillsData = [
  { label: "Programming Languages:", skills: ["Python", "SQL"] },
  { label: "Data Analysis Tools:", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { label: "Web Scraping:", skills: ["BeautifulSoup", "Scrapy", "Requests"] },
  { label: "Web Development:", skills: ["Flask", "HTML", "CSS", "Bootstrap"] },
  { label: "Data Visualization:", skills: ["Plotly", "D3.js"] },
  { label: "Machine Learning:", skills: ["Scikit-learn (basic knowledge)"] }
];


const Intro = () => {
  return (
    <>
      <IntroContainerIn>
        <Image src="{`${process.env.PUBLIC_URL}/img/me.png`}" alt="Profile" />
        <TextContainer>
          <p><strong>Hi, I'm Kanchana.</strong></p>
          <p>currently a dedicated math teacher with a passion for numbers and problem-solving. Over the past few years, I've been fostering a love for mathematics in my students, helping them develop critical thinking skills and a deep understanding of mathematical concepts. While teaching has been incredibly rewarding, I'm excited to transition into the data analysis industry, where I can apply my analytical skills in new and impactful ways.</p>
          <p><HighlightedText>Current Role:</HighlightedText> Math Teacher, Previously worked as an Associate Operations</p>
          <p><HighlightedText>Education:</HighlightedText> Bachelor's Degree in Science and Reading for Master in Information Technology.</p>
          <p><HighlightedText>Skills and Technologies:</HighlightedText>
          <SkillsList>
            {skillsData.map((item, index) => (
              <SkillItem key={index}>
                <b>{item.label}</b> {item.skills.map((skill, idx) => (
                  <SkillBox key={idx} color={`rgba(0, 128, 0, ${0.5 + idx * 0.1})`}>{skill}</SkillBox>
                ))}
              </SkillItem>
            ))}
          </SkillsList>
          </p>
        </TextContainer>
      </IntroContainerIn>
      <TimelineContainer>
        <TimelineItem>
          <Position>Internship</Position>
          <Circle />
          <Place style={{ whiteSpace: 'nowrap' }}>Bank of Ceylon</Place>
          <Year>2014</Year>
        </TimelineItem>
        <Line />
        <TimelineItem>
          <Position>Associate Operations</Position>
          <Circle />
          <Place style={{ whiteSpace: 'nowrap' }}>Shipxrpess, A GE Company</Place>
          <Year>2015</Year>
        </TimelineItem>
        <Line />
        <TimelineItem>
          <Position>Teacher</Position>
          <Circle />
          <Place>
            <p style={{ whiteSpace: 'nowrap' }}>Asian Internationl School</p>
            <p style={{ whiteSpace: 'nowrap' }}>Alethea International Schools</p>
            <p style={{ whiteSpace: 'nowrap' }}>Telford International School</p>
            <p style={{ whiteSpace: 'nowrap' }}>Third Space Global</p>
          </Place>
          <Year>2018</Year>
        </TimelineItem>
        <Line />          
      </TimelineContainer>
    </>
  );
};

export default Intro;
