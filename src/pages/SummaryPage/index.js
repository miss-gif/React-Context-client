import React, { useContext, useState } from "react";
import { OrderContext } from "./../../context/OrderContext";

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);
  const [orderDetails] = useContext(OrderContext);

  const productArray = Array.from(orderDetails.products);
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderDetails.totals.products}</h2>
      <ul>{productList}</ul>
      <form>
        <input
          type="checkbox"
          checked={checked}
          id="confirm-checkbox"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />{" "}
        {""}
        <label htmlFor="confirm-checkbox">주문을 확인 하셨나요?</label>
        <br />
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
