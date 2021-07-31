import styles from "./index.module.scss";

const Viewer = ({ children }) => {
  return <div className={styles.viewer}>{children}</div>;
};

export default Viewer;
