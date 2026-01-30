import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(
      loginUser({
        username: "admin",
        password: "1234",
      })
    );
  };

  return (
    <div>
      <h2>ERP Login</h2>

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
