
import "../../style.css";
export const Home = () => {
  return (
    <div>
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
          <br />
          <div className="left">
            <div className="discription">
              <div className="discription-title">透明性・可用性</div>
              <div className="discription-text">
                誰でも簡単に投票し、誰でも簡単に不正を監視することができ、<br />reVoteができる公平な投票システム。
              </div>
            </div>
            <div className="btn-container">
              <div className="btn-main">
                <div className="btn btn-primary">
                  <a className="v-btn-text" href="">
                    Vote&gt;&gt;
                  </a>
                </div>
                <br />
              </div>
              <a href="" className="btn-explanation"> <img src="hatena.png" alt="?" /> 使い方</a>
              <br />
              <a href="" className="btn-explanation"> 推奨環境: edge, chrome or firefox</a>
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
        <div className="container">
        </div>
      </div>
  );
};
export default Home;