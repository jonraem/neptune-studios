import { graphql } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import vareHero from '../../assets/png/vare-hero.png';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import FullWidthBackground from '../../components/fullWidthBackground';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import Quote from '../../components/quote';
import { VareResults as Results } from '../../components/results';
import ScrollShowcase from '../../components/scrollShowcase';
import Timeline from '../../components/timeline';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['work:vare:imageAndText2', 'work:vare:imageAndText4'];

export default ({ data, ...props }) => {
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const currentShowcase = data.scrollShowcase.edges.find(
    edge =>
      edge.node.contentfulid === `work:vare:scrollShowcase${showcaseIndex + 1}`
  );

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
          maxHeight={
            edge.node.contentfulid === 'work:vare:imageAndText2'
              ? 350
              : undefined
          }
          isReversed={reversed.includes(edge.node.contentfulid)}
        />
      );
    } else return null;
  };

  const handlePreviousShowcase = () => {
    if (showcaseIndex === 0) {
      setShowcaseIndex(data.scrollShowcase.edges.length - 1);
    } else {
      setShowcaseIndex(showcaseIndex - 1);
    }
  };

  const handleNextShowcase = () => {
    if (showcaseIndex === data.scrollShowcase.edges.length - 1) {
      setShowcaseIndex(0);
    } else {
      setShowcaseIndex(showcaseIndex + 1);
    }
  };

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Case Väre</title>
        <link rel="canonical" href="https://neptunestudios.com/work/vare" />
      </Helmet>
      <Header currentPath={props.path} />
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
      <div className={pagesStyles.content}>
        <div className={styles.vareFeatures}>
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
            edge => edge.node.contentfulid === 'work:vare:imageAndText1'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:vare:imageAndText2'
          )
        )}
        <FullWidthBackground
          imagePath={
            data.fullWidthBackground.image &&
            data.fullWidthBackground.image.fluid
          }
          height={'50rem'}
        />
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:vare:imageAndText3'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:vare:imageAndText4'
          )
        )}
        <ScrollShowcase
          title={currentShowcase.node.title}
          featureDescriptions={currentShowcase.node.featureDescriptions}
          bgColor="#dc143c"
          imagePath={currentShowcase.node.image?.fluid}
          imageHeight={currentShowcase.node.image?.file?.details.image.height}
          handlePreviousShowcase={handlePreviousShowcase}
          handleNextShowcase={handleNextShowcase}
        />
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
      contentfulid: { eq: "work:vare:triplefeature" }
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
    timeline: contentfulTimeline(contentfulid: { eq: "work:vare:timeline" }) {
      title
      timelineItems {
        id
        title
        description
      }
    }
    imageAndText: allContentfulImageAndText(
      filter: { contentfulid: { regex: "/work:vare:imageAndText/" } }
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
      contentfulid: { eq: "work:vare:fullWidthBackground" }
    ) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    scrollShowcase: allContentfulScrollShowcase(
      filter: { contentfulid: { regex: "/work:vare:scrollShowcase/" } }
    ) {
      edges {
        node {
          contentfulid
          title
          featureDescriptions {
            id
            description
          }
          image {
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
    quotation: contentfulQuotation(
      contentfulid: { eq: "work:vare:quotation" }
    ) {
      quote
    }
    results: contentfulResults(contentfulid: { eq: "work:vare:results" }) {
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
