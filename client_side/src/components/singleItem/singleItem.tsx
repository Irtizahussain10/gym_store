import React from "react";
import { dumbbellStore, benches, machines } from "../../store";
import { withRouter } from "react-router";
import OrderForm from "./orderForm";
import Comments from "./comment";

class SingleItem extends React.Component<any> {
  state = {
    showOrderForm: false,
  };

  hideOrderForm = () => {
    this.setState({ showOrderForm: false });
  };

  displayOrderForm = () => {
    if (this.props.isLoggedIn) {
      this.setState({ showOrderForm: true });
    } else {
      alert("You must be logged in to place an order");
    }
  };

  render() {
    let { item, id } = this.props.match.params;
    if (item === "dumbbell") {
      let data = dumbbellStore[id - 1];
      return (
        <div>
          <img src={data.image} alt="" />
          <br />
          <span>
            {data.type} {data.material} {data.item}
          </span>
          <br />
          <span>Availability: {data.availability}</span>
          <br />
          <span>Manufacturer: {data.company}</span>
          <br />
          <span>Price: {data.price}</span>
          <br />
          <button
            onClick={() => {
              this.displayOrderForm();
            }}
          >
            Order now
          </button>
          {this.state.showOrderForm ? (
            <OrderForm
              hideOrderForm={this.hideOrderForm}
              isLoggedIn={this.props.isLoggedIn}
              price={data.price}
            />
          ) : null}
          <Comments
            isLoggedIn={this.props.isLoggedIn}
            item={data.type.concat(" ", data.material, data.item)}
          />
        </div>
      );
    } else if ((item = "bench")) {
      let data = benches[id - 1];
      return (
        <div>
          <img src={data.image} alt="" />
          <br />
          <span>
            {data.type} {data.item}
          </span>
          <br />
          <span>Availability: {data.availability}</span>
          <br />
          <span>Manufacturer: {data.company}</span>
          <br />
          <span>Price: {data.price}</span>
          <br />
          <button
            onClick={() => {
              this.displayOrderForm();
            }}
          >
            Order now
          </button>
          {this.state.showOrderForm ? (
            <OrderForm
              hideOrderForm={this.hideOrderForm}
              isLoggedIn={this.props.isLoggedIn}
              price={data.price}
            />
          ) : null}
          <Comments
            isLoggedIn={this.props.isLoggedIn}
            item={data.type.concat(" ", data.item)}
          />
        </div>
      );
    } else if ((item = "machine")) {
      let data = machines[id - 1];
      return (
        <div>
          <img src={data.image} alt="" />
          <br />
          <span>
            {data.type} {data.item}
          </span>
          <br />
          <span>Availability: {data.availability}</span>
          <br />
          <span>Manufacturer: {data.company}</span>
          <br />
          <span>Price: {data.price}</span>
          <br />
          <button
            onClick={() => {
              this.displayOrderForm();
            }}
          >
            Order now
          </button>
          {this.state.showOrderForm ? (
            <OrderForm
              hideOrderForm={this.hideOrderForm}
              isLoggedIn={this.props.isLoggedIn}
              price={data.price}
            />
          ) : null}
          <Comments
            isLoggedIn={this.props.isLoggedIn}
            item={data.type.concat(" ", data.item)}
          />
        </div>
      );
    } else {
      <p>Not Found</p>;
    }
  }
}

export default withRouter(SingleItem);
