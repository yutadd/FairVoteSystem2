/** @jsxImportSource @emotion/react */
import { Component, useState } from "react";
import Web3 from "web3";

import "./style0.css";
import { useEffect } from "react";

export const VoterPanel =() => {
  const [list, setList] = useState();
  /*const vote = async (e) => {
    init();
    const doe = async () => {
      let suc;
      try {
        suc = await contract.methods.vote(e).send({ from: accounts[0] });
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
      alert("Voted to " + e);
    };
    doe();
  };
  const revote = async (e) => {
    init();
    const doe = async () => {
      let suc;
      try {
        suc = await contract.methods.revote(e).send({ from: accounts[0] });
        alert("transaction completed!");
        console.log(suc);
      } catch (e) {
        if (e.code === 4001) {
          alert("Cancelled");
        } else if (e.code === "INVALID_ARGUMENT") {
          alert("invalid address");
        } else {
          console.log("unknown error : " + e.code);
        }
      }
      alert("reVoted to " + e);
    };
    doe();
  };*/const load=async ()=>{
        let address, contract, accounts;
        const state = { error: null };
        const artifact = require("../../contracts/Vote.json");
        const { abi } = artifact;
        let web3 = null;
        try {
          window.ethereum.request({ method: "eth_requestAccounts" }); // Popup notify when metamask is not connected.
          web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
          accounts = await web3.eth.requestAccounts();
        } catch (err) {
          alert(
            "Sorry sir, Can't init metamask or some web3 extension. Did you install it?"
          );
          console.log("error " + err.message + " happen");
          state.error = "error";
        }
        if (!state.error) {
          try {
            let networkID = await web3.eth.net.getId();
            address = artifact.networks[networkID].address;
            contract = new web3.eth.Contract(abi, address);
          } catch (err) {
            alert(
              "'Vote contract' not found: Sorry, did you set your metamask to the wrong chain?"
            );
            console.log("error " + err.message + " happen");
            state.error = "error";
          }
        }
       
        console.log(contract);
        let i = await contract.methods.getTargetArrayLength().call();
        var preList =[1,2];
        console.log("i="+i);
        for (var a = 0; a < i; a++) {
          
          const target = await contract.methods.getTargetDisplay(a).call();
          const amount = await contract.methods.getAmountOfVotes(target).call();
          const voted = await contract.methods
            .getVotedTarget(accounts[0])
            .call();
          if (voted == "") {
            console.log(target);
            preList[a]=
              <div key={target} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{target}</h5>
                    <p className="card-text">{amount}</p>
                    <a
                      href="#"
                      /*onClick={() => vote(target)}*/
                      className="btn btn-primary"
                    >
                      vote
                    </a>
                  </div>
                </div>
              </div>;
          } else {
            console.log(target);
            preList[a]=
              <div key={target} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{target}</h5>
                    <p className="card-text">{amount}</p>
                    <a
                      href="#"
                      /*onClick={() => revote(target)}*/
                      className="btn btn-primary"
                    >
                     revote
                    </a>
                  </div>
                </div>
              </div>;
          }
        }
        setList(preList);
          //setList([1,2,3])
          console.log(a);
          console.log(preList.length);
  };
  useEffect(()=>{load();},[]);
  

  return (
    <>
      <div className="start-container background ">
        <a className="menu-link" aria-current="page" href="/">
          <img className="logo" src="/logo2.png" />
        </a>
        <span className="menu-link title-text">OpenSEC Vote</span>
        <div className="admin-button inline">
          <a className="btn btn-primary" href="admin">
            Admin page
          </a>
        </div>
      </div>
      <a href="/usage_v" className="hint">
        <img src="hatena.png" alt="?" />
        Usage for voter.
      </a>
      <div>{list}</div>
    </>
  );
};
export default VoterPanel;
