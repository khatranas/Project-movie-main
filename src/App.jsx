import Layoutmain from "./Layout/layoutMain";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Page/homePage";
import Toprated from "./Page/topRated";
import Indexlayout from "./Layout/indexLayout";
import Login from "./Page/login";
import Sub from "./Page/Sub";
import Success from "./Page/Success";
import EditProfile from "./Page/EditProfile";
import Password from "./Page/Password";
import Data from "./Page/Data";
import Pay from "./Page/Pay";
import Product from "./Page/Product";
import Admin from "./Layout/Admin";

export default function App() {
  return (
    <div className="bg-white dark:bg-mainDark">
      <Routes>
        <Route element={<Layoutmain />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/toprated" element={<Toprated />} />
          <Route path="/edit" element={<EditProfile/>} />
          <Route path="/pass" element={<Password/>} />
          <Route path="/data" element={<Data/>} />
        </Route>
        <Route element={<Indexlayout />}>
          <Route path="/b" element={<Login />} />
          <Route path="/sub" element={<Sub/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/pay" element={<Pay/>} />
        </Route>
        <Route element={<Admin/>}>
          <Route path="/product" element={<Product/>} />
        </Route>
      </Routes>
      
    </div>
  );
}
