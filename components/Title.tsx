import styles from "@/styles/Title.module.css";

interface Title {
  title: string;
}

export default function Title({ title }: Title) {
  return <h2 className={styles.title}>{title}</h2>;
}
