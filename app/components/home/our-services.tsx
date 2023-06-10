import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-services.module.scss";

export default () => {
  const { list, title } = content.home.ourServices;

  return (
    <div className={styles.component}>
      <SectionContainer>Our services</SectionContainer>
    </div>
  );
};
