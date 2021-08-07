import React from "react";
import {Link} from "react-router-dom";
import { machines } from "../../store";
import { machine } from "../../interfaces/interfaces";

class MachineStore extends React.Component {
  render() {
    let key = -1;
    return (
      <>
        {machines.map((item: machine) => {
          ++key;
          return (
            <Link to={`/store/machine/${item.id}`} className="item-link">
              <div key={key} className="storeItem">
                <img alt="gym item" src={item.image} />
                <br />
                <span className="item">{item.type} </span>
                <span className="type">{item.item}</span>
                <br />
                <span className="available">
                  Availability: {item.availability}
                </span>
                <br />
                <span className="manufacturer">
                  Manufacturer: {item.company}
                </span>
                <br />
                <span className="price">Price: {item.price}</span>
              </div>
            </Link>
          );
        })}
      </>
    );
  }
}

export default MachineStore;
