import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <p>Role: {user.role}</p>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Dashboard;
