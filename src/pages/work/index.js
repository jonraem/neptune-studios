import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import caseHero from '../../assets/png/case-hero.png';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import { getSortedCases } from '../../utils/helpers';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['case:vare', 'case:macgregor'];
const sortOrder = ['case:vare', 'case:abb', 'case:macgregor', 'case:various'];

export default ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neptune Studios | Work</title>
      <link rel="canonical" href="https://neptunestudios.com/work" />
    </Helmet>
    <Header currentPath={props.path} />
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
    <div className={pagesStyles.content}>
      <div className={styles.workCases}>
        {getSortedCases(data.allContentfulCase.edges, sortOrder).map(edge => {
          return (
            <ImageAndText
              key={edge.node.contentfulid}
              title={edge.node.title}
              description={edge.node.description.description}
              linkTo={edge.node.URL}
              imagePath={edge.node.image && edge.node.image.fluid}
              imageSideStyle={
                edge.node.contentfulid === 'case:various'
                  ? {
                      justifyContent: 'flex-end',
                    }
                  : undefined
              }
              isReversed={reversed.includes(edge.node.contentfulid)}
              hasGreyBackground={!reversed.includes(edge.node.contentfulid)}
            />
          );
        })}
      </div>
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
