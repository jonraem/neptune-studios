import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CenterTitle from '../components/centerTitle';
import styles from './pages.module.css';

export default props => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.mainHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>Welcome to the</div>
          <h1>Neptune Studios</h1>
        </div>
        <div className={styles.subtitle}>
          Design. Usability. User experience…
        </div>
        <p>
          The driving forces behind Neptune Studios. No setting sails for rough
          seas or taking dives to the deep-end without proper preparation.
        </p>
      </div>
    </div>
    <div className={styles.content}>
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
          <div className={styles.divider} />
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
      <div className={styles.mainPeek}>
        <div className={styles.fullWidthGrey} />
        <h3>Have a peek</h3>
        <div>Some of the selected works from different creative fields.</div>
        <div>
          <div></div> {/* Case cards */}
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
