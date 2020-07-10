import React from "react";
import PersonDetails from "./PersonDetails";
import CarList from "./CarList";

function PersonShowPage(props) {
    return (
        <div>
            <PersonDetails
                first_name={props.first_name}
                last_name={props.last_name}
                email={props.email}
                onPersonDelete={props.onPersonDelete}
            />
            <h2>Cars</h2>
            <CarList cars={props.cars} />
        </div>
    );
}

export default PersonShowPage;

