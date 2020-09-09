import React from 'react';
import { graphql } from 'gatsby';
import caseHero from '../assets/png/case-hero.png';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Header from '../components/header';
import ImageAndText from '../components/imageAndText';
import styles from './pages.module.css';

export default ({ data, ...props }) => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <Hero
      for="work"
      heroStyles={styles.workHero}
      heroImage={
        <img
          className={styles.workHeroImage}
          src={caseHero}
          alt="Phone with Väppi application"
        />
      }
    />
    <div className={styles.workCases}>
      {data.allContentfulCase.edges.reverse().map(edge => {
        return (
          <ImageAndText
            key={edge.node.contentfulid}
            title={edge.node.title}
            description={edge.node.description}
            linkTo={edge.node.URL}
          />
        );
      })}
    </div>
    <Footer />
  </div>
);

export const query = graphql`
  query {
    allContentfulCase {
      edges {
        node {
          contentfulid
          title
          subtitle
          description {
            description
          }
          URL
        }
      }
    }
  }
`;
