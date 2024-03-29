import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { filter, map } from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';

import CaseCard from '../components/CaseCard/caseCard';
import CenterTitle from '../components/CenterTitle/centerTitle';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';
import { getSortedCases } from '../utils/helpers';
import * as styles from './main.module.css';
import * as pagesStyles from './pages.module.css';

const sortOrder = ['case:vare', 'case:abb', 'case:macgregor'];

const Main = ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neptune Studios</title>
      <link rel="canonical" href="https://neptunestudios.com/" />
    </Helmet>
    <Header currentPath={props.path} />
    <Hero
      className={styles.mainHero}
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      description={data.hero.description}
      heroClassName={styles.mainHeroImage}
      heroAlt="Illustration of a diver"
      heroImage={getImage(data.hero?.image)}
    />
    <div className={pagesStyles.content}>
      <CenterTitle className={styles.mainHelpTitle}>
        {data.listAndText.title}
      </CenterTitle>
      <div className={styles.mainHelp}>
        <p className={styles.mainHelpPara}>
          {data.listAndText.description.description}
        </p>
        <div style={{ display: 'flex' }}>
          <div className={pagesStyles.divider} />
          <div className={styles.mainHelpItems}>
            {map(data.listAndText.list, (item, index) => (
              <div key={index} className={styles.mainHelpItem}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mainCases}>
        <h3>Have a peek</h3>
        <p className={pagesStyles.largePara}>
          Some of the selected works from different creative fields.
        </p>
        <div className={styles.mainCaseCards}>
          {filter(
            getSortedCases(data.cases.edges, sortOrder),
            edge => edge.node.contentfulid !== 'case:various'
          ).map((edge, index) => (
            <CaseCard
              key={`${edge.node.title}:${index}`}
              imagePath={getImage(edge.node.image)}
              title={edge.node.title}
              subtitle={edge.node.subtitle}
              linkTo={edge.node.URL}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Main;

export const query = graphql`
  query {
    listAndText: contentfulListAndText(
      contentfulid: { eq: "main:listAndText" }
    ) {
      title
      description {
        description
      }
      list {
        content
      }
    }
    hero: contentfulHero(contentfulid: { eq: "main:hero" }) {
      title
      subtitle
      description {
        raw
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    cases: allContentfulCase {
      edges {
        node {
          contentfulid
          title
          subtitle
          URL
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
