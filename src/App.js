import { Route, Routes } from "react-router-dom";
import "./App.css";

import CustomerRoutes from "./Routers/CustomerRoutes";
import Admin from "./Admin/Admin";
import AdminRouter from "./Routers/AdminRouter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRouter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
