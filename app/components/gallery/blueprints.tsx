import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/gallery/blueprints.module.scss";

export default () => {
  const { list, title } = content.gallery.blueprints;

  return (
    <div className={styles.component}>
      <SectionContainer>Blueprints</SectionContainer>
    </div>
  );
};
