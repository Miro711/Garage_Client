import React, { Component } from "react";
import { Car } from "../requests";

class CarDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          editing: false,
          year: this.props.year,
          make: this.props.make,
          model: this.props.model,
          price: this.props.price,
          errors: []
        };
    }

    updateCarDetails = () => {
        const updatedYear = this.refs.yearText.value;
        const updatedMake = this.refs.makeText.value;
        const updatedModel = this.refs.modelText.value;
        const updatedPrice = this.refs.priceText.value;
        Car.update(this.props.person_id, this.props.id, {year: updatedYear, make: updatedMake, model: updatedModel, price: updatedPrice}).then((res) => {
            if (res.errors) {
                this.setState({
                    errors: res.errors
                });
            } else {
                this.setState({
                    editing: false,
                    year: updatedYear,
                    make: updatedMake,
                    model: updatedModel,
                    price: updatedPrice,
                })
            }
        });
    }

    render() {
        const { id, person_id, onCarDelete } = this.props;
        return (
            <div>
                {!this.state.editing ? (
                    <div>
                        <h2>{this.state.year} {this.state.make} {this.state.model}</h2>
                        <p>${this.state.price}</p>
                        <button onClick={() => this.setState({ editing: true })}>
                            Edit
                        </button>
                        <button onClick={() => onCarDelete(id, person_id)}>
                            Delete
                        </button>
                    </div>
                ) : (
                    <div>
                        <input type="text" defaultValue={this.state.year} ref="yearText" />
                        <input type="text" defaultValue={this.state.make} ref="makeText" />
                        <input type="text" defaultValue={this.state.model} ref="modelText" />
                        <input type="text" defaultValue={this.state.price} ref="priceText" />
                        <button onClick={this.updateCarDetails}>
                            Update
                        </button>
                        <button onClick={() => this.setState({ editing: false })}>
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        );
    };
}

export default CarDetails;