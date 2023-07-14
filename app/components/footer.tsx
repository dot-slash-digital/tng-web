"use client";

import Link from "next/link";

import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/footer.module.scss";

const RowLink = ({
  destination,
  label,
}: {
  destination: string;
  label: string;
}) => {
  const linkProps = {
    className: styles["row-link"],
    href: destination,
  };

  return (
    <div className={styles["row-link-container"]}>
      {destination.startsWith("/") ? (
        <Link {...linkProps}>{label}</Link>
      ) : (
        <a {...linkProps}>{label}</a>
      )}
    </div>
  );
};

export default () => {
  const { copyright, ctaLink, email, insurance, phone, socialMediaLinks } =
    content.global.footer;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.row}>{copyright}</div>
            <RowLink destination={`mailto:${email}`} label={email} />
            <RowLink destination={`tel:${phone}`} label={phone} />
          </div>
          <div className={styles.right}>
            <div className={styles["social-media-links"]}>
              {socialMediaLinks.map(({ destination, icon }, index) => (
                <a
                  className={styles["social-media-link"]}
                  href={destination}
                  key={index}
                  target="_blank"
                >
                  {icon}
                </a>
              ))}
            </div>
            <RowLink destination={ctaLink.destination} label={ctaLink.label} />
            <div className={styles.row}>{insurance}</div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
