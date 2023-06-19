import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/cta-banner.module.scss";

export default () => {
  const { button, title } = content.home.ctaBanner;

  return (
    <div className={styles.component}>
      <SectionContainer>CTA Banner</SectionContainer>
    </div>
  );
};
