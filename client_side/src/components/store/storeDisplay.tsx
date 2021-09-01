import React from "react";
import { Link } from "react-router-dom";
import { gymItem, storeDisplayProps } from "../../interfaces/interfaces";

class StoreDisplay extends React.Component<storeDisplayProps> {
  render() {
    let key = -1;
    return (
      <>
        {this.props.data.map((item: gymItem) => {
          ++key;
          return (
            <Link
              key={key}
              to={`/store/${this.props.type}/${item.id}`}
              className="item-link"
            >
              <div className="storeItem">
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

export default StoreDisplay;
