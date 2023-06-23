import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/contact/jumbotron.module.scss";

export default () => {
  const { backgroundImage, title } = content.contact.jumbotron;

  return (
    <div className={styles.component}>
      <SectionContainer>Jumbotron</SectionContainer>
    </div>
  );
};
