import React from "react";
import DumbbellStore from "./dumbbellStore";
import MachineStore from "./machineStore";
import BenchStore from "./benchStore";
import "./store.css";

class Store extends React.Component {
  render() {
    return (
      <div className="container">
        <DumbbellStore />
        <MachineStore />
        <BenchStore />
      </div>
    );
  }
}

export default Store;
