import React , {  useState, useEffect, useCallback } from "react";
import Item from "./Item";

const MenuItems = () => {
  const [items, setMenuItems]=useState([{
    id:"",
    name:"",
    price:"",
    category:"",
    available:"",
  }]);

  const fetchData = useCallback(async () => {
    const url = "http://localhost:3001/food";
    const data = await fetch(url);
    const foods = await data.json();
    console.log(foods)
    setMenuItems(foods);
    console.log(items)
  },[]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData ]);
  return (
    <>
    <h2 className="menu">Menu</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu">
            <ul>
              {items.map((item) => (
               <li key={item.id} ><Item item={item} /></li>
               ))}
            </ul>
          </div>
          <div className="col-6">
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default MenuItems;
