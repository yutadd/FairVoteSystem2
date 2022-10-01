import Intro from "../Intro";
import { EthProvider } from "../../contexts/EthContext";
import Demo from "../Demo";
export const Admin = () => {
    return (
        <EthProvider>
          <Intro />
          <hr />
          <Demo />
          <hr />
        </EthProvider>
    );
};
export default Admin;