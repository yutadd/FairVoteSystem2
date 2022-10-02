import Demo from "../control-panel";
export const Admin = () => {
  return (<>
      <div className="welcome">
        <h1>Fair Vote System2</h1>
        <p>
          This is transparency ensured voting system. Please check MetaMask is
          installed on your browser. auther is yutadd.
          <br />
          <a href="http://github.com/yutadd">yutadd on github.</a>
        </p>
      </div>
      <hr />
      <Demo />
      <hr />
      </>
  );
};
export default Admin;
