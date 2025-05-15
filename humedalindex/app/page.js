import styles from "./page.module.css";
import Heading from "./components/atoms/heading";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Acá va el contenido principal html */}
      <section className={styles.section}>
        <figure className={styles.figure}>
          <img src="https://cimanorte.com/wp-content/uploads/swallow-3439543_1920.jpg" alt="Golorondrina" className={styles.image} />
          <figcaption className={styles.figcaption}>
            <div className={styles.caption_container}>
              <span className={styles.ide}>1</span>
              <h2 className={styles.figcaption_title}>Hirundo rustica</h2>
            </div>
            <h3 className={styles.figcaption_subtitle}>Golondrina tijereta</h3>
            <p className={styles.figcaption_text}>
            Golondrina común o andorina es una especie de ave paseriforme de la familia Hirundinidae de hábitos migratorios. Se trata de la golondrina con la mayor área de distribución del mundo. Habita en Europa, Asia, África, América y parte de Australasia. En México se le encuentra en la mayor parte de su territorio. Su alimentación es principlamente de insectos y frutos. 
            </p>
            <div className={styles.figcaption_info}>
              <ul className={styles.left_list}>
                <li>animales.</li> 
                <li>cordados. </li>
                <li>aves. </li>
                <li>aves de percha. </li>
                <li>golondrinas. </li>
                <li>golondrinas típicas.</li> </ul>
              <ul className={styles.right_list}>
                <li>aves</li>
                <li>riesgo menor</li>
                <li>nativa</li>
                <li>terrestre</li>
              </ul>
            </div>
          </figcaption>
        </figure>
      </section>
      
    </main>
  );
}
