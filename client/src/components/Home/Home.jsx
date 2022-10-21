import "./style1.css";
export const Home = () => {
  return (
    <div>
      <div className="start-container background ">
        <a className="menu-link" aria-current="page" href="/">
          <img className="logo" src="/logo2.png" />
        </a>
        <span className="menu-link title-text">OpenSEC Vote</span>
        <div className="admin-button inline">
          <a className="btn btn-primary" href="admin">
            Admin Page
          </a>
        </div>
        <br />
        <div className="left">
          <div className="discription">
            <div className="discription-title">Advanced voting system</div>
            <div className="discription-text">
              Transparency + Availability + Usability
              <br />
              You can check all activity on BlockChain.
            </div>
          </div>
          <div className="btn-container">
            <div className="btn-main">
              <div className="btn btn-primary">
                <a className="v-btn-text" href="voter">
                  Vote&gt;&gt;
                </a>
              </div>
              <br />
            </div>
            <a href="/usage_v" className="btn-explanation">
              {" "}
              <img src="hatena.png" alt="?" /> Usage for voter.
            </a>
            <br />
            <a href="" className="btn-explanation">
              {" "}
              Recommended env: edge, chrome or firefox
            </a>
          </div>
        </div>
        <div className="right">
          <img
            className="sample-img"
            src="./image.png"
            alt="can't load image...."
          />
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};
export default Home;
