import React from "react";

interface Props {
  email: string;
  price: string;
  isLoggedIn: boolean;
  hideOrderForm: () => void;
}

class OrderForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  placeOrder = () => {
    if (!this.props.isLoggedIn) {
      alert("You must be logged in to place an order");
    }
  };

  render() {
    return (
      <form>
        <label>
          Enter your mobile number
          <br />
          <input type="text" />
        </label>
        <br />
        <label>
          Enter your address (must be within Karachi)
          <br />
          <input type="text" />
        </label>
        <br />
        <label>
          Enter your order item
          <br />
          <input type="text" />
        </label>
        <br />
        <label>
          Enter quantity
          <br />
          <input type="number" />
        </label>
        <br />
        <button onClick={() => this.props.hideOrderForm()}>
          Hide order form
        </button>
        <button
          onClick={() => {
            this.placeOrder();
          }}
        >
          Order Now
        </button>
        <br />
      </form>
    );
  }
}

export default OrderForm;
