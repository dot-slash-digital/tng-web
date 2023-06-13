import './fonts.scss';

import SectionContainer from "@components/section-container";

import styles from "@styles/home/our-services.module.scss";

export default () => {

  return (
    <div className={styles.component}>
        <SectionContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div className={styles.title}>Our Services</div>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
                <div className={styles.rectangle}></div>
                <div className={styles.content}>
                  <div className={styles.subtitle}>Home Remodeling</div>
                  <p className={styles.paragraph}>Service description goes here Service description goes here Service description goes here Service description goes here Service description goes here Service description goes here</p>
                </div>

              </div>
              <div className={styles.content}>
                <div className={styles.rectangle}></div>
                <div className={styles.subtitle}>New Home Construction</div>
                <p className={styles.paragraph}>Service description goes here Service description goes here Service description goes here Service description goes here</p>

              </div>
            </div>
          </div>

        </SectionContainer>
    </div>
  );
};


