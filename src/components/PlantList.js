import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const results = plants.filter((plant) => (
    plant.name.toLowerCase().includes(search.toLowerCase())
  ))

  const plantItems = results.map((plant) => (
    <PlantCard 
      key={plant.id} 
      id={plant.id} 
      image={plant.image} 
      name={plant.name} 
      price={plant.price}
    />
  ))
  return (
    <ul className="cards">{plantItems}</ul>
  );
}

export default PlantList;
