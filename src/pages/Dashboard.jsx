import Master from "../Layout/Master";
// import { tree } from "../context/whitelist/WhitelistedContext";

const Dashboard = () => {
  return (
    <div>
      <Master />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-4 text-white mt-5">
            <h1>Coming Soon!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
