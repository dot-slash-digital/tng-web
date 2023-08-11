"use client";

import { Fragment } from "react";

import Button from "@components/button";
import SectionContainer from "@components/section-container";
import content from "@content";
import { ButtonType } from "@types";
import { Breakpoint, useWindowSize } from "../../utils";

import styles from "@styles/home/why-us.module.scss";

export default () => {
  const { button, description, image, title } = content.home.whyUs;

  const { breakpoint } = useWindowSize();

  const ContentContainer =
    breakpoint === Breakpoint.DESKTOP || breakpoint === Breakpoint.SMALL_DESKTOP
      ? Fragment
      : SectionContainer;

  return (
    <div className={styles.component}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <ContentContainer>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>
            {description.map((paragraph, index) => (
              <div className={styles.paragraph} key={index}>
                {paragraph}
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <Button {...button} type={ButtonType.PRIMARY} />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
