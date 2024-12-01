import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div 
            key={index}  // Add a key for each item
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} 
            className='explore-menu-item'
          >
            <img 
              className={category === item.menu_name ? 'active' : ""}  // Add 'active' class if selected
              src={item.menu_image} 
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;