import styles from "./page.module.css";
import Image from "next/image";
import { getSheetsData } from "./helpers/sheets";

export default async function Home() {

  // Acá se encarga de obtener los datos de la hoja de cálculo
  const dataSheet = await getSheetsData(
    process.env.GOOGLE_SHEETS_ID,
    "raw_data!A2:K100"
  );

  let {data} = dataSheet;
  console.log("Datos de la hoja de cálculo:", data);      

  return (
    <main className={styles.main}>
      {/* Acá va el contenido principal html */}
      <section className={styles.mosaicoWrapper}>
        <div className={styles.mosaico}>
          {data.values.map((item, index) => {
            const [id, scientificName, commonName, description, relationsChain, taxonomyGroup, extinctionRisk, distribution, environment, relation, imagen_url] = item;
            console.log(imagen_url);
            const imagenSRC =  `/public/ff-img/${imagen_url}.jpg`;
            return(<image src={imagenSRC} width="300" height="300" alt={scientificName}></image>)
          }

          )}
        </div>


        {
          /*
          data.then((res) => {

            if (res.status !== 200) {
              throw new Error(res.message);
            }
            return res?.data;
          }).then((datos) => {
            return datos?.values?.map((item, i) => {
              const [id, scientificName, commonName, description, relationsChain, taxonomyGroup, extinctionRisk, distribution, environment, relation] = item;
              const relChain = relationsChain.split(".").map((item) => item.trim());
              return (
                <figure key={`id-${id}${i}`} className={styles.figure}>
                  <Image
                    src="https://cimanorte.com/wp-content/uploads/swallow-3439543_1920.jpg"
                    alt="Golorondrina"
                    width={500}
                    height={500}
                    className={styles.image} />
                  <figcaption className={styles.figcaption}>
                    <div className={styles.caption_container}>
                      <span className={styles.ide}>{id}</span>
                      <h2 className={styles.figcaption_title}>{scientificName}</h2>
                    </div>
                    <h3 className={styles.figcaption_subtitle}>{commonName}</h3>
                    <p className={styles.figcaption_text}>
                    {description}
                    </p>
                    <div className={styles.figcaption_info}>
                      <ul className={styles.left_list}>
                        {
                          relChain.map((item, i) => {
                            return (
                              <li key={`id-${item}${i}`}>{item}</li>
                            )
                          })
                        }
                      </ul>
                      <ul className={styles.right_list}>
                        <li>{taxonomyGroup}</li>
                        <li>{extinctionRisk}</li>
                        <li>{distribution}</li>
                        <li>{environment}</li>
                      </ul>
                    </div>
                  </figcaption>
                </figure>
              )
            })
          })
          */}
      </section>
      
    </main>
  );
}
