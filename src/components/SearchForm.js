import React from "react";

export default function SearchForm(props) {

  const handleChanges = e => {
    props.setQuery(e.target.value)
  }

  return (
    <section className="search-form">
      <label htmlFor="search">Search Characters</label>
      <input type="text" 
      name="search"
      onChange={handleChanges} />
    </section>
  );
}
