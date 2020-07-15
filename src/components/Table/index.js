import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table is-striped is-fullwidth">
                <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
        </tr>
    </thead>
    {props.employees.map(item => (
    <tr key={item.id}>
        <td>{item.image} </td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.DOB}</td>
    </tr>
    ))}
  </table>

  )}

export default Table;
