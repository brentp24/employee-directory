import React, { Component } from "react";
import API from "../utils/API.js";
import Table from "../components/Table";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: []
    };
  }

  loadEmployees = () => {
    API.searchRandomUser()
      .then(res => {
        let employees = res.data.results;

        employees = employees.map(emp => ({
           id: emp.id.value,
          image: emp.picture.thumbnail,
           name: emp.name.first + " " + emp.name.last,
           phone: emp.phone,
           email: emp.email,
           dob: emp.dob.date
        }))
        let newState = {employees};
        this.setState(newState);
      })
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.loadEmployees();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Find your colleagues</h1>
        <Table employees={this.state.employees}>
        </Table>
      </div>
    );
  }

};

export default Home;
