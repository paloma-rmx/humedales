'use client';
import Image from "next/image";
import styles from "../../page.module.css";
import { useState } from "react";

export default function Gridcontainer({ data }) {
    const [activo, setActivo] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
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

  const handleClick = (item) => {
    setActivo(!activo);
    setSelectedItem((prev) => {
        if(!item || item.length === 0) {
            return null;
        }
        return {
            type: item[0],
            id: item[1],
            scientificName: item[2],
            commonName: item[3],
            description: item[4],
            relationsChain: item[5],
            taxonomyGroup: item[6],
            extinctionRisk: item[7],
            distribution: item[8],
            environment: item[9],
            relationship: item[10],
            imagen_url: item[11]
        };
    });
 };

    return (
        <>
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
            onClick={() => handleClick(item)}
              src={"/ff-img/" + item.imagen_url + ".jpg"}
              alt={item.scientificName}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        {
 activo &&
<figure className={styles.figure}>
<Image
src={selectedItem?.imagen_url ? `/ff-img/${selectedItem.imagen_url}.jpg` : "/ff-img/default.jpg"}
alt={selectedItem?.scientificName || "Imagen no disponible"}
width={500}
height={500}
className={styles.image} />
<figcaption className={styles.figcaption}>
<div className={styles.caption_container}>
<span className={styles.ide}>{selectedItem?.id}</span>
<h2 className={styles.figcaption_title}>{selectedItem?.scientificName}</h2>
</div>
<h3 className={styles.figcaption_subtitle}>{selectedItem?.commonName}</h3>
<p className={styles.figcaption_text}>{selectedItem?.description}
</p>
<div className={styles.figcaption_info}>
<ul className={styles.left_list}>
{
relationsChain.split(',').map((item, i) => {
return (
<li key={`id-${item}${i}`}>{item}</li>
 )
 })
}
</ul>
<ul className={styles.right_list}>
<li>{selectedItem?.taxonomyGroup}</li>
<li>{selectedItem?.extinctionRisk}</li>
<li>{selectedItem?.distribution}</li>
<li>{selectedItem?.environment}</li>
</ul>
</div>
</figcaption>
</figure>
}

        </>
    );
}