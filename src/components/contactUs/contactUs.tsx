import React, { ChangeEvent } from "react";
import "./contactUs.css";

class ContactUs extends React.Component {
  contactDetails = ["abc@xyz.com", "444444", "44444"];

  state = {
    contactOption: this.contactDetails[0],
  };

  handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let index = Number(e.target.value);
    this.setState({ contactOption: this.contactDetails[index] });
  };

  render() {
    return (
      <div className="contactDetails">
        <h1>Contact</h1>
        <p>For all queries and orders, contact us</p>
        <select
          name="contactOptions"
          className="contactOptions"
          onChange={this.handleChange}
        >
          <option selected value={0}>
            Email
          </option>
          <option value={1}>Whatsapp</option>
          <option value={2}>Call us</option>
        </select>
        <br />
        <span>{this.state.contactOption}</span>
      </div>
    );
  }
}

export default ContactUs;
