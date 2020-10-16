import { graphql } from 'gatsby';
import { get } from 'lodash';
import React from 'react';
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
import Timeline from '../../components/timeline';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

const reversed = [
  'work:macgregor:imageAndText1',
  'work:macgregor:imageAndText5',
];

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
          height={'50rem'}
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
