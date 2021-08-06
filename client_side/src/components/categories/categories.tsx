import React from "react";
import "./categories.css";

class Categories extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="category">
          <img
            className="image"
            src="https://cdn.vox-cdn.com/thumbor/Up5bxcY9t25oT53eLb7LbylP2q0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21889083/1224663515.jpg.jpg"
            alt="gym item"
          />
          <p className="description">
            We have a wide range of dumbbells in different sizes available at a
            reasonable price without any compromise on quality. Check out our
            catalogue for going through all the details of the products.
          </p>
        </div>
        <div className="category">
          <img
            className="image"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-view-of-a-gym-with-equipment-royalty-free-image-806831952-1545163153.jpg?crop=1.00xw:0.752xh;0,0.248xh&resize=1200:*"
            alt="gym item"
          />
          <p className="description">
            We have a wide range of benches in different categories available at
            a reasonable price without any compromise on quality. Check out our
            catalogue for going through all the details of the products.
          </p>
        </div>
        <div className="category">
          <img
            className="image"
            src="https://static.sportzbusiness.com/uploads/2020/05/Cable-Machine.jpg"
            alt="gym item"
          />
          <p className="description">
            We have a wide range of machines in different categories available
            at a reasonable price without any compromise on quality. Check out
            our catalogue for going through all the details of the products.
          </p>
        </div>
      </div>
    );
  }
}

export default Categories;
