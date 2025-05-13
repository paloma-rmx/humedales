import styles from "./page.module.css";
import Heading from "./components/atoms/heading";
import Image from "next/image";
import { getSheetsData } from "./helpers/sheets";

import image from "../public/ff-img/ave9.jpg";

export default function Home() {

  // Acá se encarga de obtener los datos de la hoja de cálculo
  const data = getSheetsData(
    process.env.GOOGLE_SHEETS_ID,
    "raw_data!A2:J39"
  );

  return (
    <main className={styles.main}>
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
                <figure key={id} >
                  <figcaption>
                    <Heading texto={scientificName} orientacion={"horizontal"} />
                    <h3>{commonName}</h3>
                    <p>{description}</p>
                    <p>{relationsChain}</p>
                    <p>{taxonomyGroup}</p>
                    <p>{extinsionRisk}</p>
                    <p>{distribution}</p>
                    <p>{environment}</p>
                    <p>{relation}</p>
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
