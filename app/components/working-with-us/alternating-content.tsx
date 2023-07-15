import Button, { ButtonType } from "@components/button";
import SectionContainer from "@components/section-container";
import { WorkingWithUsSection } from "@types";

import styles from "@styles/working-with-us/alternating-content.module.scss";

export default ({
  button,
  description,
  flip,
  image,
  title,
}: WorkingWithUsSection & { flip: boolean }) => {
  return (
    <div className={`${styles.component} ${flip ? styles.flip : ""}`}>
      <SectionContainer>
        <div className={styles.content}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            {description.map((paragraph, index) => (
              <div className={styles.paragraph} key={index}>
                {paragraph}
              </div>
            ))}
            {button && (
              <div className={styles["button-container"]}>
                <Button {...button} type={ButtonType.PRIMARY} />
              </div>
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
