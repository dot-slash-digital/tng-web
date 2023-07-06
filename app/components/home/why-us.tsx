import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/why-us.module.scss";

export default () => {
  const { button, description, image, title } = content.home.whyUs;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.componenttemp}>
          <div className={styles.image}/>
          <div className={styles["container"]}>
            <div className={styles["text-box"]}>
              <div className={styles.title}>Why us</div>
              <div className={styles.description}>
                Step description goes here step description goes here step description 
                goes here step description goes here step description goes here step description goes here. 
                Step description goes here step description goes here step description goes here step description goes here
                step description goes here step description goes here. step description goes here.
              </div>
              <div className={styles.description}>
                Step description goes here step description goes here step description goes
                here step description goes here step description goes here step description goes here.
                Step description goes here step description goes here step description goes here.
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles["button-text"]}>
                CTA button goes here
              </div>
            </div> 
          </div>

        </div>

      </SectionContainer>
    </div>
  );
};
