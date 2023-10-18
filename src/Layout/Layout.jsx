import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUserContext } from "../../context/UserContext";

const Layout = () => {
    const { user } = useUserContext();
    if (user === false) {
        return <p>loading...</p>;
    }
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;
