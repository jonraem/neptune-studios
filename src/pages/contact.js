import React from 'react';
import { graphql } from 'gatsby';
import contactHero from '../assets/png/contact-hero.png';
import CenterTitle from '../components/centerTitle';
import Footer from '../components/footer';
import Header from '../components/header';
import LeadForm from '../components/leadForm';
import styles from './pages.module.css';

export default ({ data, ...props }) => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.contactHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>{data.hero.subtitle}</div>
          <h1>{data.hero.title}</h1>
        </div>
        <div
          className={styles.heroDescription}
          dangerouslySetInnerHTML={{
            __html: data.hero.description.childContentfulRichText.html,
          }}
        />
      </div>
      <img
        className={styles.contactHeroImage}
        src={contactHero}
        alt="Contact Neptune Studios"
      />
    </div>
    <div className={styles.content}>
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
