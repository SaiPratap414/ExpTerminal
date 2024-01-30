import styles from "./Terminal.module.css";

const Terminal = () => {
  return (
    <div className={styles.terminal}>
      <div className={styles.header14Wrapper}>
        <div className={styles.header14}>
          <div className={styles.placeholderLightbox}>
            <div className={styles.playButton} />
            <div className={styles.frameParent}>
              <div className={styles.terminalWrapper}>
                <div className={styles.terminal1}>Terminal</div>
              </div>
              <div className={styles.linkWrapper}>
                <div className={styles.link}>Coming Soon</div>
              </div>
            </div>
            <div className={styles.navbar2}>
              <div className={styles.container}>
                <div className={styles.column}>
                  <img
                    className={styles.omnicatIcon}
                    alt=""
                    src="/omnicat.svg"
                  />
                </div>
                <div className={styles.column1}>
                  <b className={styles.text}>Mission</b>
                  <b className={styles.text}>Terminal</b>
                  <b className={styles.text}>Ecosystem</b>
                  <b className={styles.text}>Statistics</b>
                </div>
                <div className={styles.column2}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/subtract.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer4}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
            <b className={styles.link}>The First ever Multichain Memecoin</b>
          </div>
          <div className={styles.links}>
            <b className={styles.text}>Link One</b>
            <b className={styles.text}>Link Two</b>
            <b className={styles.text}>Link Three</b>
            <b className={styles.text}>Link Four</b>
            <b className={styles.text}>Link Five</b>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/subtract.svg" />
            </div>
          </div>
        </div>
        <b className={styles.link}>© All rights reserved, 2024</b>
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <b className={styles.text}>2023 Relume. All right reserved.</b>
            <div className={styles.row}>
              <b className={styles.link12}>Privacy Policy</b>
              <b className={styles.link12}>Terms of Service</b>
              <b className={styles.link12}>Cookies Settings</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
