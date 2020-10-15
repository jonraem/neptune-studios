import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import abbHero from '../../assets/png/abb-hero.png';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import Results from '../../components/results';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['work:abb:imageAndText1', 'work:abb:imageAndText3'];

export default ({ data, ...props }) => {
  const renderImageAndText = edge => {
    if (
      edge &&
      edge.node &&
      edge.node.contentfulid &&
      edge.node.title &&
      edge.node.description &&
      edge.node.image
    ) {
      return (
        <ImageAndText
          key={edge.node.contentfulid}
          title={edge.node.title}
          description={edge.node.description}
          imagePath={edge.node.image && edge.node.image.fluid}
          isReversed={reversed.includes(edge.node.contentfulid)}
        />
      );
    } else return null;
  };

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Case Väre</title>
        <link rel="canonical" href="https://neptunestudios.com/work/abb" />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        for="work:abb"
        heroStyles={styles.abbHero}
        heroImage={
          <img
            className={styles.abbHeroImage}
            src={abbHero}
            alt="Tablets with ABB application"
          />
        }
      />
      <div className={pagesStyles.content}>
        <div className={styles.abbFeatures}>
          {data.tripleFeature.feature.map((feature, index) => (
            <Feature
              key={`${feature.title}:${index}`}
              svgPath={feature.svgImage.file.url}
              title={feature.title}
              subtitle={feature.subtitle}
              paragraph={feature.description.description}
            />
          ))}
        </div>
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:abb:imageAndText1'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:abb:imageAndText2'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:abb:imageAndText3'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:abb:imageAndText4'
          )
        )}
        <Results results={data.results} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query {
    tripleFeature: contentfulTripleFeature(
      contentfulid: { eq: "work:abb:triplefeature" }
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
    imageAndText: allContentfulImageAndText(
      filter: { contentfulid: { regex: "/work:abb:imageAndText/" } }
    ) {
      edges {
        node {
          contentfulid
          title
          description
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    results: contentfulResults(contentfulid: { eq: "work:abb:results" }) {
      quote
      title
      description {
        childContentfulRichText {
          html
        }
      }
      title2
      description2
      title3
      description3
      title4
      description4
    }
  }
`;
