import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import vareHero from '../../assets/png/vare-hero.png';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Timeline from '../../components/timeline';
import pagesStyles from '../pages.module.css';
import styles from './work.module.css';

export default ({ data, ...props }) => (
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
    </div>
    <Footer />
  </div>
);

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
  }
`;
