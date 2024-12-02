import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantUpdate() {
  const { id } = useParams(); 
  const [restaurant, setRestaurant] = useState({
    name: '',
    rating: '',
    email: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/restaurant/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
        setIsLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:3000/restaurant/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Restaurant updated successfully!');
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Restaurant</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={restaurant.name}
          onChange={handleInputChange}
        /><br/><br/>
     
        <label>Rating</label>
        <input
          type="text"
          name="rating"
          value={restaurant.rating}
          onChange={handleInputChange}
        /><br/><br/>
     
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={restaurant.email}
          onChange={handleInputChange}
        /><br/><br/>
      
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={restaurant.address}
          onChange={handleInputChange}
        /><br/><br/>
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default RestaurantUpdate;
