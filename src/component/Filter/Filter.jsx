import React from "react";
import style from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <div className={style.FilterContainer}>
        <label>Find contacts by name</label>
        <input
          className={style.FilterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Filter;
