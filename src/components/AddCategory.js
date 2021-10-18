import React, { useState } from "react";

import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, checkList }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 3) {
      if (checkList(inputValue)) {
        setCategories(inputValue);
      } else {
        console.error("La categoria ya se encuentra en la lista");
      }
    } else {
      console.error("La categoria debe tener al menos 3 cataracteres");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Ingrese nueva categoria:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Gordita"
        />
      </label>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  checkList: PropTypes.func.isRequired,
};
