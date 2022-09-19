import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

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
  var voters = [];
  var closed = "?";
  var voter = "0x0a";
  const isClosed = async () => {
    const value2 = await contract.methods.closed.call().call();
    console.log(value2);

    if (value2) {
      setValue({ closed: "true", voters: voters, voter: voter });
      closed = "true";
    } else {
      setValue({ closed: "false", voters: voters, voter: voter });
      closed = "false";
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
    const addresses = [];
    for (var a = 0; a < i; a++) {
      addresses[a] = await contract.methods.getVoterAddress(a).call();
    }
    console.log(i);
    console.log(addresses);
    setValue({ closed: closed, voters: voters, voter: addresses });
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
    <div className="btns">
      <button onClick={isClosed}>isClosed()</button>
      <button onClick={getVoters}>getVoters()</button>
      <button onClick={open}>open()</button>
      <button onClick={close}>close()</button>
      <div onClick={addVoter} className="input-btn">
        addVoters(
        <input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />
        )
      </div>
    </div>
  );
}

export default ContractBtns;
