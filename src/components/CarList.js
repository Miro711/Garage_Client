import React from "react";
import CarDetails from "./CarDetails";

function CarList(props) {
  return (
    <ul id={`owner-${props.person_id}`}>
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
  );
}

export default CarList;