import React from "react";
import Moment from "moment";
import "./style.css";
//copied from https://codesandbox.io/s/table-sorting-example-ur2z9?from-embed=&file=/src/App.js:51-977
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

function Table(props) {
  const { items, requestSort, sortConfig } = useSortableData(props.shown);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className="table is-fullwidth">
      <thead className="thead-dark">
        <tr>
          <th>Image</th>
          <th>
            <button type="button" onClick={() => requestSort('firstName')}
              className={getClassNamesFor('firstName')}
            >
              First Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort('lastName')}
              className={getClassNamesFor('lastName')}>
              Last Name
            </button>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>
            <button type="button" onClick={() => requestSort('dob')}
              className={getClassNamesFor('dob')}>
              DOB
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td><img src={item.image} alt={item.first} /> </td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
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
