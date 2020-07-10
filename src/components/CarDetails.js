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
          ownerId: this.props.person_id,
          errors: []
        };
    }

    updateCarDetails = () => {
        const updatedYear = this.refs.yearText.value;
        const updatedMake = this.refs.makeText.value;
        const updatedModel = this.refs.modelText.value;
        const updatedPrice = this.refs.priceText.value;
        const updatedOwnerId = this.refs.ownerText.value;
        Car.update(this.props.person_id, this.props.id, {year: updatedYear, make: updatedMake, model: updatedModel, price: updatedPrice, person_id: updatedOwnerId}).then((res) => {
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
                    ownerId: updatedOwnerId
                })
            }
        });
        if (updatedOwnerId !== this.props.person_id) {
            var carNodeToMove = document.getElementById(`car-${this.props.id}`);
            var newOwnerNode = document.getElementById(`owner-${updatedOwnerId}`)
            if (newOwnerNode) {
                newOwnerNode.prepend(carNodeToMove);     
            }
        }
    }

    render() {
        const { id, person_id, onCarDelete, owners } = this.props;
        const carOwnerId = this.state.ownerId;
        return (
            <div className="card mb-4 p-2">
                {!this.state.editing ? (
                    <div>
                        <h2>{this.state.year} {this.state.make} {this.state.model}</h2>
                        <p>${this.state.price}</p>
                        <button className="btn btn-primary mr-2" onClick={() => this.setState({ editing: true })}>
                            Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => onCarDelete(id, person_id)}>
                            Delete
                        </button>
                    </div>
                ) : (
                    <div>
                        <input type="text" defaultValue={this.state.year} ref="yearText" />
                        <input type="text" defaultValue={this.state.make} ref="makeText" />
                        <input type="text" defaultValue={this.state.model} ref="modelText" />
                        <input type="text" defaultValue={this.state.price} ref="priceText" />
                        <div>
                            <select name="cars" ref="ownerText" >
                            {
                                owners.map(function(owner) { 
                                    return (<option key={owner.id} value={owner.id} selected={carOwnerId === owner.id}>{owner.name}</option>);
                                })
                            }
                            </select>
                        </div>
                        <button className="btn btn-primary mr-2" onClick={this.updateCarDetails}>
                            Update
                        </button>
                        <button className="btn btn-danger" onClick={() => this.setState({ editing: false })}>
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        );
    };
}

export default CarDetails;