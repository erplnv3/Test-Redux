import { useSelector } from "react-redux";

const CustomerView = () => {
  const customer = useSelector(
    (state) => state.customer.selectedCustomer
  );

  if (!customer) return null;

  return (
    <div>
      <h3>Customer View</h3>
      <p><b>Company:</b> {customer.companyName}</p>
      <p><b>Contact:</b> {customer.contactPerson}</p>
      <p><b>Mobile:</b> {customer.mobile}</p>
      <p><b>Email:</b> {customer.email}</p>
      <p><b>City:</b> {customer.city}</p>
      <p><b>GST:</b> {customer.gst}</p>
    </div>
  );
};

export default CustomerView;
