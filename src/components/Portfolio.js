import React, { useState } from 'react';
import styled from 'styled-components';

const PortfolioContainerIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-left: 120px;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #0d0d0d;
  font-family: var(--font-family-monospace);
  font-weight: medium; 
  letter-spacing: 2px; 
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  text-align: center;
  font-family: var(--font-family-sans-serif);
  color: grey;
  font-style: italic;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProjectCard = styled.div`
  width: 300px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h2`
  font-size: 1.2em;
  margin: 16px;
  text-align: center;
  font-family: var(--font-family-sans-serif);
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  margin: 0 16px 16px;
  text-align: center;
  font-family: var(--font-family-sans-serif);
  color: grey;
`;

const Modal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 300px; 
  display: block;
  margin: 0 auto 20px;
`;

const Portfolio = () => {
  const [modalData, setModalData] = useState(null);

  const projects = [
    {
      title: 'Descriptive Data Analysis',
      description_card: 'A comprehensive descriptive data analysis, visualized through various charts and histograms using Python pandas, numpy, matplotlib, and seaborn libraries',
      description_modal:'A comprehensive descriptive data analysis of superhero characteristics and alignments, visualized through various charts and histograms using Python pandas, numpy, matplotlib, and seaborn libraries.Importing necessary libraries and loading the dataset. Checking for missing values and dropping them.Exploring data types and value counts. Plotting a pie chart to visualize the distribution of superhero alignments.Identifying and visualizing the top ten good-natured superheroes based on their total power.Finding superheroes with the highest attributes like intelligence, strength, speed, durability, power, and combat.Plotting a line chart to display the total strength of the top ten superheroes. Creating histograms to visualize the distribution of each attribute among superheroes, differentiated by their alignment.',
      image_card: '/img/superhero_1.PNG',
      images_modal: '/img/superhero_2.PNG',
      githubLink: 'https://github.com/Kanch-prog/superheroes_analysis/blob/main/Superheroes.ipynb'
    },
    {
      title: 'Time - Series Visualization',
      description_card: 'An analysis of the Google Trends data for three search terms: diet, gym, and finance.',
      description_modal: 'The data is monthly and spans several years, making it a good candidate for time series analysis to understand trends, seasonality, and correlations among these search terms. The key steps and observations in the project are: plotting time series, calculating and plotting rolling average, comparing, rolling averages, first-order differencing, compute and compare correlation and plotting autocorrelation',
      image_card: '/img/time-series_1.png',
      images_modal:'/img/time-series_2.png',
      githubLink: 'https://github.com/Kanch-prog/time_series_visualization/'
    },
    {
      title: 'Descriptive Analysis',
      description_card: 'Product emissions make up more than 75% of global emissions. But which industries are the worst offenders?',
      description_modal: 'Analyzing Industry Carbon Emissions. By using SQL skills to explore a dataset about product carbon emissions. Specific techniques used: Datafiltering, Aggregating,Ranking and Selection.',
      image_card: '/img/co2_1.png',
      images_modal:'/img/co2_1.png',
      githubLink: 'https://github.com/Kanch-prog/Carbon_Emissions/'
    },
    {
      title: 'Exploratory Data Analysis (EDA)',
      description_card: 'A churn analysis and prediction in the telecom industry.',
      description_modal: 'Involves data preprocessing, exploratory data analysis (EDA), predictive modeling, and providing actionable insights based on the findings.',
      image_card: '/img/churn_01.png',
      images_modal:'/img/churn_02.png',
      githubLink: 'https://github.com/Kanch-prog/Customer_Churn'
    },
    {
      title: 'ML-Enhanced Blogging Platform',
      description_card: 'A dynamic and interactive blogging platform built using the Django framework',
      description_modal: 'Allows users to create, manage, and view blog posts, while also providing personalized recommendations based on the content of the posts. The recommendation system uses machine learning techniques such as TF-IDF vectorization and cosine similarity to suggest relevant posts to users based on the content they are currently viewing.',
      image_card: '/img/blog_01.png',
      images_modal:'/img/blog_02.png',
      githubLink: 'https://github.com/Kanch-prog/Blog-App-ML'
    },
    {
      title: 'Web Crawling and Data Extraction',
      description_card: 'How to integrate web scraping with web development to build an end-to-end solution for data extraction and presentation',
      description_modal: 'This project is primarily a Web Crawling and Data Extraction project with a Web Application Interface. It combines elements of web scraping to automate data collection and a Flask web application to display the gathered data. The project involves Web Crawling: Automating the process of accessing and extracting data from a specified website.Data Processing: Structuring and storing the extracted data in a usable format.Web Development: Using Flask to create a web interface to present the collected data.',
      image_card: '/img/crawler_01.PNG',
      images_modal:'/img/crawler_02.PNG',
      githubLink: 'https://github.com/Kanch-prog/Crawler'
    },
  ];

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <PortfolioContainerIn>
      <Title>PORTFOLIO</Title>
      <Description>A glimpse of the projects I've been practicing on</Description>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} onClick={() => openModal(project)}>
            <ProjectImage src={project.image_card} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description_card}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {modalData && (
        <Modal show={!!modalData}>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{modalData.title}</h2>
            <p>{modalData.description_modal.split('. ').map((sentence, index) => (
              <p key={index}>{sentence.trim()}.</p>
            ))}</p>
            <p><ModalImage src={modalData.images_modal} alt={`${modalData.title} modal`} /></p>
            <a href={modalData.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </ModalContent>
        </Modal>
      )}
    </PortfolioContainerIn>
  );
};

export default Portfolio;
