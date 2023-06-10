import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/working-with-us/jumbotron.module.scss";

export default () => {
  const { backgroundImage, title } = content.workingWithUs.jumbotron;

  return (
    <div className={styles.component}>
      <SectionContainer>Jumbotron</SectionContainer>
    </div>
  );
};
