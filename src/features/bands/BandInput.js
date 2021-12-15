import React, { useState } from "react";


function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onBandSubmit(name);
    setName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='name'>name</label>
          <input type='text' id='name' name='name' onChange={handleChange} value={name} />
        </p>
        <input type='submit' value='Add Band' />
      </form>
    </div>
  );
}

export default BandInput;
