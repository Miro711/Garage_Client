import React, {Component} from "react";
import PersonDetails from "./PersonDetails";
import CarList from "./CarList";
import onePersonData from "../onePersonData";

class PersonShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {...onePersonData},
        };
    }
    render() {
        return (
            <main>
              <PersonDetails
                {...this.state.person}
              />
              <h2>Cars</h2>
              <CarList cars={this.state.person.cars} />
            </main>
          );
    }
}

export default PersonShowPage;

