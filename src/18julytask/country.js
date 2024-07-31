import axios from "axios";
import React, { Component } from "react";

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            loader: true,
            error: false,
        };
    }

    async fetchCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            this.setState({
                countries: response.data,
                loader: false,
            });
            console.log(response, "response");
        } catch (err) {
            this.setState({
                error: true,
                loader: false,
            });
        }
    }

    componentDidMount() {
        this.fetchCountries();
    }

    render() {
        const { countries, loader, error } = this.state;

        if (loader) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error fetching countries.</div>;
        }

        return (
            <div>
                <h1>Country List</h1>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Official Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => (
                            <tr key={country.cca3}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>
                                    {country.name.official}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CountryList;
