import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  
  const [search, setSearch] = useState("")
  const [price, setPrice] = useState("")

  function handleSearch(e){
    setSearch(e.target.value)
  }

  function handlePlantFormSubmit(newPlant){
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm onSubmit={handlePlantFormSubmit} price={price} setPrice={setPrice}/>
      <Search search={search} handleSearch={handleSearch} />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
