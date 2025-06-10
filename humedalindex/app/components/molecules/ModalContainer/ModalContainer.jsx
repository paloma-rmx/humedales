"use client";
import styles from '@/app/page.module.css'
import Image from 'next/image';

export default function ModalContainer({ item, showModal }) {
  return (
    <>
      {
      showModal && (
        <figure className={styles.figure}>
          <button style={{ padding:"16px", backgroundColor:"transparent", border: "none", position: "absolute", right: 0, top: 0, cursor: "pointer", fontWeight: "bold" }} onClick={() => showModal(false)}>X</button>
          <Image
            src={
              item?.imagen_url
                ? `/ff-img/${item.imagen_url}.jpg`
                : "/ff-img/default.jpg"
            }
            alt={item?.scientificName || "Imagen no disponible"}
            width={500}
            height={500}
            className={styles.image}
          />
          <figcaption className={styles.figcaption}>
            <div className={styles.caption_container}>
              <span className={styles.ide}>{item?.id}</span>
              <h2 className={styles.figcaption_title}>
                {item?.scientificName}
              </h2>
            </div>
            <h3 className={styles.figcaption_subtitle}>
              {item?.commonName}
            </h3>
            <p className={styles.figcaption_text}>{item?.description}</p>
            <div className={styles.figcaption_info}>
              <ul className={styles.left_list}>
                {item?.relationsChain.split(",").map((relation, i) => {
                  return <li key={`id-${relation}${i}`}>{relation}</li>;
                })}
              </ul>
              <ul className={styles.right_list}>
                <li>{item?.taxonomyGroup}</li>
                <li>{item?.extinctionRisk}</li>
                <li>{item?.distribution}</li>
                <li>{item?.environment}</li>
              </ul>
            </div>
          </figcaption>
        </figure>
      )
    }
    </>
    
  );
}
