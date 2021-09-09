import React from "react";
import shortid from "shortid";
import style from "./PhoneBook.module.css";

const Phonebook = ({ date, onDelete }) => {
  // const keyId = shortid.generate();

  return (
    <div className={style.itemContainer}>
      <ul>
        {date.map(({ name, number }) => (
          <li className={style.item} key={shortid.generate()}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              className={style.deleteButton}
              type="button"
              onClick={() => onDelete(name)}
            >
              <p className={style.centr}>❌</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
