import React from "react";
import Moment from "moment";
import "./style.css";

function Table(props) {
  return (
    <table className="table is-fullwidth">
      <thead className="thead-dark">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(item => (
          <tr key={item.id}>
            <td><img src={item.image} alt={item.name} /> </td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td> {Moment(item.dob).format("MMMM D, YYYY")}</td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

export default Table;
