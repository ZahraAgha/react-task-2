
import React from 'react';

const Form = ({ onSubmit, onChange, values }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <br />

      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={values.surname}
          onChange={onChange}
        />
      </label>
      <br />

      <label>
        Info:
        <input
          type="text"
          name="info"
          value={values.info}
          onChange={onChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={onChange}
        />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={values.gender} onChange={onChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
