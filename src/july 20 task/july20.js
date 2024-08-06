import axios from "axios";
import { Component } from "react";
import React from "react";
import './july20.css'; // Import the CSS file

class Task extends Component {
  state = {
    users: [],
    products: [],
    loader: true,
    error: false,
    searchTerm: "", // Add search term state
  };

  fetchUsersAndProducts = async () => {
    try {
      const [userResponse, productResponse] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://fakestoreapi.com/products")
      ]);

      if (userResponse.status === 200 && productResponse.status === 200) {
        this.setState({
          users: userResponse.data,
          products: productResponse.data,
          loader: false,
        });
      }
    } catch (err) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  componentDidMount() {
    this.fetchUsersAndProducts();
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { users, products, loader, searchTerm } = this.state;

    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <React.Fragment>
        <h2>Hello</h2>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search by name or username" 
          value={searchTerm}
          onChange={this.handleSearch} 
        />
        {loader ? (
          <h3>Please wait........</h3>
        ) : (
          <div className="card-container">
            {filteredUsers.map((each, index) => {
              const { name, id, username } = each;
              const productImage = products[index]?.image;
              return (
                <div className="card" key={id}>
                  <h4>{name}</h4>
                  <h2>{username}</h2>
                  {productImage && <img src={productImage} alt={name} />}
                </div>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Task;
