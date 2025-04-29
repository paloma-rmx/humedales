import styles from "./page.module.css";
import heading from "./components/atoms/heading";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Acá va el contenido principal html */}
      <heading texto="Hirundo rustica" />
    </main>
  );
}
