import { graphql } from 'gatsby';
import React from 'react';
import vareHero from '../../assets/png/vare-hero.png';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

export default ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Header currentPath={props.location.pathname} />
    <Hero
      for="work:vare"
      heroStyles={styles.vareHero}
      heroImage={
        <img
          className={styles.vareHeroImage}
          src={vareHero}
          alt="Phone with Väppi application"
        />
      }
    />
    <Footer />
  </div>
);

export const query = graphql`
  query {
    tripleFeature: contentfulTripleFeature(
      contentfulid: { eq: "work:vappi:triplefeature" }
    ) {
      feature {
        title
        subtitle
        description {
          description
        }
        svgImage {
          file {
            url
          }
        }
      }
    }
    timeline: contentfulTimeline(contentfulid: { eq: "work:vappi:timeline" }) {
      title
      timelineItems {
        id
        title
        description
      }
    }
  }
`;
