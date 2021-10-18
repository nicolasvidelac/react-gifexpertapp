import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const addToList = (value) => {
    setcategories([value, ...categories]);
  };

  /**
   * metood para comprobar si el elemento ya se encuentra en la lista
   * @param {String} cat
   * @returns true si cat esta en la lista, false si no
   */
  const checkList = (cat) => {
    return !categories.includes(cat);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={addToList} checkList={checkList} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
