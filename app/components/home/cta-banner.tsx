import Button from "@components/button";
import SectionContainer from "@components/section-container";
import content from "@content";
import { ButtonType } from "@types";

import styles from "@styles/home/cta-banner.module.scss";

export default () => {
  const { button, image, title } = content.home.ctaBanner;

  return (
    <div
      className={styles.component}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url(${image})`,
      }}
    >
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.banner}>
            <div className={styles.title}>{title}</div>
            <Button {...button} type={ButtonType.PRIMARY} />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
