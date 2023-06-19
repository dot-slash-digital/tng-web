import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/gallery/previous-clients.module.scss";

export default () => {
  const { clients, grid, title } = content.gallery.previousClients;

  return (
    <div className={styles.component}>
      <SectionContainer>Previous clients</SectionContainer>
    </div>
  );
};
