
import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-services.module.scss";

export default () => {
  const { list, title } = content.home.ourServices;
  return (
    <div className={styles.component}>
        <SectionContainer>
          <div className={styles.component}>
            <div className={styles.title}>{title}</div>
            <div className={styles["sub-container"]}>
              {list.map((service, index) => (
                <div key={index}>
                  <div className={styles.rectangle}/>
                  <div className={styles.subtitle}>{service.title}</div>
                  <div className={styles.description}>{service.description}</div>
                </div>
              ))}
            </div>
          </div>

        </SectionContainer>
    </div>
  );
};


