import React, { Component } from "react";
import API from "../utils/API.js";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm"
import Container from "../components/Container"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      searchResults: [],
      shown: []
    };
  }
  loadEmployees = () => {
    API.getDirectory()
      .then(res => {
        let employees = res.data.results;
        let shown = []
        shown = employees.map(emp => ({
          id: emp.id.value,
          image: emp.picture.medium,
          firstName: emp.name.first,
          lastName: emp.name.last,
          phone: emp.phone,
          email: emp.email,
          dob: emp.dob.date
        }))
        let newState = { shown, employees };
        this.setState(newState);

      })

  }

  componentDidMount() {

    this.loadEmployees();
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let employees = this.state.employees;
    const shown = employees
    .filter(emp =>
      (emp.name.first +" " + emp.name.last).includes(this.state.search)
    )
    .map(emp => ({
      id: emp.id.value,
      image: emp.picture.medium,
      firstName: emp.name.first,
      lastName: emp.name.last,
      phone: emp.phone,
      email: emp.email,
      dob: emp.dob.date
    }))
    let newState = { shown, employees };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Find your colleagues</h1>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Table shown={this.state.shown}>
          </Table>
        </Container>
      </div>
    );
  }

};

export default Home;
