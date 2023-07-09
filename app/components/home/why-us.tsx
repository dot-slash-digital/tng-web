import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/why-us.module.scss";

export default () => {
  const { button, description, image, title } = content.home.whyUs;

  return (
    <div className={styles.component}>
      <div className={styles.image} />
      <div className={styles.container}>
        <div className={styles["text-box"]}>
          <div className={styles.title}>{title}</div>
          {description.map((text, index) => (
            <div key={index}>
              <div className={styles.description}>{text}</div>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <a className={styles["button-text"]} href={button.destination}>
            {button.label}
          </a>
        </div>
      </div>
    </div>
  );
};
