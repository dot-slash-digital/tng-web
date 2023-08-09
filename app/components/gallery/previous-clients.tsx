"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/gallery/previous-clients.module.scss";

const Lightbox = ({ close, src }: { close: () => void; src: string }) => {
  return (
    <div className={styles["lightbox-background"]} onClick={close}>
      <img
        {...{ src }}
        className={styles["lightbox-image"]}
        alt="Gallery image"
      />
    </div>
  );
};

export default () => {
  const { grid, title } = content.gallery.previousClients;

  const [openedImage, setOpenedImage] = useState<number | undefined>();

  useEffect(() => {
    document.body.style.overflow =
      openedImage !== undefined ? "hidden" : "initial";
  }, [openedImage]);

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.grid}>
            {grid.map((image, index) => (
              <div
                className={styles.image}
                key={index}
                onClick={() => setOpenedImage(index)}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
      {openedImage !== undefined &&
        createPortal(
          <Lightbox
            close={() => setOpenedImage(undefined)}
            src={grid[openedImage]}
          />,
          document.body
        )}
    </div>
  );
};
