import Button, { ButtonType } from "@components/button";
import content from "@content";

import styles from "@styles/home/why-us.module.scss";

export default () => {
  const { button, description, image, title } = content.home.whyUs;

  return (
    <div className={styles.component}>
      <div
        className={styles.image}
        style={{ backgroundColor: `url(${image})` }}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>
          {description.map((paragraph, index) => (
            <div className={styles.paragraph} key={index}>
              {paragraph}
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <Button {...button} type={ButtonType.PRIMARY} />
        </div>
      </div>
    </div>
  );
};
