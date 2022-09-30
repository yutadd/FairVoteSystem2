/** @jsxImportSource @emotion/react */
import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import { css, keyframes } from "@emotion/react";
function ContractBtns({ setValue }) {
  const {
    state: { contract, accounts },
  } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    if (/(1-z])*/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };
  const close = async () => {
    await contract.methods.close().send({ from: accounts[0] });
    alert("success");
  };
  const open = async () => {
    await contract.methods.open().send({ from: accounts[0] });
    alert("success");
  };
  const getVoters = async () => {
    let i = await contract.methods.getVoterArrayLength().call();
    const voters = {};
    for (var a = 0; a < i; a++) {
      let _add = await contract.methods.getVoterAddress(a).call();
      let _targ = await contract.methods.getVotedTarget(_add).call();
      voters[_add] = _targ;
    }
    let f = await contract.methods.getTargetArrayLength().call();
    const targets = {};
    for (var r = 0; r < f; r++) {
      let _tid = await contract.methods.getTargetID(r).call();
      let _targAmount = await contract.methods.getVotedTarget(_tid).call();
      targets[_tid] = _targAmount;
    }
    const value2 = await contract.methods.closed.call().call();
    if (value2) {
      setValue({ closed: "opened", voters: voters, targets: targets });
    } else {
      setValue({ closed: "closed", voters: voters, targets: targets });
    }
  };
  const addVoter = async (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    //const newValue = parseInt(inputValue);
    try {
      await contract.methods.addVoter(inputValue).send({ from: accounts[0] });
      alert("transaction completed!");
    } catch (e) {
      if (e.code === 4001) {
        alert("Cancelled");
      } else if (e.code === "INVALID_ARGUMENT") {
        alert("invalid address");
      } else {
        console.log("unknown error : " + e.code);
      }
    }
  };

  return (
    <div className="p-2 bd-highlight">
      <div className="d-flex flex-column bd-highlight">
        <button
          className="btn btn-info"
          css={styles.callButton}
          onClick={getVoters}
        >
          getStats()
        </button>
        <button
          className="btn btn-warning"
          css={styles.callButton}
          onClick={open}
        >
          open()
        </button>
        <button
          className="btn btn-warning"
          css={styles.callButton}
          onClick={close}
        >
          close()
        </button>
        <button
          onClick={addVoter}
          className="btn btn-warning input-btn"
          css={styles.callButton}
        >
          addVoters(
          <input
            type="text"
            placeholder="address here"
            value={inputValue}
            css={styles.ButtonPhldr}
            onChange={handleInputChange}
          />
          )
        </button>
      </div>
    </div>
  );
}
const styles = {
  callButton: {
    fontSize: "1.5rem",
    color: "#000",
    margin: "5px",
  },
};
export default ContractBtns;
