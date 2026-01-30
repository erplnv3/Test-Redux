import { useSelector, useDispatch } from "react-redux";
import { deleteCustomer } from "../store/customerSlice";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const customers = useSelector(
    (state) => state.customer.customers
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Customer List</h2>

      <button onClick={() => navigate("/add-customer")}>
        ➕ Add Customer
      </button>

      <table border="1">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.companyName}</td>
              <td>{c.contactPerson}</td>
              <td>{c.mobile}</td>
              <td>{c.email}</td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/edit-customer/${c.id}`)
                  }
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => dispatch(deleteCustomer(c.id))}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
