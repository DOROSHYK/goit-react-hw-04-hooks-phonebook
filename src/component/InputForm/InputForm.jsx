import React, { Component } from "react";
// import PropTypes from 'prop-types';
import style from "./InputForm.module.css";
class InputForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // console.log(event.currentTarget);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state)
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.Form} onSubmit={this.handleSubmit}>
        <div className={style.InputForm}>
          <label>Имя</label>
          <input
            className={style.FormInput}
            id="name"
            value={name}
            onChange={this.handelChange}
            type="tex"
            name="name"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </div>

        <div className={style.InputForm}>
          <label>Телефон</label>
          <input
            className={style.FormInput}
            id="number"
            value={number}
            onChange={this.handelChange}
            type="tex"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </div>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default InputForm;
