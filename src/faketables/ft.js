import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

class FakeTable extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  fetchProducts = async () => {
    try {
      const { status, data } = await axios.get('https://fakestoreapi.com/products');
      if (status === 200) {
        this.setState({
          products: data,
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
    this.fetchProducts();
  }

  render() {
    const { products, loader, error } = this.state;

    if (loader) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error loading data.</div>;
    }

    return (
      <>
        <h2>Fake Store Products Table</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image} alt={product.title} width="50" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default FakeTable;
