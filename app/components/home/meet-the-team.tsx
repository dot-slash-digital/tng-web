import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/meet-the-team.module.scss";

export default () => {
  const { teamMembers, title } = content.home.meetTheTeam;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.grid}>
            {teamMembers.map(({ description, image, title }, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles["item-image"]}
                  style={{ backgroundColor: `url(${image})` }}
                />
                <div className={styles["item-text"]}>
                  <div className={styles["item-title"]}>{title}</div>
                  <div className={styles["item-description"]}>
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
