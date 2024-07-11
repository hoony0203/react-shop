import { Outlet } from "react-router-dom";

let About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
