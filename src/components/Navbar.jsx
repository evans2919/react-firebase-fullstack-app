import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import DefaultLink from "./utils/DefaultLink";
import DefaultButton from "./utils/DefaultButton";
import DefaultNavLink from "./utils/DefaultNavLink";

const Navbar = () => {
    const { user, singOutUser } = useUserContext();
    const [mobileMenu, setMobileMenu] = useState(false);

    const navigate = useNavigate();

    const handleClickMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };
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
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            FullStack App
                        </span>
                    </NavLink>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
                        {user ? (
                            <DefaultButton
                                onClick={handleClickLogOut}
                                type="button"
                                buttonTitle="Cerrar sesión"
                                buttonStyle="red"
                            />
                        ) : (
                            <>
                                <div className="flex gap-2 lg:gap-5">
                                    <DefaultLink
                                        to="/login"
                                        text="Iniciar sesión"
                                    />
                                    <DefaultLink
                                        to="/register"
                                        text="Registrarse"
                                    />
                                </div>
                            </>
                        )}
                        {user && (
                            <>
                                <DefaultButton
                                    onClick={handleClickMobileMenu}
                                    type="button"
                                    buttonStyle="burguer"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 1h15M1 7h15M1 13h15"
                                        />
                                    </svg>
                                </DefaultButton>
                            </>
                        )}
                    </div>
                    {user && (
                        <div
                            className={`items-center justify-between ${
                                !mobileMenu && "hidden"
                            } w-full md:flex md:w-auto md:order-1`}
                        >
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <DefaultNavLink to="/" text="Dashboard"  />
                                </li>{" "}
                                <li>
                                    <DefaultNavLink
                                        to="/dash"
                                        text="Example 1"
                                    />
                                </li>{" "}
                                <li>
                                    <DefaultNavLink
                                        to="/board"
                                        text="Example 2"
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
