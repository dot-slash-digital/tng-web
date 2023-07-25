import Button, { ButtonType } from "@components/button";
import SectionContainer from "@components/section-container";
import content from "@content";
import { ProcessItem } from "@types";
import { Breakpoint, useWindowSize } from "../../utils";

import styles from "@styles/home/our-process.module.scss";

const Card = ({
  button,
  description,
  icon,
  index,
  title,
}: ProcessItem & { index: number }) => {


  return (
    <div className={styles.card}>
      <div className={styles.circle}>
        <div className={styles.number}>{index + 1}</div>
      </div>
      <div
        className={styles.icon}
        style={{ backgroundColor: `url(${icon})` }}
      />
      <div>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-description"]}>
          {description.map((paragraph, index) => (
            <div className={styles["card-paragraph"]} key={index}>
              {paragraph}
            </div>
          ))}
        </div>
        {button && (
          <div className={styles["card-button"]}>
            <Button {...button} type={ButtonType.OUTLINE} />
          </div>
        )}
      </div>
    </div>
  );
};

export default () => {
  const { list, title } = content.home.ourProcess;
  const { breakpoint } = useWindowSize();

  // size={breakpoint === Breakpoint.MOBILE ? 20 : 24}

  const cards = [
    list
      .map((card, index) => ({ ...card, index }))
      .filter(({ index }) => index % 2 === 0),
    list
      .map((card, index) => ({ ...card, index }))
      .filter(({ index }) => index % 2 !== 0),
  ];

const cards_resp = [list.map((card, index) => ({ ...card, index}))];

  return (

      <div className={styles.component}>
        <SectionContainer>
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            {breakpoint === Breakpoint.DESKTOP || breakpoint === Breakpoint.SMALL_DESKTOP?
            <div className={styles.columns}>
              {cards.map((column, columnIndex) => (
                <div className={styles.column} key={columnIndex}>
                  {column.map((card) => (
                    <Card {...card} key={card.index} />
                  ))}
                </div>
              ))}
            </div>
            : 
            <div className={styles.columns}>
            {cards_resp.map((column, columnIndex) => (
              <div className={styles.column} key={columnIndex}>
                {column.map((card) => (
                  <Card {...card} key={card.index} />
                ))}
              </div>
            ))}
          </div>}
          
          </div>
        </SectionContainer>
      </div>
  );
};
