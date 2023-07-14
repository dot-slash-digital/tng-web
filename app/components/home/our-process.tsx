import button from "@components/button";
import SectionContainer from "@components/section-container";
import content from "@content";

import styles from "@styles/home/our-process.module.scss";

export default () => {
  const { list, title } = content.home.ourProcess;

  

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.title}>{title}</div>
        <div className={styles.container}>
          <div className={styles["sub-container-left"]}>
            {list.map((step, index) => (
              <div key={index}>
                {(index%2===0) && (
                <div className={styles.rectangle}>
                  <div className={styles.circle}>
                    <div className={styles["circle-num"]}>{index + 1}</div>  
                  </div>
                  <div className={styles.square}/>
                  <div className={styles["text-box"]}>
                    <div className={styles["sub-title"]}>
                    {step.title}
                    </div>
                    {step.description.map((text, index) => (
                    <div className={styles.description}>
                      {text}
                    </div>
                    ))}
                    {step.button && 
                      <div className={styles.button}> 
                        <a className={styles["button-text"]} href={step.button.destination} >
                        {step.button.label}
                        </a>
                        <div className={styles.icon}/> 
                      </div>
                    }
                  </div>
                </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles["sub-container-right"]}>
          {list.map((step, index) => (
              <div key={index}>
                {(index%2!==0) && (
                <div className={styles.rectangle}>
                  <div className={styles.circle}>
                    <div className={styles["circle-num"]}>{index + 1}</div> 
                  </div>
                  <div className={styles.square}/>
                  <div className={styles["text-box"]}>
                    <div className={styles["sub-title"]}>
                    {step.title}
                    </div>
                    {step.description.map((text, index) => (
                    <div className={styles.description}>
                      {text}
                    </div>
                    ))}
                    {step.button && 
                      <div className={styles.button}> 
                      <a className={styles["button-text"]} href={step.button.destination} >
                      {step.button.label}
                      </a>
                      <div className={styles.icon}/> 
                    </div>                    
                    }
                  </div>
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

