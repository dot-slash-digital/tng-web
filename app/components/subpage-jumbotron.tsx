import styles from "@styles/subpage-jumbotron.module.scss";

export default ({
  backgroundImage,
  title,
}: {
  backgroundImage: string;
  title: string;
}) => {
  return (
    <div
      className={styles.component}
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className={styles.title}>{title}</div>
    </div>
  );
};
