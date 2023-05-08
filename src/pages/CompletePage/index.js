import React, { useContext, useEffect } from "react";
import { OrderContext } from "./../../context/OrderContext";
import axios from "axios";

const CompletePage = () => {
  const [orderData] = useContext(OrderContext);

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async (orderData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/oredr",
        orderData
      );
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>CompletePage</div>;
};

export default CompletePage;
