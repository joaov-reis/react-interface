import type { CardProps } from "./type";
import styles from './styles.module.css'

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
