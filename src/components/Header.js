import React from "react";
import DatePicker from "./DatePicker";
import LanguageInput from "./LanguageInput";
import LevelInput from "./LevelInput";
import PlaceInput from "./PlaceInput";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex input-group w-auto">
            <SearchInput />
            <DatePicker />
            <PlaceInput />
            <LevelInput />
            <LanguageInput />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
