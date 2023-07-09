import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-process.module.scss";

export default () => {
  const { list, title } = content.home.ourProcess;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.title}>{title}</div>
        <div className={styles.container}>
          <div className={styles["sub-container-left"]}>
            <div className={styles.rectangle}>
              <div className={styles["text-box"]}>
                <div className={styles["sub-title"]}>
                  Step #1 Title
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
