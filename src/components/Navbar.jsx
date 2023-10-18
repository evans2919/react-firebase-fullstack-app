import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Navbar = () => {
    const { user, singOutUser } = useUserContext();
    console.log(user);
    const navigate = useNavigate();
    const handleClickLogOut = async () => {
        try {
            await singOutUser();
            console.log("usuario fuera");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <nav>
                {user ? (
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <button onClick={handleClickLogOut}>logout</button>
                    </div>
                ) : (
                    <div>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register"> Register</NavLink>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
