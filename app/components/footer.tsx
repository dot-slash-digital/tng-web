import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/footer.module.scss";

export default () => {
  const { copyright, ctaLink, email, phone, socialMediaLinks } =
    content.global.footer;

  return (
    <div className={styles.component}>
      <SectionContainer>Footer</SectionContainer>
    </div>
  );
};
