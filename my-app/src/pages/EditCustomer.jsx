import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer } from "../store/customerSlice";
import { useState } from "react";

const EditCustomer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customer = useSelector((state) =>
    state.customer.customers.find(
      (c) => c.id === Number(id)
    )
  );

  const [form, setForm] = useState(customer);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    dispatch(updateCustomer(form));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Customer</h2>

      <input name="companyName" value={form.companyName} onChange={handleChange} />
      <input name="contactPerson" value={form.contactPerson} onChange={handleChange} />
      <input name="mobile" value={form.mobile} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditCustomer;
