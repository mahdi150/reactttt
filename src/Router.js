import Home from "./component/Home";
import Login from "./component/Login";
import Management from "./component/management/Management";
import NotFound from "./component/NotFound";
import { Route, Routes } from "react-router";
const Router = () => {
    return ( 
        <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Management" element={<Management />} />
      {/* <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/" element={<DashboardDefaultContent />} />
        <Route path="/dashboard/inbox" element={<Inbox />} />
        <Route
          path="/dashboard/settings-and-privacy"
          element={<SettingsAndPrivacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
     );
}
 
export default Router;