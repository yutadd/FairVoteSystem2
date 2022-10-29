/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
function Demo() {
  const [values, setValue] = useState({
    closed: "?",
    voters: {},
    targets: {},
  });

  const demo = (
    <>
      <div className="container">
        <div className="d-flex flex-row bd-highlight mb-1">
          <ContractBtns setValue={setValue} />
          <Contract values={values} />
        </div>
      </div>
    </>
  );

  return <div className="demo">{demo}</div>;
}
export default Demo;
