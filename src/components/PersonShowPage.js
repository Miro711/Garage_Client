import React, { Component } from "react";
import PersonDetails from "./PersonDetails";
import CarList from "./CarList";

class PersonShowPage extends Component {
    render () {
        return (
            <div>
                <PersonDetails
                    id={this.props.id}
                    first_name={this.props.first_name}
                    last_name={this.props.last_name}
                    email={this.props.email}
                    onPersonDelete={this.props.onPersonDelete}
                />
                <h2>Cars</h2>
                <CarList 
                    cars={this.props.cars} 
                    onCarDelete={this.props.onCarDelete}
                />
            </div>
        );
    }
}

export default PersonShowPage;

