import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { get } from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';

import { ReactComponent as CurriculumVitae } from '../../assets/svg/curriculum-vitae.svg';
import Feature from '../../components/Feature/feature';
import Footer from '../../components/Footer/footer';
import FullWidthGrey from '../../components/FullWidth/grey';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import * as pagesStyles from '../pages.module.css';
import * as styles from './about.module.css';

const About = ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neptune Studios | About</title>
      <link rel="canonical" href="https://neptunestudios.com/about/" />
    </Helmet>
    <Header currentPath={props.path} />
    <Hero
      className={styles.aboutHero}
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      description={data.hero.description}
      heroClassName={styles.aboutHeroImage}
      heroAlt="Pyry Nousiainen"
      heroImage={getImage(data.hero?.image)}
    />
    <div className={pagesStyles.content}>
      <div className={styles.aboutFeatures}>
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
      <div className={styles.aboutCV}>
        <FullWidthGrey />
        <CurriculumVitae className={styles.aboutCVIcon} />
        <div className={styles.aboutCVTitle}>
          Download Curriculum Vitae{' '}
          <a href={get(data, 'cv.pdf.file.url', '#')}>HERE</a>.
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "about:hero" }) {
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
      contentfulid: { eq: "about:triplefeature" }
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
    cv: contentfulCv {
      contentfulid
      pdf {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;
