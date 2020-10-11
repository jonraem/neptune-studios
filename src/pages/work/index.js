import { graphql } from 'gatsby';
import React from 'react';
import caseHero from '../../assets/png/case-hero.png';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['case:vare', 'case:macgregor'];

export default ({ data, ...props }) => (
  <div className={pagesStyles.page}>
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
            imagePath={edge.node.image && edge.node.image.fluid}
            isReversed={reversed.includes(edge.node.contentfulid)}
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
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
