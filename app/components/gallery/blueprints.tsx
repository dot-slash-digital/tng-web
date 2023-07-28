import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/gallery/blueprints.module.scss";

export default () => {
  const { list, title } = content.gallery.blueprints;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.grid}>
            {list.map(({ description, image, subtitle, title }, index) => (
              <div key={index}>
                <div
                  className={styles["item-image"]}
                  style={{ backgroundImage: `url("${image}")` }}
                />
                <div className={styles["item-title"]}>{title}</div>
                <div className={styles["item-subtitle"]}>{subtitle}</div>
                <div className={styles["item-description"]}>{description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
