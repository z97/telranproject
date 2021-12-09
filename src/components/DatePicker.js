import React from "react";
import DateInput from "./DateInput";

const DatePicker = () => {
  return (
    <div>
      <span>Date:</span>
      <DateInput name="start" />
      <DateInput name="end" />
    </div>
  );
};

export default DatePicker;
