import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/navbar.module.scss";

export default () => {
  const { links, logo } = content.global.navbar;

  return (
    <div className={styles.component}>
      <SectionContainer>Navbar</SectionContainer>
    </div>
  );
};
