import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/jumbotron.module.scss";

export default () => {
  const { button, subtitle, title } = content.home.jumbotron;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.container}>
          <div className={styles.title}>{title}</div>
          <div className={styles["sub-title"]}>{subtitle}</div>
          <div className={styles.button}>
            <a className={styles["button-text"]} href={button.destination}>
              {button.label}
            </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

