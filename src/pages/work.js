import React from 'react';
import { graphql } from 'gatsby';
import caseHero from '../assets/png/case-hero.png';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './pages.module.css';

export default ({ data, ...props }) => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.workHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>{data.hero.subtitle}</div>
          <h1>{data.hero.title}</h1>
        </div>
        <div
          className={styles.heroDescription}
          dangerouslySetInnerHTML={{
            __html: data.hero.description.childContentfulRichText.html,
          }}
        />
      </div>
      <img
        className={styles.workHeroImage}
        src={caseHero}
        alt="Phone with Väppi application"
      />
    </div>
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
