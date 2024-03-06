
import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    info: '',
    age: '',
    gender: 'male',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h1>Form App</h1>
      <Form onSubmit={handleSubmit} onChange={handleChange} values={formData} />

      <div>
        <h2>Deyerleri Daxil Edin :</h2>
        <p>Name: {formData.name}</p>
        <p>Surname: {formData.surname}</p>
        <p>Info: {formData.info}</p>
        <p>Age: {formData.age}</p>
        <p>Gender: {formData.gender}</p>
      </div>
    </div>
  );
};

export default App;
