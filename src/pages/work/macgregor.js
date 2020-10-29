import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { get } from 'lodash';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import macgregorHero from '../../assets/png/macgregor-hero.png';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import FullWidthBackground from '../../components/fullWidthBackground';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import Quote from '../../components/quote';
import Results from '../../components/results';
import Showcase from '../../components/showcase';
import Timeline from '../../components/timeline';
import { findQuote } from '../../utils/helpers';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = [
  'work:macgregor:imageAndText2',
  'work:macgregor:imageAndText3',
  'work:macgregor:imageAndText4',
  'work:macgregor:imageAndText6',
];
const greyed = ['work:macgregor:imageAndText3'];

export default ({ data, ...props }) => {
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const currentShowcase = data.showcase.edges.find(
    edge =>
      edge.node.contentfulid === `work:macgregor:showcase${showcaseIndex + 1}`
  );
  const currentShowcaseImages = [
    get(currentShowcase, 'node.images[0]'),
    get(currentShowcase, 'node.images[1]'),
  ].filter(x => !!x);

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
          maxHeight={500}
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
        <title>Neptune Studios | Case MacGregor</title>
        <link
          rel="canonical"
          href="https://neptunestudios.com/work/macgregor"
        />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        for="work:macgregor"
        heroStyles={styles.macgregorHero}
        heroImage={
          <img
            className={styles.macgregorHeroImage}
            src={macgregorHero}
            alt="Phone with MacGregor application"
          />
        }
      />
      <div className={pagesStyles.content}>
        <div className={styles.macgregorFeatures}>
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
        <Timeline
          title={data.timeline.title}
          timelineItems={data.timeline.timelineItems}
        />
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:macgregor:imageAndText1'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:macgregor:imageAndText2'
          )
        )}
        <Quote quote={findQuote(data, 'work:macgregor:quotation1')} />
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:macgregor:imageAndText3'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:macgregor:imageAndText4'
          )
        )}
        <FullWidthBackground
          imagePath={
            data.fullWidthBackground.image &&
            data.fullWidthBackground.image.fluid
          }
          height={'54rem'}
        />
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:macgregor:imageAndText5'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:macgregor:imageAndText6'
          )
        )}
        <Showcase
          title={currentShowcase.node.title}
          featureDescriptions={currentShowcase.node.featureDescriptions}
          bgColor="#3D68B0"
          height={
            !!currentShowcaseImages.length &&
            currentShowcaseImages[0].file.details.image.height / 2
          }
          handlePreviousShowcase={handlePreviousShowcase}
          handleNextShowcase={handleNextShowcase}
        >
          {!!currentShowcaseImages.length && (
            <>
              <Img
                fluid={currentShowcaseImages[0].fluid}
                style={{ width: '40%' }}
                imgStyle={{
                  width: '75%',
                  height: '45rem',
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
              <Img
                fluid={currentShowcaseImages[1].fluid}
                style={{ width: '40%' }}
                imgStyle={{
                  width: '75%',
                  height: '45rem',
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            </>
          )}
        </Showcase>
        <Quote quote={findQuote(data, 'work:macgregor:quotation2')} />
        <Results results={data.results} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query {
    tripleFeature: contentfulTripleFeature(
      contentfulid: { eq: "work:macgregor:triplefeature" }
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
    timeline: contentfulTimeline(
      contentfulid: { eq: "work:macgregor:timeline" }
    ) {
      title
      timelineItems {
        id
        title
        description
      }
    }
    imageAndText: allContentfulImageAndText(
      filter: { contentfulid: { regex: "/work:macgregor:imageAndText/" } }
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
    fullWidthBackground: contentfulFullWidthBackground(
      contentfulid: { eq: "work:macgregor:fullWidthBackground" }
    ) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    showcase: allContentfulShowcase(
      filter: { contentfulid: { regex: "/work:macgregor:showcase/" } }
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
    quotation: allContentfulQuotation(
      filter: { contentfulid: { regex: "/work:macgregor:quotation/" } }
    ) {
      edges {
        node {
          contentfulid
          quote
        }
      }
    }
    results: contentfulResults(contentfulid: { eq: "work:macgregor:results" }) {
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
