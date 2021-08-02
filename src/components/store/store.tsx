import React from "react";
import { dumbbellStore, machines, benches } from "../../store";
import { dumbbell, machine, bench } from "../../interfaces/interfaces";
import "./store.css";

class Store extends React.Component {
  render() {
    let key1 = -1;
    let key2 = -1;
    let key3 = -1;
    return (
      <div className="container">
        {dumbbellStore.map((item: dumbbell) => {
          ++key1;
          return (
            <div key={key1} className="storeItem">
              <img alt="gym item" src={item.image} />
              <br />
              <span className="material">{item.material} </span>
              <span className="item">{item.item} </span>
              <span className="type">{item.type}</span>
              <br />
              <span className="available">
                Availability: {item.availability}
              </span>
              <br />
              <span className="manufacturer">Manufacturer: {item.company}</span>
              <br />
              <span className="price">Price: {item.price}</span>
            </div>
          );
        })}
        {machines.map((item: machine) => {
          ++key2;
          return (
            <div key={key2} className="storeItem">
              <img alt="gym item" src={item.image} />
              <br />
              <span className="item">{item.type} </span>
              <span className="type">{item.item}</span>
              <br />
              <span className="available">
                Availability: {item.availability}
              </span>
              <br />
              <span className="manufacturer">Manufacturer: {item.company}</span>
              <br />
              <span className="price">Price: {item.price}</span>
            </div>
          );
        })}
        {benches.map((item: bench) => {
          ++key3;
          return (
            <div key={key3} className="storeItem">
              <img alt="gym item" src={item.image} />
              <br />
              <span className="item">{item.type} </span>
              <span className="type">{item.item}</span>
              <br />
              <span className="available">
                Availability: {item.availability}
              </span>
              <br />
              <span className="manufacturer">Manufacturer: {item.company}</span>
              <br />
              <span className="price">Price: {item.price}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Store;
