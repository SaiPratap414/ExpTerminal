import MultichainMemecoinCard from "../components/MultichainMemecoinCard";
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
            <div className={styles.navbar}>
              <div className={styles.column}>
                <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
              </div>
              <div className={styles.column1}>
                <b className={styles.link1}>Mission</b>
                <b className={styles.link1}>Terminal</b>
                <b className={styles.link1}>Ecosystem</b>
                <b className={styles.link1}>Statistics</b>
              </div>
              <div className={styles.column2}>
                <div className={styles.vectorParent}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
      <MultichainMemecoinCard />
    </div>
  );
};

export default Terminal;
