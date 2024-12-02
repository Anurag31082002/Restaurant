import Banner from "./Banner";
import FoodRecommender from "./FoodRecommender";
import Header from "./Header";
import "../styles.css";

const menuItems = [
 
];


export default function App() {
  return (
    <div className="App">
      <Header restaurantName="Our Resto List" menuItems={menuItems} />
      {/* have students add the banner in themselves */}
      <Banner
        title="Fast food, made fresh, right to your door"
        subtitle="Explore Our Menu"
        imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
      />
      <FoodRecommender />
    </div>
  );
}
