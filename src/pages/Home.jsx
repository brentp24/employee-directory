import React, { Component } from "react";
import API from "../utils/API.js";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm"
import Container from "../components/Container"



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
          image: emp.picture.medium,
          name: emp.name.first + " " + emp.name.last,
          phone: emp.phone,
          email: emp.email,
          dob: emp.dob.date
        }))
        let newState = { employees };
        this.setState(newState);
      })
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.loadEmployees();
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchRandomUser(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
        console.log(this.state);
      })
      .catch(err => this.setState({ error: err.message }));
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
          <Table employees={this.state.employees}>
          </Table>
        </Container>
      </div>
    );
  }

};

export default Home;
