/* eslint-disable react/prop-types */
const DefaultButton = ({ buttonTitle, buttonStyle, children, ...props }) => {
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
        case "burguer":
            style =
                "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600";
            break;

        default:
            style =
                "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
            break;
    }

    return (
        <div>
            <button {...props} className={style}>
                <span>{buttonTitle}</span>

                {children}
            </button>
        </div>
    );
};

export default DefaultButton;
