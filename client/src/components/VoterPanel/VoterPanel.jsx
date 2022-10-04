/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Web3 from "web3";

import "./style.css";
import { useEffect } from "react";

export const VoterPanel = () => {
   let address, contract;
   const cards=<></>;
  const init = async () => {
    const artifact = require("../../contracts/Vote.json");
    const { abi } = artifact;
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const accounts = await web3.eth.requestAccounts();
    const networkID = await web3.eth.net.getId();

    try {
      address = artifact.networks[networkID].address;
      contract = new web3.eth.Contract(abi, address);
    } catch (err) {
      alert("Sorry sir. But,contract seems not deployed yet. Could you please check it out?");
    }
  };
  useEffect(() => {
    init();
    console.log("inited contract");
    setTimeout(() => {
      getTargets();
    }, 1000);
  },[]);
  const getTargets = async () => {
    let i=await contract.methods.getTargetArrayLength().call();
    for(var a=0;a<i;a++){
      cards[a]=<><div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div></>;
    }
  };
  return (
<>
      <div className="start-container background ">
        <a className="menu-link" aria-current="page" href="#">
          <img className="logo" src="/logo2.png" />
        </a>
        <span className="menu-link title-text">OpenSEC Vote</span>
        <div className="admin-button inline">
          <a className="btn btn-warning" href="admin">
            管理者用ページ
          </a>
        </div>
      </div>
      <div >
        {cards}
      </div>
      </>
  );
};
export default VoterPanel;
