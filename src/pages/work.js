import React from 'react';
import { graphql } from 'gatsby';
import caseHero from '../assets/png/case-hero.png';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Header from '../components/header';
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
    <Footer />
  </div>
);

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "work:hero" }) {
      title
      subtitle
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
