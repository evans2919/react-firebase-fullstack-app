import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";

const Login = () => {
    const { loginUser } = useUserContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginUser(email, password);
            navigate("/");
            console.log("correcto");
        } catch (error) {
            console.log(error.code);
        }
    };
    return (
        <>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese contraseña"
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
