import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("evans@evans.com");
    const [password, setPassword] = useState("1235546");

    const { registerUser } = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("procesando password", email, password);
        try {
            await registerUser(email, password);
            navigate("/");
        } catch (error) {
            console.log(error.code);
        }
    };
    return (
        <>
            <h1>Registrar</h1>
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
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;
