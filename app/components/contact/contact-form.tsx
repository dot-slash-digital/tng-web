import Script from "next/script";

import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/contact/contact-form.module.scss";

export default () => {
  const { calendlyUrl, description } = content.contact.contactForm;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.description}>{description}</div>
          <div
            className={`calendly-inline-widget ${styles["calendly-embed"]}`}
            data-url={calendlyUrl}
          ></div>

          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </div>
      </SectionContainer>
    </div>
  );
};
