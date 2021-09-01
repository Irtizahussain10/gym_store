import React from "react";
import { itemProps } from "../../interfaces/interfaces";
import OrderForm from "./orderForm";
import Comments from "./comment";

class Item extends React.Component<itemProps> {
  render() {
    return (
      <div>
        <img src={this.props.data.image} alt="" />
        <br />
        <span>
          {this.props.data.type} {this.props.data.material}{" "}
          {this.props.data.item}
        </span>
        <br />
        <span>Availability: {this.props.data.availability}</span>
        <br />
        <span>Manufacturer: {this.props.data.company}</span>
        <br />
        <span>Price: {this.props.data.price}</span>
        <br />
        <button
          onClick={() => {
            this.props.displayOrderForm();
          }}
        >
          Order now
        </button>
        {this.props.showOrderForm ? (
          <OrderForm
            hideOrderForm={this.props.hideOrderForm}
            isLoggedIn={this.props.isLoggedIn}
            price={this.props.data.price}
          />
        ) : null}
        <Comments
          isLoggedIn={this.props.isLoggedIn}
          item={this.props.data.type.concat(
            " ",
            this.props.data.material,
            this.props.data.item
          )}
        />
      </div>
    );
  }
}

export default Item;
