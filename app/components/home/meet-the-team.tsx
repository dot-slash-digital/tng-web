import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/meet-the-team.module.scss";

export default () => {
  const { teamMembers, title } = content.home.meetTheTeam;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.container}>
          <div className={styles.title}>{title}</div>
          <div className={styles["text-box"]}>
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className={styles["tm-box"]}>
                  <div className={styles["tm-image"]}></div>
                  <div className={styles["team-member"]}>{member.title}</div>
                  <div className={styles["tm-description"]}>
                    {member.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
