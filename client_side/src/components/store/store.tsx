import React from "react";
import { dumbbells, benches, machines } from "../../store";
import StoreDisplay from "./storeDisplay";
import "./store.css";

class Store extends React.Component {
  render() {
    return (
      <div className="container">
        <StoreDisplay data={dumbbells} type={"dumbbell"} />
        <StoreDisplay data={benches} type={"bench"} />
        <StoreDisplay data={machines} type={"machine"} />
      </div>
    );
  }
}

export default Store;
