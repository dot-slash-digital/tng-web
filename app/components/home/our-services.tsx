
import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-services.module.scss";

export default () => {
  //const { list, title } = content.home.ourServices;
  return (
    <div className={styles.component}>
        <SectionContainer>
          <div>
            <div className={styles.title}>Our Services</div>
            <div className={styles.subContainer}>
              <div className={styles.content}>
                <div className={styles.rectangle}/>
                <div className={styles.subtitle}>Home Remodeling</div>
                <div className={styles.description}>Service description goes here Service description goes here Service description goes here Service description goes here Service description goes here Service description goes here</div>
              </div>
              <div className={styles.content}>
                <div className={styles.rectangle}/>
                <div className={styles.subtitle}>New Home Construction</div>
                <div className={styles.description}>Service description goes here Service description goes here Service description goes here Service description goes here</div>
              </div>
            </div>
          </div>

        </SectionContainer>
    </div>
  );
};


