/** @jsxImportSource @emotion/react */
import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import { css, keyframes } from "@emotion/react";
function Demo() {
  const { state } = useEth();
  const [values, setValue] = useState({
    closed: "?",
    voters: {},
    targets: {},
  });

  const demo = (
    <>
      <Cta />
      <div className="container">
        <div className="d-flex flex-row bd-highlight mb-1">
          <ContractBtns setValue={setValue} />
          <Contract values={values} />
        </div>
      </div>

      <Desc />
    </>
  );

  return (
    <div className="demo">
      <Title />
      {!state.artifact ? (
        <NoticeNoArtifact />
      ) : !state.contract ? (
        <NoticeWrongNetwork />
      ) : (
        demo
      )}
    </div>
  );
}
const styles = {};
export default Demo;
