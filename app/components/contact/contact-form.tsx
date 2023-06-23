import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/contact/contact-form.module.scss";

export default () => {
  const { calendlyId, description } = content.contact.contactForm;

  return (
    <div className={styles.component}>
      <SectionContainer>Contact form</SectionContainer>
    </div>
  );
};
