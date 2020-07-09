import React from "react";
import CarDetails from "./CarDetails";

function CarList(props) {
  return (
    <ul>
      {props.cars.map(car => (
        <li key={car.id}>
          <CarDetails
            year={car.year}
            make={car.make}
            model={car.model}
            price={car.price}
          />
        </li>
      ))}
    </ul>
  );
}

export default CarList;