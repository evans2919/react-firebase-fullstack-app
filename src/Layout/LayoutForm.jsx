import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutForm = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="flex justify-center h-full items-center">
                <div className="w-96 mt-10">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LayoutForm;
