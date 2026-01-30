// import { useSelector } from "react-redux";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const user = useSelector((state) => state.auth.user);

//   return <>{user ? <Dashboard /> : <Login />}</>;
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/edit-customer/:id" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

