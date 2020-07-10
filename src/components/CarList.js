import React from "react";
import CarDetails from "./CarDetails";

function CarList(props) {
    return (
        <div className="card-body">
            <ul id={`owner-${props.person_id}`} className="no-bullets">
                {props.cars.map(car => (
                    <li key={car.id} id={`car-${car.id}`}>
                        <CarDetails
                            id={car.id}
                            year={car.year}
                            make={car.make}
                            model={car.model}
                            price={car.price}
                            person_id={car.person_id}
                            onCarDelete={props.onCarDelete}
                            owners={props.owners}
                        />
                    </li>
                ))}
            </ul>
        </div>
  );
}

export default CarList;