import React from "react";

const DateInput = ({ name }) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <label htmlFor={name}>{name} date:</label>
      <input
        type="date"
        id={name}
        name={"trip-" + name}
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
      />
    </>
  );
};

export default DateInput;
