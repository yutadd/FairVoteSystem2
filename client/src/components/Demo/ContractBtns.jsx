import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    if (/(\d|[a-z])*/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const isClosed = async () => {
    const value = await contract.methods.closed.call().call();
    console.log(value);
    if(value){
      setValue('true');
    }else{
      setValue('false');
    }
    
  };
const close=async ()=>{
  await contract.methods.close().send({from: accounts[0]});
  alert('success');
};
const open=async ()=>{
  await contract.methods.open().send({from: accounts[0]});
  alert('success');
};
const getVoters=async()=>{
let voter=await contract.methods.getVoters().call();
console.log(voter);
};
  const addVoter = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    //const newValue = parseInt(inputValue);
    try{
    await contract.methods.addVoter(inputValue).send({ from: accounts[0] });
    alert('transaction completed!');
    }catch(e){
      if(e.code===4001){
        alert('Cancelled');
      }else if(e.code==='INVALID_ARGUMENT'){
        alert('invalid address');
      }else{
        console.log('unknown error : '+e.code);
      }
    }
  };

  return (
    <div className="btns">
      <button onClick={isClosed}>
        isClosed()
      </button>
      <button onClick={getVoters}>
        getVoters()
      </button>
      <button onClick={open}>
        open()
      </button>
      <button onClick={close}>
        close()
      </button>
      <div onClick={addVoter} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;