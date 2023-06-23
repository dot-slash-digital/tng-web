import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/gallery/jumbotron.module.scss";

export default () => {
  const { backgroundImage, title } = content.gallery.jumbotron;

  return (
    <div className={styles.component}>
      <SectionContainer>Jumbotron</SectionContainer>
    </div>
  );
};
