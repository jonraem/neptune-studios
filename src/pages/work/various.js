import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer/footer';
import FullWidthBackground from '../../components/FullWidth/background';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import ImageAndText from '../../components/ImageAndText/imageAndText';
import Quote from '../../components/Quote/quote';
import Showcase from '../../components/Showcase/showcase';
import { findQuote } from '../../utils/helpers';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['work:various:imageAndText1', 'work:various:imageAndText3'];

const Various = ({ data, ...props }) => {
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const currentShowcase = data.showcase.edges.find(
    edge =>
      edge.node.contentfulid === `work:various:showcase${showcaseIndex + 1}`
  );

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
          maxHeight={
            edge.node.contentfulid === 'work:various:imageAndText1' ? 300 : 500
          }
          isReversed={reversed.includes(edge.node.contentfulid)}
        />
      );
    } else return null;
  };

  const renderShowcaseImages = () => {
    if (!!currentShowcase.node.images && !!currentShowcase.node.images.length) {
      switch (currentShowcase.node.contentfulid) {
        case 'work:various:showcase1':
          return (
            <div
              style={{
                width: '75%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: 'auto',
              }}
            >
              {currentShowcase.node.images.map(image => (
                <Img
                  key={image.id}
                  fluid={image.fluid}
                  style={{ width: '13rem', height: '13rem' }}
                  imgStyle={{
                    width: '92%',
                    height: '12rem',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    objectFit: 'contain',
                    boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                  }}
                />
              ))}
            </div>
          );
        case 'work:various:showcase2':
          return (
            <>
              <Img
                fluid={currentShowcase.node.images[0].fluid}
                style={{ width: '36%' }}
                imgStyle={{
                  width: '100%',
                  height: '36rem',
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
              <Img
                fluid={currentShowcase.node.images[1].fluid}
                style={{ width: '36%' }}
                imgStyle={{
                  width: '100%',
                  height: '36rem',
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            </>
          );
        case 'work:various:showcase3':
          return (
            <>
              <Img
                fluid={currentShowcase.node.images[0].fluid}
                style={{
                  width: '22rem',
                  minWidth: '22rem',
                  margin: '0.5rem',
                  boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                }}
                imgStyle={{
                  width: '100%',
                  left: 0,
                  right: 0,
                  margin: '0',
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
              />
              <Img
                fluid={currentShowcase.node.images[1].fluid}
                style={{
                  width: '22rem',
                  minWidth: '22rem',
                  margin: '0.5rem',
                  boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                }}
                imgStyle={{
                  width: '100%',
                  left: 0,
                  right: 0,
                  margin: '0',
                  borderRadius: '4px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ width: '17rem', height: '33rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Img
                    fluid={currentShowcase.node.images[2].fluid}
                    style={{
                      width: '16.5rem',
                      height: '16rem',
                      margin: '0.5rem',
                      boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                    }}
                    imgStyle={{
                      width: '100%',
                      height: '100%',
                      left: 0,
                      right: 0,
                      margin: '0',
                      borderRadius: '4px',
                      objectFit: 'cover',
                    }}
                  />
                  <Img
                    fluid={currentShowcase.node.images[3].fluid}
                    style={{
                      width: '16.5rem',
                      height: '16rem',
                      margin: '0.5rem',
                      boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.16)',
                    }}
                    imgStyle={{
                      width: '100%',
                      height: '100%',
                      left: 0,
                      right: 0,
                      margin: '0',
                      borderRadius: '4px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </>
          );
        default:
          return <div style={{ color: '#fff' }}>No content</div>;
      }
    }
  };

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Various Projects</title>
        <link rel="canonical" href="https://neptunestudios.com/work/various/" />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        className={styles.variousHero}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        heroClassName={styles.variousHeroImage}
        heroAlt="Images of various applications"
        heroImage={data.hero?.image?.fluid}
        linkBackTo="/work"
      />
      <div className={pagesStyles.content}>
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:various:imageAndText1'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:various:imageAndText2'
          )
        )}
        {renderImageAndText(
          data.imageAndText.edges.find(
            edge => edge.node.contentfulid === 'work:various:imageAndText3'
          )
        )}
        <FullWidthBackground
          imagePath={
            data.fullWidthBackground.image &&
            data.fullWidthBackground.image.fluid
          }
          height={'50rem'}
        />
        <Quote quote={findQuote(data, 'work:various:quotation1')} />
        <Showcase
          bgColor="#5DBBE3"
          height="54rem"
          currentShowcase={currentShowcase}
          handlePreviousShowcase={handlePreviousShowcase}
          handleNextShowcase={handleNextShowcase}
        >
          {renderShowcaseImages()}
        </Showcase>
        <Quote quote={findQuote(data, 'work:various:quotation2')} />
      </div>
      <Footer />
    </div>
  );
};

export default Various;

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "work:various:hero" }) {
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
    imageAndText: allContentfulImageAndText(
      filter: { contentfulid: { regex: "/work:various:imageAndText/" } }
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
      contentfulid: { eq: "work:various:fullWidthBackground" }
    ) {
      image {
        fluid(maxWidth: 2300, quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    showcase: allContentfulShowcase(
      filter: { contentfulid: { regex: "/work:various:showcase/" } }
    ) {
      edges {
        node {
          contentfulid
          title
          images {
            id
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
      filter: { contentfulid: { regex: "/work:various:quotation/" } }
    ) {
      edges {
        node {
          contentfulid
          quote
        }
      }
    }
  }
`;
