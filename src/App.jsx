import { useState } from "react";
import Title from "./Title";
import menu from "./data.js";
import Menu from "./Menu.jsx";
import Categories from "./Categories.jsx";


const App = () => {

  const eachCategory = menu.map((item) => item.category);
  const uniqueCategory = ["all", ...new Set(eachCategory)];
  

  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(uniqueCategory);

  const filterCategories = (selected) =>{
   const filterItems = menu.filter((item) => item.category === selected);
   if(selected === "all"){
    setItems(menu)
   }else{
    setItems(filterItems);
   }
  }

  return(
   <>
   <Title />
   <Categories categories={categories} filter={filterCategories}/>
   <Menu items={items}/>
   </>
  )
};
export default App;
