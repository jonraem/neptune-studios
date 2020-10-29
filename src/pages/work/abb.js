import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { get } from 'lodash';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import abbHero from '../../assets/png/abb-hero.png';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import Quote from '../../components/quote';
import Results from '../../components/results';
import Showcase from '../../components/showcase';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['work:abb:imageAndText2', 'work:abb:imageAndText4'];
const greyed = ['work:abb:imageAndText1'];

export default ({ data, ...props }) => {
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const currentShowcase = data.showcase.edges.find(
    edge => edge.node.contentfulid === `work:abb:showcase${showcaseIndex + 1}`
  );
  const currentShowcaseImage = get(currentShowcase, 'node.images[0]');

  const handlePreviousShowcase = () => {
    if (showcaseIndex === 0) {
      setShowcaseIndex(data.showcase.edges.length - 1);
    } else {
      setShowcaseIndex(showcaseIndex - 1);
    }
  };

  const handleNextShowcase = () => {
    if (showcaseIndex === data.showcase.edges.length - 1) {
      setShowcaseIndex(0);
    } else {
      setShowcaseIndex(showcaseIndex + 1);
    }
  };

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
          description={edge.node.description.childContentfulRichText.html}
          imagePath={edge.node.image && edge.node.image.fluid}
          isReversed={reversed.includes(edge.node.contentfulid)}
          hasGreyBackground={greyed.includes(edge.node.contentfulid)}
        />
      );
    } else return null;
  };

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Case ABB</title>
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
        <Showcase
          title={currentShowcase.node.title}
          featureDescriptions={currentShowcase.node.featureDescriptions}
          bgColor="#21B8BF"
          height={
            !!currentShowcaseImage &&
            currentShowcaseImage.file.details.image.height + 240
          }
          handlePreviousShowcase={handlePreviousShowcase}
          handleNextShowcase={handleNextShowcase}
        >
          {!!currentShowcaseImage && (
            <Img
              fluid={currentShowcaseImage.fluid}
              style={{ width: '100%' }}
              imgStyle={{
                width: '75%',
                height: 'unset',
                left: 0,
                right: 0,
                margin: '0 auto',
                objectFit: 'contain',
              }}
            />
          )}
        </Showcase>
        <Quote quote={data.quotation} />
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
          description {
            childContentfulRichText {
              html
            }
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    showcase: allContentfulShowcase(
      filter: { contentfulid: { regex: "/work:abb:showcase/" } }
    ) {
      edges {
        node {
          contentfulid
          title
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              details {
                image {
                  height
                }
              }
            }
          }
        }
      }
    }
    quotation: contentfulQuotation(contentfulid: { eq: "work:abb:quotation" }) {
      quote
    }
    results: contentfulResults(contentfulid: { eq: "work:abb:results" }) {
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
