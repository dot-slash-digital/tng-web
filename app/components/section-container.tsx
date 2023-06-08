import { ReactNode } from "react";

import styles from "@styles/section-container.module.scss";

export default ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
