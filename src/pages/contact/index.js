import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';

import CenterTitle from '../../components/CenterTitle/centerTitle';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import LeadForm from '../../components/LeadForm/leadForm';
import * as pagesStyles from '../pages.module.css';
import * as styles from './contact.module.css';

const Contact = ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neptune Studios | Contact</title>
      <link rel="canonical" href="https://neptunestudios.com/contact/" />
    </Helmet>
    <Header currentPath={props.path} />
    <Hero
      className={styles.contactHero}
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      description={data.hero.description}
      heroClassName={styles.contactHeroImage}
      heroAlt="Contact Neptune Studios"
      heroImage={getImage(data.hero?.image)}
    />
    <div className={pagesStyles.content}>
      <CenterTitle>
        How to reach
        <br />
        Neptune Studios?
      </CenterTitle>
      <div className={styles.contactForm}>
        <LeadForm />
        <p className={styles.contactFormDescription}>
          When having a brilliant idea circling around or maybe there is other
          inquiry, please send a message and we start from there!
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "contact:hero" }) {
      title
      subtitle
      description {
        raw
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
