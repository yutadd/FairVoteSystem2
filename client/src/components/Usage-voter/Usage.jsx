import "./style4.css";
export const Usage_v= () => {

    return(<>
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
        <h1 className="padding">How To Vote?</h1>
        <p className="padding2 howto">
          Well, Voting to target is quite simple.<br />
          But first, you need to prepare your metamask to access this service.<br />
          And if voting someone actually, your account must be registed by a owner.<br />
          If you passed above you can vote following this. ↓<br />
          1.Access to <a href="/voter">voter page</a>and wait a moment Please(loading contract is about 2 sec).<br />
          2.Please vote carefully.<br />
          3.If you vote to unintended target, you can revote to another target.<br />
          <br />
          author-&gt;<a href="http://github.com/yutadd">yutadd on github.</a>
        </p>
      </div>
      <hr />
  </>);
};
export default Usage_v;