import Button from "@components/button";
import SectionContainer from "@components/section-container";
import content from "@content";
import { ButtonType } from "@types";

import styles from "@styles/home/jumbotron.module.scss";

export default () => {
  const { backgroundImage, button, subtitle, title } = content.home.jumbotron;

  return (
    <div
      className={styles.component}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SectionContainer>
        <div className={styles.container}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.button}>
            <Button {...button} type={ButtonType.PRIMARY} />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
