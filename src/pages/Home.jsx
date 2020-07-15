import React, { Component } from "react";
import API from "../utils/API.js";
import Table from "../components/Table";


const employees = [
  {
    id: 1,
    name: "Tom Peterson",
    image: "",
    phone: "222-2222",
    email: "tom@test.com",
    DOB: "09/21/1981"
  }
];

class Home extends Component {
  constructor(props)
   {super(props) 
    this.state = {
    employees: []
  };
}

loadEmployees = () => {
  API.searchRandomUser()
    .then(res => this.setState({ employees: res }))
    .catch(err => console.log(err));
}

  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.loadEmployees();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Find your colleagues</h1>
        <Table employees={employees}>
          </Table>
      </div>
    );
  }

};

export default Home;
