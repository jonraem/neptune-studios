import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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
import Results from '../../components/Results/results';
import MobileShowcase from '../../components/Showcase/mobileShowcase';
import Showcase from '../../components/Showcase/showcase';
import Timeline from '../../components/Timeline/timeline';
import useMedia from '../../hooks/useMedia';
import { findQuote } from '../../utils/helpers';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = [
  'work:macgregor:imageAndText2',
  'work:macgregor:imageAndText3',
  'work:macgregor:imageAndText4',
  'work:macgregor:imageAndText6',
];
const greyed = ['work:macgregor:imageAndText2', 'work:macgregor:imageAndText3'];

const MacGregor = ({ data, ...props }) => {
  const isMobile = useMedia('(max-width: 480px)');
  const isDesktop = useMedia('(min-width: 1025px)');
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
          description={edge.node.description}
          imagePath={edge.node.image && edge.node.image.fluid}
          maxHeight={500}
          isReversed={!isMobile && reversed.includes(edge.node.contentfulid)}
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
          href="https://neptunestudios.com/work/macgregor/"
        />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        className={styles.macgregorHero}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        heroClassName={styles.macgregorHeroImage}
        heroAlt="Phone with MacGregor application"
        heroImage={data.hero?.image?.fluid}
        linkBackTo="/work"
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
          height={isMobile ? '100vh' : '42rem'}
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
        {!isMobile && (
          <Showcase
            bgColor="#3D68B0"
            currentShowcase={currentShowcase}
            handlePreviousShowcase={handlePreviousShowcase}
            handleNextShowcase={handleNextShowcase}
          >
            {!!currentShowcaseImages.length && (
              <>
                <Img
                  fluid={currentShowcaseImages[0].fluid}
                  style={{ width: '40%', height: isDesktop && '46rem' }}
                  imgStyle={{
                    width: '75%',
                    height: '90%',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    objectFit: 'contain',
                  }}
                />
                <Img
                  fluid={currentShowcaseImages[1].fluid}
                  style={{ width: '40%', height: isDesktop && '46rem' }}
                  imgStyle={{
                    width: '75%',
                    height: '90%',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    objectFit: 'contain',
                  }}
                />
              </>
            )}
          </Showcase>
        )}
        {isMobile && (
          <MobileShowcase
            bgColor="#3D68B0"
            currentShowcase={currentShowcase}
            showcaseIndex={showcaseIndex}
            showcaseImagesLength={data.showcase.edges.length}
            handleChangeShowcaseIndex={index => setShowcaseIndex(index)}
          >
            {!!currentShowcaseImages.length && (
              <>
                <Img
                  fluid={currentShowcaseImages[0].fluid}
                  style={{ width: '45%' }}
                  imgStyle={{
                    width: '90%',
                    height: 'unset',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    objectFit: 'contain',
                  }}
                />
                <Img
                  fluid={currentShowcaseImages[1].fluid}
                  style={{ width: '45%' }}
                  imgStyle={{
                    width: '90%',
                    height: 'unset',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    objectFit: 'contain',
                  }}
                />
              </>
            )}
          </MobileShowcase>
        )}
        <Quote quote={findQuote(data, 'work:macgregor:quotation2')} />
        <Results results={data.results} />
      </div>
      <Footer />
    </div>
  );
};

export default MacGregor;

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "work:macgregor:hero" }) {
      title
      subtitle
      description {
        raw
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
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
            raw
          }
          image {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
    fullWidthBackground: contentfulFullWidthBackground(
      contentfulid: { eq: "work:macgregor:fullWidthBackground" }
    ) {
      image {
        fluid(maxWidth: 3800, quality: 100) {
          ...GatsbyContentfulFluid_noBase64
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
              ...GatsbyContentfulFluid_noBase64
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
