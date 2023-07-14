"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Button, { ButtonType } from "@components/button";
import SectionContainer from "@components/section-container";
import content from "@content";
import { routes, Page } from "@pageInfo";
import { NavbarLink } from "@types";

import styles from "@styles/navbar.module.scss";

const LinkItem = ({ destination, label, prominent }: NavbarLink) => {
  const pathname = usePathname();
  const active = pathname === destination;

  return prominent ? (
    <div className={styles["button-container"]}>
      <Button {...{ destination, label }} type={ButtonType.PRIMARY_SMALL} />
    </div>
  ) : (
    <div className={styles["link-container"]}>
      <Link className={styles.link} href={destination}>
        {label}
      </Link>
      <div className={`${styles.underline} ${active ? styles.active : ""}`} />
    </div>
  );
};

export default () => {
  const { links, logo } = content.global.navbar;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.links}>
            {links.left.map((link, index) => (
              <LinkItem {...link} key={index} />
            ))}
          </div>
          <Link href={routes[Page.HOME]}>
            <div className={styles.logo} />
          </Link>
          <div className={styles.links}>
            {links.right.map((link, index) => (
              <LinkItem {...link} key={index} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
