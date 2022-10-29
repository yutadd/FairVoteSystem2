export const Usage_a = () => {
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
      <div className="welcome">
        <h1 className="padding">How To start?</h1>
        <p className="padding2 howto">
          To make it easy for voters to cast their ballots, the administrator
          must complete several tasks.
          <br />
          Create an address for people to vote. The address must be in the same
          chain as the chain where the contract was deployed when deploying this
          system.
          <br />
          A fee, called a gas , is required to vote or re-vote, so please
          deposit the currency to all the addresses you have just created.
          <br />
          Then go to the <a href="/admin">controll-panel</a> and add the address
          you just created to the system.
          <br />
          Please distribute the private key of the voter's address that you just
          deposited and added to the list to each voter.
          <br />
          And add target's (ex. display name, number, ID, address). <br />
          Then, press Open button.
          <br />
          And when the voting deadline comes, press the stop button to stop new
          voting. <br />
          author-&gt;<a href="http://github.com/yutadd">yutadd on github.</a>
        </p>
      </div>
      <hr />
    </>
  );
};
export default Usage_a;
