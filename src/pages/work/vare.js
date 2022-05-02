import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { get } from 'lodash';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Feature from '../../components/Feature/feature';
import Footer from '../../components/Footer/footer';
import FullWidthBackground from '../../components/FullWidth/background';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import ImageAndText from '../../components/ImageAndText/imageAndText';
import Quote from '../../components/Quote/quote';
import { VareResults as Results } from '../../components/Results/results';
import MobileShowcase from '../../components/Showcase/mobileShowcase';
import Showcase from '../../components/Showcase/showcase';
import Timeline from '../../components/Timeline/timeline';
import useMedia from '../../hooks/useMedia';
import * as pagesStyles from '../pages.module.css';
import * as styles from './work.module.css';

const reversed = ['work:vare:imageAndText2', 'work:vare:imageAndText4'];

const Vare = ({ data, ...props }) => {
  const isMobile = useMedia('(max-width: 480px)');
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const currentShowcase = data.showcase.edges.find(
    edge => edge.node.contentfulid === `work:vare:showcase${showcaseIndex + 1}`
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
          description={edge.node.description}
          imagePath={getImage(edge.node.image)}
          maxHeight={
            edge.node.contentfulid === 'work:vare:imageAndText2'
              ? 350
              : undefined
          }
          isReversed={!isMobile && reversed.includes(edge.node.contentfulid)}
        />
      );
    } else return null;
  };

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Case Väre</title>
        <link rel="canonical" href="https://neptunestudios.com/work/vare/" />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        className={styles.vareHero}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        heroClassName={styles.vareHeroImage}
        heroAlt="Phone with Väppi application"
        heroImage={getImage(data.hero?.image)}
        linkBackTo="/work"
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
          imagePath={getImage(data.fullWidthBackground.image)}
          height={isMobile ? '100vh' : '42rem'}
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
        {!isMobile && (
          <Showcase
            bgColor="#5dbbe3"
            currentShowcase={currentShowcase}
            height={currentShowcaseImage.file.details.image.height / 2}
            handlePreviousShowcase={handlePreviousShowcase}
            handleNextShowcase={handleNextShowcase}
          >
            {!!currentShowcaseImage && (
              <GatsbyImage
                image={getImage(currentShowcaseImage)}
                style={{ width: '100%' }}
                imgStyle={{
                  width: '28rem',
                  height: 'unset',
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            )}
          </Showcase>
        )}
        {isMobile && (
          <MobileShowcase
            bgColor="#5dbbe3"
            currentShowcase={currentShowcase}
            showcaseIndex={showcaseIndex}
            showcaseImagesLength={data.showcase.edges.length}
            handleChangeShowcaseIndex={index => setShowcaseIndex(index)}
          >
            {!!currentShowcaseImage && (
              <GatsbyImage
                image={getImage(currentShowcaseImage)}
                style={{ width: '100%' }}
                imgStyle={{
                  width: '19rem',
                  height: 'unset',
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            )}
          </MobileShowcase>
        )}
        <Quote quote={data.quotation} />
        <Results results={data.results} />
      </div>
      <Footer />
    </div>
  );
};

export default Vare;

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "work:vare:hero" }) {
      title
      subtitle
      description {
        raw
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
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
            raw
          }
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    fullWidthBackground: contentfulFullWidthBackground(
      contentfulid: { eq: "work:vare:fullWidthBackground" }
    ) {
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    showcase: allContentfulShowcase(
      filter: { contentfulid: { regex: "/work:vare:showcase/" } }
    ) {
      edges {
        node {
          contentfulid
          title
          featureDescriptions {
            id
            description
          }
          images {
            gatsbyImageData(layout: FULL_WIDTH)
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
        raw
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
