import React from 'react';
import { graphql } from 'gatsby';
import diverHero from '../assets/png/diver-hero.png';
import CaseCard from '../components/caseCard';
import CenterTitle from '../components/centerTitle';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './pages.module.css';

const cases = [
  {
    title: 'Case Väre',
    description: 'Your personal Energy Coach',
    linkTo: '/work',
    imagePath: '',
  },
  {
    title: 'Case MacGregor',
    description: 'Smart inventory system',
    linkTo: '/work',
    imagePath: '',
  },
  {
    title: 'Case ABB',
    description: 'Presenting new drive',
    linkTo: '/work',
    imagePath: '',
  },
];

export default ({ data, ...props }) => (
  <div className={styles.page}>
    <Header currentPath={props.location.pathname} />
    <div className={styles.mainHero}>
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <div className={styles.subtitle}>{data.hero.subtitle}</div>
          <h1>{data.hero.title}</h1>
        </div>
        <div className={styles.heroDescription}>
          {data.hero.description.childContentfulRichText.html}
        </div>
      </div>
      <img
        className={styles.mainHeroImage}
        src={diverHero}
        alt="Illustration of a diver"
      />
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
      <div className={styles.mainCases}>
        <div className={styles.fullWidthGrey} />
        <h3>Have a peek</h3>
        <p className={styles.largePara}>
          Some of the selected works from different creative fields.
        </p>
        <div className={styles.mainCaseCards}>
          {cases.map((caseItem, index) => (
            <CaseCard
              key={`${caseItem.title}:${index}`}
              title={caseItem.title}
              description={caseItem.description}
              linkTo={caseItem.linkTo}
              imagePath={caseItem.imagePath}
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
    hero: contentfulHero(contentfulid: { eq: "main:hero" }) {
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
