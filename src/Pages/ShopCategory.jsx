import React, { useContext } from 'react';
import "../CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  
  const { all_menu_items } = useContext(ShopContext);

  const filteredItems = all_menu_items.filter(item => item.category === category);

  const explore=()=>{
    alert("It will be ready soon")
  }

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-products">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
      <div className="shopcategory-loadmore">
        <button className='explore_more' onClick={()=>explore()} >Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
