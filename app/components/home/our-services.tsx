import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-services.module.scss";

export default () => {
  const { list, title } = content.home.ourServices;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.grid}>
            {list.map((service, index) => (
              <div className={styles.service} key={index}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className={styles.text}>
                  <div className={styles["service-title"]}>{service.title}</div>
                  <div className={styles.description}>
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
