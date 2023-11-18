/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const DefaultNavLink = ({ to, text, buttonStyle }) => {
    let style = "";

    switch (buttonStyle) {
        case "green":
            style =
                "dark:focus:ring-green-700 block py-2 px-3 md:p-0 text-white  bg-green-700 rounded md:bg-transparent md:text-green-700 md:dark:text-green-700";
            break;
        case "red":
            style =
                "   dark:focus:ring-red-700 block py-2 px-3 md:p-0 text-white  bg-red-700 rounded md:bg-transparent md:text-red-700 md:dark:text-red-700";
            break;
        case "yellow":
            style =
                "dark:focus:ring-yellow-900 block py-2 px-3 md:p-0 text-white  bg-yellow-400 rounded md:bg-transparent md:text-yellow-400 md:dark:text-yellow-500";
            break;
        case "purple":
            style =
                "dark:focus:ring-purple-900 block py-2 px-3 md:p-0 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:dark:text-purple-500";
            break;

        default:
            style =
                "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500";
            break;
    }

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? style
                    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            }
        >
            {text}
        </NavLink>
    );
};

export default DefaultNavLink;
