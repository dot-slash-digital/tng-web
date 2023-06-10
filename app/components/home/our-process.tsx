import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-process.module.scss";

export default () => {
  const { list, title } = content.home.ourProcess;

  return (
    <div className={styles.component}>
      <SectionContainer>Our process</SectionContainer>
    </div>
  );
};
