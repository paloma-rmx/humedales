'use client';

import { useState } from "react";
import Image from "next/image";
import ModalContainer from "../../molecules/ModalContainer/ModalContainer";

export default function ClientImage({ item }) {
  const [activo, setActivo] = useState(false);
  const [selectedItem, setSelectedItem] = useState(item);
  const handleClick = (item) => {
    setActivo(!activo);
    setSelectedItem((prev) => {

      if (!item || Object.keys(item).length === 0) {
        return null;
      }

      return {
        id: item.id,
        scientificName: item.scientificName,
        commonName: item.commonName,
        imagen_url: item.imagen_url,
        description: item.description,
        relationsChain: item.relationsChain,
        taxonomyGroup: item.taxonomyGroup,
        extinctionRisk: item.extinctionRisk,
        distribution: item.distribution,
        environment: item.environment,
        relation: item.relation,
        color: item.color || null
      };
    });
  };
  return (
    <>
      <Image
        onClick={() => handleClick(item)}
        src={"/ff-img/" + item.imagen_url + ".jpg"}
        alt={item.scientificName}
        fill
        style={{ objectFit: "contain" }}
      />
      {
        activo && <ModalContainer item={selectedItem} showModal={setActivo} />
      }
    </>
  );
}