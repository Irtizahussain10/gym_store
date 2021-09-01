import React from "react";
import { dumbbells, benches, machines } from "../../store";
import { withRouter } from "react-router";
import Item from "./item";

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
      let data = dumbbells[id - 1];
      return (
        <Item
          data={data}
          displayOrderForm={this.displayOrderForm}
          showOrderForm={this.state.showOrderForm}
          hideOrderForm={this.hideOrderForm}
          isLoggedIn={this.props.isLoggedIn}
        />
      );
    } else if (item === "bench") {
      let data = benches[id - 1];
      return (
        <Item
          data={data}
          displayOrderForm={this.displayOrderForm}
          showOrderForm={this.state.showOrderForm}
          hideOrderForm={this.hideOrderForm}
          isLoggedIn={this.props.isLoggedIn}
        />
      );
    } else if (item === "machine") {
      let data = machines[id - 1];
      return (
        <Item
          data={data}
          displayOrderForm={this.displayOrderForm}
          showOrderForm={this.state.showOrderForm}
          hideOrderForm={this.hideOrderForm}
          isLoggedIn={this.props.isLoggedIn}
        />
      );
    } else {
      <p>Not Found</p>;
    }
  }
}

export default withRouter(SingleItem);
