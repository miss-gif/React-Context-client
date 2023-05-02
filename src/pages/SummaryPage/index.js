import React, { useState } from "react";

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={checked}
          id="confirm-checkbox"
          onClick={(e) => {
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