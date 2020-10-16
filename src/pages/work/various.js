import { graphql } from 'gatsby';
import { get } from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';
import variousHero from '../../assets/png/various-hero.png';
import Footer from '../../components/footer';
import FullWidthBackground from '../../components/fullWidthBackground';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ImageAndText from '../../components/imageAndText';
import Quote from '../../components/quote';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = ['work:various:imageAndText1', 'work:various:imageAndText3'];

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
          description={edge.node.description.childContentfulRichText.html}
          imagePath={edge.node.image && edge.node.image.fluid}
          maxHeight={
            edge.node.contentfulid === 'work:various:imageAndText1' ? 300 : 500
          }
          isReversed={reversed.includes(edge.node.contentfulid)}
        />
      );
    } else return null;
  };
  const findQuote = (data, id) => {
    return get(
      data.quotation.edges.find(edge => edge.node.contentfulid === id),
      'node'
    );
  };

  return (
    <div className={pagesStyles.page}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neptune Studios | Case Väre</title>
        <link rel="canonical" href="https://neptunestudios.com/work/various" />
      </Helmet>
      <Header currentPath={props.path} />
      <Hero
        for="work:various"
        heroStyles={styles.variousHero}
        heroImage={
          <img
            className={styles.variousHeroImage}
            src={variousHero}
            alt="Images of various applications"
          />
        }
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
        <Quote quote={findQuote(data, 'work:various:quotation2')} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query {
    imageAndText: allContentfulImageAndText(
      filter: { contentfulid: { regex: "/work:various:imageAndText/" } }
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
      contentfulid: { eq: "work:various:fullWidthBackground" }
    ) {
      image {
        fluid {
          ...GatsbyContentfulFluid
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
