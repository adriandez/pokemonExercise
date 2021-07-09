import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // eslint-disable-next-line
  const [options, setOptions] = useState([
    "Normal",
    "Fight",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fary",
  ]);
  const [selected, setSelected] = useState("Normal");

  useEffect(() => {
    setSelected(watch("typeOne"));
  }, [watch("typeOne")]);

  const filterOptions = options.filter((e) => e !== selected);

  return (
    <section className="Form">
      <h3>Create New Pokemon</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapperForm">
          <input
            {...register("pokemon", { required: true })}
            placeholder="Name"
          />
          {errors.name && <h5>This field is required</h5>}
        </div>
        <div className="wrapperForm">
          <input
            {...register("image", { required: true })}
            placeholder="Image Url"
          />
        </div>
        <div className="wrapperForm">
          <select {...register("typeOne", { required: true })}>
            {options.map((element, index) => (
              <option key={index}>{element}</option>
            ))}
          </select>
        </div>
        <div className="wrapperForm">
          <select {...register("typeTwo")}>
            {filterOptions.map((element, index) => (
              <option key={index}>{element}</option>
            ))}
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Form;
