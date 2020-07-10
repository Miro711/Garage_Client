import React, { Component } from "react";
import { Person } from "../requests";

class PersonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          editing: false,
          firstName: this.props.first_name,
          lastName: this.props.last_name,
          errors: []
        };
    }

    updatePersonDetails = () => {
        const updatedFirstName = this.refs.firstText.value;
        const updatedLastName = this.refs.lastText.value;
        Person.update(this.props.id, {first_name: updatedFirstName, last_name: updatedLastName}).then((res) => {
            if (res.errors) {
                this.setState({
                    errors: res.errors
                });
            } else {
                this.setState({
                    editing: false,
                    firstName: updatedFirstName,
                    lastName: updatedLastName,
                })
            }
        });
    }

    render() {
        const { id, onPersonDelete } = this.props;
        return (
            <div className="card-header">
                {!this.state.editing ? (
                    <div>
                        <h2>{this.state.firstName} {this.state.lastName}</h2>
                        <button className="btn btn-primary mr-2" onClick={() => this.setState({ editing: true })}>
                            Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => onPersonDelete(id)}>
                            Delete
                        </button>
                    </div>
                ) : (
                    <div>
                        <input type="text" defaultValue={this.state.firstName} ref="firstText" />
                        <input type="text" defaultValue={this.state.lastName} ref="lastText" />
                        <button className="btn btn-primary mr-2" onClick={this.updatePersonDetails}>
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

export default PersonDetails;