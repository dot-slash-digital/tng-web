import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/meet-the-team.module.scss";

export default () => {
  const { teamMembers, title } = content.home.meetTheTeam;

  return (
    <div className={styles.component}>
      <SectionContainer>
      </SectionContainer>
    </div>
  );
};


