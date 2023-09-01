import Navbar from "../conponents/Menu/navBar";
import Sidebar from "../conponents/Menu/sideBar";
import { Outlet } from "react-router-dom";
export default function Layoutmain() {
  return (
    <div className="max-w-screen-xl  mx-auto h-screen overflow-hidden ">
      <Navbar />
      <div className=" flex flex-wrap mx-auto mt-5 w-full h-full overflow-y-auto  ">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
             </div>
      </div>
    </div>
  );
}
