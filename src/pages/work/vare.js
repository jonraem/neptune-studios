import classnames from 'classnames';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import gsap from 'gsap';
import { get } from 'lodash';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import vareHero from '../../assets/png/vare-hero.png';
import componentsStyles from '../../components/components.module.css';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import FullWidthBackground from '../../components/fullWidthBackground';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import Quote from '../../components/quote';
import { VareResults as Results } from '../../components/results';
import Showcase from '../../components/showcase';
import Timeline from '../../components/timeline';
import { initializeScrollTrigger } from '../../util/helpers';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['work:vare:imageAndText2', 'work:vare:imageAndText4'];

export default ({ data, ...props }) => {
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const currentShowcase = data.showcase.edges.find(
    edge => edge.node.contentfulid === `work:vare:showcase${showcaseIndex + 1}`
  );
  const currentShowcaseImage = get(currentShowcase, 'node.images[0]');
  const boxRefs = useRef(
    (currentShowcase.node.featureDescriptions || []).map(() =>
      React.createRef()
    )
  );

  const calculateAnimationOffset = () => window.innerWidth / 2;

  const animateBoxesFromLeft = (ref, index) => {
    gsap.from(ref, {
      x: -calculateAnimationOffset(),
      scrollTrigger: {
        id: `box-${index + 1}`,
        trigger: ref,
        start: 'top center',
      },
    });
  };

  const animateBoxesFromRight = (ref, index) => {
    gsap.from(ref, {
      x: calculateAnimationOffset(),
      scrollTrigger: {
        id: `box-${index + 1}`,
        trigger: ref,
        start: 'top center',
      },
    });
  };

  const handleAnimate = () => {
    initializeScrollTrigger();
    boxRefs.current.forEach((boxRef, index) => {
      if (index % 2) {
        // Animate from right
        animateBoxesFromRight(boxRef.current, index);
      } else {
        // Animate from left
        animateBoxesFromLeft(boxRef.current, index);
      }
    });
  };

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

  const renderFeatureDescriptions = () => {
    return (currentShowcase.node.featureDescriptions || []).map(
      (featureDescription, index) => {
        return (
          <div
            key={featureDescription.id}
            className={classnames(
              componentsStyles.descriptionBox,
              index % 2
                ? componentsStyles.descriptionBoxRight
                : componentsStyles.descriptionBoxLeft
            )}
            ref={boxRefs.current[index]}
          >
            {featureDescription.description}
          </div>
        );
      }
    );
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
        <Showcase
          title={currentShowcase.node.title}
          featureDescriptions={renderFeatureDescriptions()}
          bgColor="#dc143c"
          height={
            !!currentShowcaseImage &&
            currentShowcaseImage.file.details.image.height / 2
          }
          handleAnimate={handleAnimate}
          handlePreviousShowcase={handlePreviousShowcase}
          handleNextShowcase={handleNextShowcase}
        >
          {!!currentShowcaseImage && (
            <Img
              fluid={currentShowcaseImage.fluid}
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
