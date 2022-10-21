import Demo from "../control-panel";
import "./style2.css"
export const Admin = () => {
  return (<>
    <div className="start-container background ">
      <a className="menu-link" aria-current="page" href="/">
        <img className="logo" src="/logo2.png" />
      </a>
      <span className="menu-link title-text">OpenSEC Vote</span>
    </div>
      <div className="welcome">
        <h1 className="padding">Control Panel</h1>
        <p className="padding">
          This is transparency ensured voting system. Please check MetaMask is
          installed on your browser. author is yutadd.
          <br />
          usage -&gt;<a href="/usage_a">usage for admin</a>.
          <br />
          author-&gt;<a href="http://github.com/yutadd">yutadd on github.</a>
        </p>
      </div>
      <hr />
      <Demo />
      </>
  );
};
export default Admin;
