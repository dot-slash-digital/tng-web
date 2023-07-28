"use client";

import Link from "next/link";

import Icon, { IconType } from "@components/icon";
import { ButtonType } from "@types";
import { Breakpoint, useWindowSize } from "../utils";

import styles from "@styles/button.module.scss";

const buttonTypeToStyleMap = {
  [ButtonType.PRIMARY]: styles.primary,
  [ButtonType.PRIMARY_SMALL]: styles["primary-small"],
  [ButtonType.OUTLINE]: styles.outline,
};

export default ({
  destination,
  label,
  type,
}: {
  destination: string;
  label: string;
  type: ButtonType;
}) => {
  const { breakpoint } = useWindowSize();

  const props = {
    className: `${styles.component} ${buttonTypeToStyleMap[type]}`,
    href: destination,
  };

  const Contents = () => (
    <>
      {label}
      {type === ButtonType.OUTLINE && (
        <Icon
          size={breakpoint === Breakpoint.MOBILE ? 20 : 24}
          type={IconType.ARROW_RIGHT}
        />
      )}
    </>
  );

  return destination.startsWith("/") ? (
    <Link {...props}>
      <Contents />
    </Link>
  ) : (
    <a {...props} target="_blank">
      <Contents />
    </a>
  );
};
