import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    return (
      <>
        <div className="container mt-3">
            <h2>API Call By Raghvendra</h2>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Email</th>
              <th scope="col">First Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Handle image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users
              ? this.state.users.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.avatar}</td>
                  </tr>
                ))
              : null}
          </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Home;
