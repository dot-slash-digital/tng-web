import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/cta-banner.module.scss";

export default () => {
  const { button, title } = content.home.ctaBanner;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles["new-comp"]}>
          <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.button}>
              <a className={styles["button-text"]} href={button.destination}>
                {button.label}
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
