import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/jumbotron.module.scss";

export default () => {
  const { button, subtitle, title } = content.home.jumbotron;

  return (
    <div className={styles.component}>
      <SectionContainer>Jumbotron</SectionContainer>
    </div>
  );
};
