import styles from "./page.module.css";
import Heading from "./components/atoms/heading";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Acá va el contenido principal html */}
      <Heading texto="Golorondrina" orientacion="vertical"/>


      <section className={styles.section}>
        <figure className={styles.figure}>
          <img src="https://cimanorte.com/wp-content/uploads/swallow-3439543_1920.jpg" alt="Golorondrina" className={styles.image} />
          <figcaption className={styles.figcaption}>
            <span className={styles.ide}>1</span>
            <h2 className={styles.figcaption_title}>Golorondrina</h2>
            <h3 className={styles.figcaption_subtitle}>Hirundinidae</h3>
            <p className={styles.figcaption_text}>
              Las golondrinas son aves migratorias que se encuentran en todo el mundo. Son conocidas por su vuelo ágil y su capacidad para construir nidos de barro. Se alimentan principalmente de insectos voladores y son un símbolo de la llegada de la primavera.
            </p>
            <div className={styles.figcaption_info}>
              <ul className={styles.left_list}>
                <li><strong>Nombre científico:</strong> Hirundo rustica</li>
                <li><strong>Distribución:</strong> Se encuentran en todo el mundo, excepto en las regiones polares.</li>
                <li><strong>Hábitat:</strong> Prefieren áreas abiertas cerca de cuerpos de agua.</li>
                <li><strong>Alimentación:</strong> Insectos voladores, como moscas y mosquitos.</li>
              </ul>
              <ul class={styles.left_list}>
                <li><strong>Nombre científico:</strong> Hirundo rustica</li>
                <li><strong>Distribución:</strong> Se encuentran en todo el mundo, excepto en las regiones polares.</li>
                <li><strong>Hábitat:</strong> Prefieren áreas abiertas cerca de cuerpos de agua.</li>
                <li><strong>Alimentación:</strong> Insectos voladores, como moscas y mosquitos.</li>
              </ul>
            </div>
          </figcaption>
        </figure>
      </section>
      
    </main>
  );
}
