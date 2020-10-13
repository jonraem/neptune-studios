import { graphql } from 'gatsby';
import { filter } from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';
import diverHero from '../assets/png/diver-hero.png';
import CaseCard from '../components/caseCard';
import CenterTitle from '../components/centerTitle';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import styles from './main.module.css';
import pagesStyles from './pages.module.css';

export default ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neptune Studios</title>
      <link rel="canonical" href="https://neptunestudios.com/" />
    </Helmet>
    <Header currentPath={props.location.pathname} />
    <Hero
      for="main"
      heroStyles={styles.mainHero}
      heroImage={
        <img
          className={styles.mainHeroImage}
          src={diverHero}
          alt="Illustration of a diver"
        />
      }
    />
    <div className={pagesStyles.content}>
      <div>
        <CenterTitle>
          Neptune Studios <br /> can help you with:
        </CenterTitle>
        <div className={styles.mainHelp}>
          <p className={styles.mainHelpPara}>
            The goal is to help clients achieve the best solution with a design
            related problem. Functionality and practicality does not have to
            mean “dull” or “My nephew could’ve done it!”. On the right side is
            presented part of the skill set I’ve worked with.
          </p>
          <div className={pagesStyles.divider} />
          <div className={styles.mainHelpItems}>
            <div className={styles.mainHelpItem}>User interface design</div>
            <div className={styles.mainHelpItem}>User experience design</div>
            <div className={styles.mainHelpItem}>Workshops</div>
            <div className={styles.mainHelpItem}>User testing</div>
            <div className={styles.mainHelpItem}>Prototypes</div>
            <div className={styles.mainHelpItem}>Visual design</div>
          </div>
        </div>
      </div>
      <div className={styles.mainCases}>
        <div className={pagesStyles.fullWidthGrey} />
        <h3>Have a peek</h3>
        <p className={pagesStyles.largePara}>
          Some of the selected works from different creative fields.
        </p>
        <div className={styles.mainCaseCards}>
          {filter(
            data.allContentfulCase.edges.reverse(),
            edge => edge.node.contentfulid !== 'case:various'
          ).map((edge, index) => (
            <CaseCard
              key={`${edge.node.title}:${index}`}
              title={edge.node.title}
              subtitle={edge.node.subtitle}
              linkTo={edge.node.URL}
              imagePath={edge.node.image && edge.node.image.fluid}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export const query = graphql`
  query {
    allContentfulCase {
      edges {
        node {
          contentfulid
          title
          subtitle
          URL
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
