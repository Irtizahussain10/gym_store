import React from "react";
import {Link} from "react-router-dom";
import { dumbbellStore } from "../../store";
import { dumbbell } from "../../interfaces/interfaces";

class DumbbellStore extends React.Component {
  render() {
    let key = -1;
    return (
      <>
        {dumbbellStore.map((item: dumbbell) => {
          ++key;
          return (
            <Link to={`/store/dumbbell/${item.id}`} className="item-link">
              <div key={key} className="storeItem">
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

export default DumbbellStore;
