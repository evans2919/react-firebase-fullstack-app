import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useUserContext();
    console.log(user);
    return (
        <>
            <nav>
                {user ? (
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <button onClick={() => setUser(false)}>logout</button>
                    </div>
                ) : (
                    <div>
                        <NavLink to="/login">Login</NavLink>
                        <button onClick={() => setUser(true)}>Acceder</button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
