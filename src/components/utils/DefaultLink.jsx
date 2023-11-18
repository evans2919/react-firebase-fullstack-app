/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DefaultLink = ({ to, text, buttonStyle }) => {
    let style = "";

    switch (buttonStyle) {
        case "green":
            style =
                "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
            break;
        case "red":
            style =
                "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
            break;
        case "yellow":
            style =
                "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 dark:focus:ring-yellow-900";
            break;
        case "purple":
            style =
                "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
            break;

        default:
            style =
                "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
            break;
    }

    return (
        <Link to={to} className={style}>
            {text}
        </Link>
    );
};

export default DefaultLink;
