"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@components/button";
import Icon, { IconType } from "@components/icon";
import SectionContainer from "@components/section-container";
import content from "@content";
import { ButtonType, NavbarLink } from "@types";
import { Breakpoint, useWindowSize } from "../utils";

import styles from "@styles/navbar.module.scss";

const LinkItem = ({
  closeMobileMenu = () => {},
  destination,
  label,
  prominent,
}: NavbarLink & { closeMobileMenu?: () => void }) => {
  const pathname = usePathname();
  const active = pathname === destination;

  return prominent ? (
    <div className={styles["button-container"]} onClick={closeMobileMenu}>
      <Button {...{ destination, label }} type={ButtonType.PRIMARY_SMALL} />
    </div>
  ) : (
    <div className={styles["link-container"]}>
      <Link
        className={styles.link}
        href={destination}
        onClick={closeMobileMenu}
      >
        {label}
      </Link>
      <div className={`${styles.underline} ${active ? styles.active : ""}`} />
    </div>
  );
};

export default () => {
  const { links, logo } = content.global.navbar;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { breakpoint } = useWindowSize();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "initial";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (
      isMobileMenuOpen &&
      breakpoint &&
      [Breakpoint.DESKTOP, Breakpoint.SMALL_DESKTOP].includes(breakpoint)
    ) {
      setMobileMenuOpen(false);
    }
  }, [breakpoint, isMobileMenuOpen]);

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.links}>
            {links.left.map((link, index) => (
              <LinkItem {...link} key={index} />
            ))}
          </div>
          <Link
            href={logo.destination}
            onClick={() => setMobileMenuOpen(false)}
          >
            <img alt="Logo" className={styles.logo} src={logo.image} />
          </Link>
          <div className={styles.links}>
            {links.right.map((link, index) => (
              <LinkItem {...link} key={index} />
            ))}
          </div>
          <div
            className={`${styles["menu-button"]} ${
              isMobileMenuOpen ? styles["open"] : ""
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Icon size={32} type={IconType.MENU} />
          </div>
        </div>
      </SectionContainer>
      <div
        className={styles["mobile-menu-container"]}
        style={{
          height:
            mobileMenuRef.current && isMobileMenuOpen
              ? mobileMenuRef.current.scrollHeight
              : 0,
        }}
      >
        <SectionContainer>
          <div ref={mobileMenuRef} className={styles["mobile-menu"]}>
            {[...links.left, ...links.right].map((link, index) => (
              <LinkItem
                {...link}
                closeMobileMenu={() => setMobileMenuOpen(false)}
                key={index}
              />
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};
