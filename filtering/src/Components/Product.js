import React, { useState } from "react";
import Style from "./Product.module.css";
const Product = () => {
  const data = [
    {
      id: 168,
      title: "Charger SXT RWD",
      price: 32999.99,
      quantity: 3,
      total: 98999.97,
      discountPercentage: 13.39,
      discountedTotal: 85743.87,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
    },
    {
      id: 78,
      title: "Apple MacBook Pro 14 Inch Space Grey",
      price: 1999.99,
      quantity: 2,
      total: 3999.98,
      discountPercentage: 18.52,
      discountedTotal: 3259.18,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
    },
    {
      id: 183,
      title: "Green Oval Earring",
      price: 24.99,
      quantity: 5,
      total: 124.95,
      discountPercentage: 6.28,
      discountedTotal: 117.1,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
    },
    {
      id: 100,
      title: "Apple Airpods",
      price: 129.99,
      quantity: 5,
      total: 649.95,
      discountPercentage: 12.84,
      discountedTotal: 566.5,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
    },
    {
      id: 144,
      title: "Cricket Helmet",
      price: 44.99,
      quantity: 4,
      total: 179.96,
      discountPercentage: 11.47,
      discountedTotal: 159.32,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
    },
    {
      id: 124,
      title: "iPhone X",
      price: 899.99,
      quantity: 4,
      total: 3599.96,
      discountPercentage: 8.03,
      discountedTotal: 3310.88,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
    },
    {
      id: 148,
      title: "Golf Ball",
      price: 9.99,
      quantity: 4,
      total: 39.96,
      discountPercentage: 11.24,
      discountedTotal: 35.47,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
    },
    {
      id: 122,
      title: "iPhone 6",
      price: 299.99,
      quantity: 3,
      total: 899.97,
      discountPercentage: 19.64,
      discountedTotal: 723.22,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
    },
    {
      id: 110,
      title: "Selfie Lamp with iPhone",
      price: 14.99,
      quantity: 5,
      total: 74.95,
      discountPercentage: 19.87,
      discountedTotal: 60.06,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
    },
  ];
  const [alldata, setAlldata] = useState(data);
  const FilterHandle = () => {
    const filteringData = alldata.filter((val, i) => {
      return val.price < 50;
    });
    setAlldata(filteringData);
  };
  return (
    <>
      <div className={Style.con}>
        <button className={Style.btn} onClick={FilterHandle}>
          Filter
        </button>
        <div className={Style.innerCon}>
          {alldata.map((val, i) => {
            return (
              <div className={Style.card} key={i}>
                <div className={Style.imgCon}>
                  <img src={val.thumbnail} />
                </div>
                <div className={Style.title}>
                  <p>{val.title}</p>
                </div>
                <h2>{val.price}</h2>
                <center>
                  <button>Add Card</button>
                </center>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
