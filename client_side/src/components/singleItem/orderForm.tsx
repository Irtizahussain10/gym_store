import axios from "axios";
import React from "react";

interface Props {
  price: string;
  isLoggedIn: boolean;
  hideOrderForm: () => void;
}

class OrderForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    mobileNumber: "",
    address: "",
    orderItem: "",
    quantity: 0,
  };

  placeOrder = (e: React.FormEvent<HTMLFormElement>) => {
    if (!this.props.isLoggedIn) {
      alert("You must be logged in to place an order");
    } else {
      e.preventDefault();
      e.currentTarget.reset();
      axios
        .post("http://localhost:5000/postOrder", {
          name: localStorage.getItem("name") as string,
          email: localStorage.getItem("email") as string,
          price: this.props.price,
          status: "pending",
          quantity: this.state.quantity,
          item: this.state.orderItem,
          address: this.state.address,
          number: this.state.mobileNumber,
        })
        .then((res) => {
          if (res.status === 200) {
            alert(
              "Your order has been placed successfully! We will get in touch with you shortly"
            );
          }
        })
        .catch((e) => {
          if (e.response.status === 400) {
            alert("Check out if there is any error with your data");
          } else if (e.response.status === 500) {
            alert("An error occured with the server! Please try again");
          } else {
            alert(
              "Oops an error occured! Please check your internet connection."
            );
          }
        });
    }
  };

  render() {
    return (
      <form onSubmit={this.placeOrder}>
        <label>
          Enter your mobile number
          <br />
          <input
            type="text"
            required
            onChange={(e) => {
              this.setState({ mobileNumber: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Enter your address (must be within Karachi)
          <br />
          <input
            type="text"
            required
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Enter your order item
          <br />
          <input
            type="text"
            required
            onChange={(e) => {
              this.setState({ orderItem: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Enter quantity
          <br />
          <input
            type="number"
            required
            onChange={(e) => {
              this.setState({ quantity: e.target.value });
            }}
          />
        </label>
        <br />
        <button onClick={() => this.props.hideOrderForm()}>
          Hide order form
        </button>
        <input type="submit" value="Order" />
        <br />
      </form>
    );
  }
}

export default OrderForm;
