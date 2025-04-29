import styles from "./page.module.css";
import Heading from "./components/atoms/heading";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Acá va el contenido principal html */}
      <Heading texto="Golorondrina" orientacion="vertical"/> 
    </main>
  );
}
