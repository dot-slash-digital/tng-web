import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/why-us.module.scss";

export default () => {
  const { button, description, image, title } = content.home.whyUs;

  return (
    <div className={styles.component}>
      <div className={styles.image}/>
      <div className={styles.container}>
        <div className={styles["text-box"]}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.description}>{description}</div>
        </div>            
        <a className={styles.button} href={button.destination} >
          {button.label}
        </a>
      </div>
    </div>
  );
};
