import React from "react";

const LanguageInput = () => {
  return (
    <>
      <span>Language:</span>
      <label>
        All
        <input type="radio" name="language" value="" />
      </label>
      <label>
        RU
        <input type="radio" name="language" value="" />
      </label>
      <label>
        EN
        <input type="radio" name="language" value="" />
      </label>
      <label>
        FR
        <input type="radio" name="language" value="" />
      </label>
    </>
  );
};

export default LanguageInput;
