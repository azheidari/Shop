import React, { useState } from "react";

function Search({ searchItems }) {
  const [value, setValue] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value;
    setValue(lowerCase);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    searchItems(value);
  };

  return (
    <div className="bg-black   border-white mr-10">
      <form onSubmit={onsubmit}>
        <input
          className=" border w-full bg-black border-white text-white rounded-3xl  py-1 px-1"
          type="text"
          placeholder="search..."
          value={value}
          onChange={inputHandler}
        />
      </form>
    </div>
  );
}

export default Search;
