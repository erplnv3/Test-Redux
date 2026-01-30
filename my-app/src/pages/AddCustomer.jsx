import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../store/customerSlice";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(
      addCustomer({
        ...form,
        id: Date.now(),
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h2>Add Customer</h2>

      <input name="companyName" placeholder="Company Name" onChange={handleChange} />
      <input name="contactPerson" placeholder="Contact Person" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile No" onChange={handleChange} />
      <input name="email" placeholder="Email Id" onChange={handleChange} />

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddCustomer;
