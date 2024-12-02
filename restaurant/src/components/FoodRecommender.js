import { useState } from "react";

const FoodRecommender = () => {
  const [selectedFlavour, setSelectedFlavour] = useState();

  const updateSelectedFood = (event) => {
    setSelectedFlavour(event.target.value);
  };

  // consider how to properly model this as data (array) to be passed in
  // model and explain in class
  return (
    <section class="food-recommender">
      <h2>What kind of food would you like to eat today?</h2>
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "sweet"}
        type="radio"
        id="sweet"
        value="sweet"
        name="sweet"
      />
      <label for="sweet">Sweet</label>
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "sour"}
        type="radio"
        id="sour"
        value="sour"
        name="sour"
      />
      <label for="sour">Sour</label>
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "savoury"}
        type="radio"
        id="savoury"
        value="savoury"
        name="savoury"
      />
      <label for="savoury">Savoury</label>
      <input
        onChange={updateSelectedFood}
        checked={selectedFlavour === "expensive"}
        type="radio"
        id="expensive"
        value="expensive"
        name="expensive"
      />
      <label for="expensive">Expensive</label>
      <div>Your selected flavour is {selectedFlavour}</div>
    </section>
  );
};

export default FoodRecommender;
