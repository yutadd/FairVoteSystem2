/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Web3 from "web3";

import "./style.css";
import { useEffect } from "react";

export const VoterPanel = () => {
   let address, contract;
   const state = { error: null };
   const cards=<></>;
  const init = async () => {
    const artifact = require("../../contracts/Vote.json");
    const { abi } = artifact;
    let web3=null;
    try{
      window.ethereum.request({ method: "eth_requestAccounts" })// Popup notify when metamask is not connected.
    web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const accounts = await web3.eth.requestAccounts();
  } catch (err) {
    alert('Sorry sir, Can\'t init metamask or some web3 extension. Did you install it?');
    console.log('error '+ err.message+' happen');
    state.error = 'error';
}
if(!state.error){
    try {
      const networkID = await web3.eth.net.getId();
      address = artifact.networks[networkID].address;
      contract = new web3.eth.Contract(abi, address);
    } catch (err) {
      alert('\'Vote contract\' not found: Sorry, did you set your metamask to the wrong chain?');
      console.log('error '+ err.message+' happen');
      state.error='error';
    }
  }
  };
  useEffect(() => {
    init();
    if(!state.error){
    setTimeout(() => {
      getTargets();
    }, 1000);
  }
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
  return (<>
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
