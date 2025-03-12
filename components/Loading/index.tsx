import styles from "./style.module.scss";
export default function Loading() {
  return (
    <svg width="304" height="304" viewBox="0 0 304 304" className="">
      <circle
        cx="152"
        cy="152"
        r="150"
        fill="none"
        strokeWidth="2"
        strokeDasharray="10,8"
        className={styles.dash}
      />

      <circle
        cx="152"
        cy="152"
        r="45"
        fill="none"
        strokeWidth="90"
        strokeDasharray="282.74"
        strokeDashoffset="282.74"
        className={styles.loading}
      />
    </svg>
  );
}
