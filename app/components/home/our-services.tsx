import './fonts.scss';

import SectionContainer from "@components/section-container";

import styles from "@styles/home/our-services.module.scss";

export default () => {
  const rectangleStyle = {
    width: '639px',
    height: '240px',
    marginRight: '48px',
    background: '#e0e0e0',
    
  };
  const contentStyle = {
    justifyContent: 'left',
    marginRight: '21px', // Add margin to the left
  }; 
  return (
    <div className={styles.component}>
        <SectionContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Our Services</h1>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
                <div style={rectangleStyle}></div>
                <div style={contentStyle}>
                  <h2 className="Mulish">Home Remodeling</h2>
                  <p>Service description goes here Service description goes here Service description goes here Service description goes here Service description goes here Service description goes here</p>
                </div>

              </div>
              <div style={contentStyle}>
                <div style={rectangleStyle}></div>
                <h2>New Home Construction</h2>
                <p>Service description goes here Service description goes here Service description goes here Service description goes here</p>

              </div>
            </div>
          </div>

        </SectionContainer>
    </div>
  );
};


