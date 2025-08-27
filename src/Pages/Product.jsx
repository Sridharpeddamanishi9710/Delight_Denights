import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import Description from '../components/Description/Description';

const Product = () => {
  const {all_menu_items} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_menu_items.find((e)=> e.id === parseInt(productId));
  return (
    <div>
     <ProductDisplay product={product}/>
     <Description product={product}/>
     <RelatedProducts product={product}/>
    </div>
  )
}

export default Product