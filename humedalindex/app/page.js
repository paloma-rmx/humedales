import styles from "./page.module.css";
import Image from "next/image";
import { getSheetsData } from "./helpers/sheets";

export default async function Home() {
  const dataSheet = await getSheetsData(
    process.env.GOOGLE_SHEETS_ID,
    "raw_data!A2:K100"
  );
  const { data } = dataSheet;
  
  const imageSizes = [
    { w: 4, h: 3 },
    { w: 3, h: 2 },
    { w: 4, h: 4 },
    { w: 3, h: 3 },
    { w: 2, h: 2 },
    { w: 3, h: 4 },
    { w: 2, h: 3 },
  ];

  const occupied = new Set();
  const columns = 18;
  const maxRow = 80;

  function getCellKey(x, y) {
    return x + "," + y;
  }

  function isOccupied(x, y, w, h) {
    for (let dx = 0; dx < w; dx++) {
      for (let dy = 0; dy < h; dy++) {
        if (occupied.has(getCellKey(x + dx, y + dy))) return true;
      }
    }
    return false;
  }

  function markOccupied(x, y, w, h) {
    for (let dx = 0; dx < w; dx++) {
      for (let dy = 0; dy < h; dy++) {
        occupied.add(getCellKey(x + dx, y + dy));
      }
    }
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate positioned items
  const positionedItems = [];
  
  data.values.forEach((item, index) => {
    const [
      id,
      scientificName,
      commonName,
      description,
      relationsChain,
      taxonomyGroup,
      extinctionRisk,
      distribution,
      environment,
      relation,
      imagen_url,
    ] = item;

    const { w, h } = imageSizes[Math.floor(Math.random() * imageSizes.length)];
    
    let placed = false;
    let attempts = 0;
    
    while (!placed && attempts < 1000) {
      const x = randomInt(0, columns - w);
      const y = randomInt(0, maxRow - h);
      
      if (!isOccupied(x, y, w, h)) {
        markOccupied(x, y, w, h);
        
        positionedItems.push({
          id,
          scientificName,
          commonName,
          imagen_url,
          x: x + 1,
          y: y + 1,
          w,
          h,
          index
        });
        
        placed = true;
      }
      attempts++;
    }
  });

  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        {positionedItems.map((item) => (
          <div
            key={"id-" + item.id + "-" + item.index}
            className={styles.gridItem}
            style={{
              gridColumn: item.x + " / span " + item.w,
              gridRow: item.y + " / span " + item.h,
            }}
          >
            <Image
              src={"/ff-img/" + item.imagen_url + ".jpg"}
              alt={item.scientificName}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}