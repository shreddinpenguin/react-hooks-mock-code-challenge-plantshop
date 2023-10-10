import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({ onSubmit, price, setPrice }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleImageChange(e){
    setImage(e.target.value)
  }

  function handlePriceChange(e){
    setPrice(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    onSubmit({
      id: uuid(),
      name,
      image,
      price
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameChange} value={name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageChange} value={image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceChange} value={price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
