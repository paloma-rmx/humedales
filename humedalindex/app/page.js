import styles from "./page.module.css";
import Image from "next/image";
import { getSheetsData } from "./helpers/sheets";

export default function Home() {

  // Acá se encarga de obtener los datos de la hoja de cálculo
  const data = getSheetsData(
    process.env.GOOGLE_SHEETS_ID,
    "raw_data!A2:J39"
  );

  return (
    <main className={styles.main}>
      {/* Acá va el contenido principal html */}
      <section className={styles.section}>

        {
          data.then((res) => {
            if (res.status !== 200) {
              throw new Error(res.message);
            }
            return res?.data;
          }).then((datos) => {
            return datos?.values?.map((item, i) => {
              const [id, scientificName, commonName, description, relationsChain, taxonomyGroup, extinsionRisk, distribution, environment, relation] = item;

              return (
                <figure key={id} className={styles.figure}>
                  <Image
                    src="https://cimanorte.com/wp-content/uploads/swallow-3439543_1920.jpg"
                    alt="Golorondrina"
                    width={500}
                    height={500}
                    className={styles.image} />
                  <figcaption className={styles.figcaption}>
                    <div className={styles.caption_container}>
                      <span className={styles.ide}>1</span>
                      <h2 className={styles.figcaption_title}>{scientificName}</h2>
                    </div>
                    <h3 className={styles.figcaption_subtitle}>{commonName}</h3>
                    <p className={styles.figcaption_text}>
                    {description}
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
              )
            })
          })
        }
      </section>
      
    </main>
  );
}
