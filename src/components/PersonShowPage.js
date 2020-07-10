import React, { Component } from "react";
import PersonDetails from "./PersonDetails";
import CarList from "./CarList";

class PersonShowPage extends Component {
    render () {
        return (
            <div className="card">
                <PersonDetails
                    id={this.props.id}
                    first_name={this.props.first_name}
                    last_name={this.props.last_name}
                    email={this.props.email}
                    onPersonDelete={this.props.onPersonDelete}
                />
                <CarList
                    person_id={this.props.id} 
                    cars={this.props.cars} 
                    onCarDelete={this.props.onCarDelete}
                    owners={this.props.owners}
                />
            </div>
        );
    }
}

export default PersonShowPage;

