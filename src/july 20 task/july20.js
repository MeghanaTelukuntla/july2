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

  render() {
    return (
      <React.Fragment>
       <center><h2>Alumuni of College</h2></center>
        {this.state.loader ? (
          <h3>Please wait........</h3>
        ) : (
          <div className="card-container">
            {this.state.users.map((each, index) => {
              const { name, id, username } = each;
              const productImage = this.state.products[index]?.image;
              return (
                <div className="card" key={id}>
                     {productImage && <img src={productImage} alt={name} height={100} width={100} />}
                  <h4>{name}</h4>
                  <h2>{username}</h2>
                 
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
