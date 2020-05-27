import React from 'react';
import contactHero from '../assets/png/contact-hero.png';
import CenterTitle from '../components/centerTitle';
import Footer from '../components/footer';
import Header from '../components/header';
import LeadForm from '../components/leadForm';
import styles from './pages.module.css';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.contactHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>Contacting</div>
          <h1>Neptune Studios</h1>
        </div>
        <div className={styles.subtitle}>
          Hesitating to contact Neptune Studios? Do not, we’re here to help!
        </div>
        <div className={styles.subtitle}>
          Whether it’s consultancy, design related questions or work inquiries,
          Neptune Studios will gladly help you.
        </div>
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
