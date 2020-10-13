import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import contactHero from '../../assets/png/contact-hero.png';
import CenterTitle from '../../components/centerTitle';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Hero from '../../components/hero';
import LeadForm from '../../components/leadForm';
import pagesStyles from '../pages.module.css';
import styles from './contact.module.css';

export default ({ data, ...props }) => (
  <div className={pagesStyles.page}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neptune Studios | Contact</title>
      <link rel="canonical" href="https://neptunestudios.com/contact" />
    </Helmet>
    <Header currentPath={props.path} />
    <Hero
      for="contact"
      heroStyles={styles.contactHero}
      heroImage={
        <img
          className={styles.contactHeroImage}
          src={contactHero}
          alt="Contact Neptune Studios"
        />
      }
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

export const query = graphql`
  query {
    hero: contentfulHero(contentfulid: { eq: "contact:hero" }) {
      title
      subtitle
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
