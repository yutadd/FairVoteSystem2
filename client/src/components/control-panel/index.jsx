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
      <span style={{ fontSize: "3.5rem", fontWeight: "bold" }}>1.</span>
      <span style={{ fontSize: "2.5rem" }}>Add all voter(address) address to contract.</span>
      <br />
      <span style={{ fontSize: "3.5rem", fontWeight: "bold" }}>2.</span>
      <span style={{ fontSize: "2.5rem" }}>add Target(Any)</span>
      <br />
      <span style={{ fontSize: "3.5rem", fontWeight: "bold" }}>3.</span>
      <span style={{ fontSize: "2.5rem" }}>Send private key to voter.</span>
      <br />
      <span style={{ fontSize: "3.5rem", fontWeight: "bold" }}>3.</span>
      <span style={{ fontSize: "2.5rem" }}>call open() method.</span>
    </>
  );

  return (
    <div className="demo">
      <h2>Controll-panel</h2>
      <p>
        Voter only who {}
        <span style={{ fontWeight: "bold" }}>registered</span> {}
        by the owner can vote.
      </p>
      {
        demo
      }
    </div>
  );
}
export default Demo;
