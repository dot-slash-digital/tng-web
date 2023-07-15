import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/gallery/previous-clients.module.scss";

export default () => {
  const { grid, title } = content.gallery.previousClients;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.grid}>
            {grid.map((image, index) => (
              <div
                className={styles.image}
                key={index}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
