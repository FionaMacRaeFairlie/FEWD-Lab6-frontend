import React from 'react';
import Item from "./Item";

const DisplayFoodItems = ({items}) => {
   return (
       <ul>
           {items.map((food) => {
               return (
                <li key={food.id} > <Item item={food} /></li>
               )
           })}
       </ul>
   );
};
export default DisplayFoodItems;