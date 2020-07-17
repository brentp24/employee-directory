import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employees">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employeeSearch"
          // list="breeds"
          type="text"
          className="form-control"
          placeholder="search by employee"
          id="employeeSearch"
        />
        {/* <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist> */}
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
