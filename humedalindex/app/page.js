import styles from "./page.module.css";
import Image from "next/image";
import { getSheetsData } from "./helpers/sheets";
import Gridcontainer from "./components/molecules/Gridcontainer";

export default async function Home() {
  const dataSheet = await getSheetsData(
    process.env.GOOGLE_SHEETS_ID,
    "raw_data!A2:Z1000"
  );
  const { data } = dataSheet;
  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        <Gridcontainer data={data} />
      </div>
    </main>
  );
}