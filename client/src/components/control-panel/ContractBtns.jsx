/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Web3 from "web3";
import { useEffect } from "react";
function ContractBtns({ setValue }) {
  let address, contract,accounts;
  const init = async () => {
    const artifact = require("../../contracts/Vote.json");
    const { abi } = artifact;
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    accounts = await web3.eth.requestAccounts();
    const networkID = await web3.eth.net.getId();
    try {
      address = artifact.networks[networkID].address;
      contract = new web3.eth.Contract(abi, address);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    init();
   setInterval(() => {
    getVoters();
    const doe=async ()=>{let i=await contract.methods.getVoterArrayLength().call();};
    doe();
   }, 1000);
  },[]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    if (/(^[0-9a-fA-FxX]+$)|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
      console.log('not invalid');
    }
  };
  const [inputValue2, setInputValue2] = useState("");
  const handleInputChange2 = (e) => {
    if (/(^[0-9a-zA-z\s]+$)|^$/.test(e.target.value)) {
      setInputValue2(e.target.value);
    }
  };
  const close = async () => {
    init();
    setTimeout(() => {
      console.log(contract);
      const doe=async ()=>{let suc=await contract.methods.close().send({ from: accounts[0] });alert("success:"+suc);};
      doe();
    }, 1000);
  };
  const open = async () => {
    init();
    setTimeout(() => {
      console.log(contract);
      const doe=async ()=>{let suc=await contract.methods.open().send({ from: accounts[0] });alert("success:"+suc);};
      doe();
    }, 1000);
    
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
      let _tst = await contract.methods.getTargetDisplay(r).call();
      let _targAmount = await contract.methods.getAmountOfVotes(_tst).call();
      targets[_tst] = _targAmount;
    }
    const value2 = await contract.methods.closed.call().call();
    if (value2==='true') {
      setValue({ closed: "closed", voters: voters, targets: targets });
    } else {
      setValue({ closed: "opened", voters: voters, targets: targets });
    }
  };
  const addVoter = async (e) => {
    init();
    setTimeout(() => {
      console.log(contract);
      const doe=async ()=>{
        if (e.target.tagName === "INPUT") {
        return;
      }
      if (inputValue === "") {
        alert("Please enter a value to write.");
        return;
      }
      //const newValue = parseInt(inputValue);
      try {
        let suc=await contract.methods.addVoter(inputValue).send({ from: accounts[0] });
        alert("transaction completed!");
      } catch (e) {
        if (e.code === 4001) {
          alert("Cancelled");
        } else if (e.code === "INVALID_ARGUMENT") {
          alert("invalid address");
        } else {
          console.log("unknown error : " + e.code);
        }
      }};
      doe();
    }, 1000);
  };
  const addTarget = async (e) => {
    init();
    setTimeout(() => {
      console.log(contract);
      const doe=async ()=>{
        if (e.target.tagName === "INPUT") {
        return;
      }
      if (inputValue2 === "") {
        alert("Please enter a value to write.");
        return;
      }
      //const newValue = parseInt(inputValue);
      try {
        let suc=await contract.methods.addTarget(inputValue2).send({ from: accounts[0] });
        alert("transaction completed!");
      } catch (e) {
        if (e.code === 4001) {
          alert("Cancelled");
        } else if (e.code === "INVALID_ARGUMENT") {
          alert("invalid address");
        } else {
          console.log("unknown error : " + e.code);
        }
      }};
      doe();
    }, 1000);
  };

  return (
    <div className="p-2 bd-highlight">
      <div className="d-flex flex-column bd-highlight">
        <button
          className="btn btn-info"
          css={styles.callButton}
          disabled
        >
          getStats()&lt;=auto call
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
        <button
          onClick={addTarget}
          className="btn btn-warning input-btn"
          css={styles.callButton}
        >
          addTarget(
          <input
            type="text"
            placeholder="displayName"
            value={inputValue2}
            css={styles.ButtonPhldr}
            onChange={handleInputChange2}
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
