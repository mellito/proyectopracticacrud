import React, { useState } from "react";
import Button from "../../components/Buttton";
import Input from "../../components/Input";
import { createPerson } from "../../services/user.js";

const CreatePerson = () => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await createPerson(form);
    console.log(data);
    setForm({});
  };
  return (
    <div>
      <h3>Create person</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ingresa tu nomber"
          name="name"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Ingresa tu apellido"
          name="last"
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Ingresa tu number"
          name="cedula"
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Ingresa tu edad"
          name="edad"
          onChange={handleChange}
        />
        <Button type="submit" name="Crear" />
      </form>
    </div>
  );
};

export default CreatePerson;
