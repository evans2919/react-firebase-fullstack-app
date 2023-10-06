import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Login = () => {
    const { user, setUser } = useUserContext();
    const navigate = useNavigate();
    const handleLogin = () => {
        setUser(true);
        navigate("/");
    };
    return (
        <>
            <h1>Login</h1>
            {user ? "Usuario En línea" : "Usuario Offline"}
            <br />
            <br />
            <button onClick={handleLogin}>Acceder</button>
        </>
    );
};

export default Login;
