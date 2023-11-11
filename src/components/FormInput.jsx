/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";

const FormInput = forwardRef(
    ({ type, label, onChange, onBlur, name, error }, ref) => {
        const inputStyles = !error
            ? " border-gray-300  dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600"
            : " border-red-600 dark:border-red-500 dark:focus:border-red-500   focus:border-red-600";

        const labelStyles = !error
            ? " text-gray-500 dark:text-gray-400  peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            : "text-red-600 dark:text-red-500 ";

        return (
            <div className="my-4">
                <div className="relative">
                    <input
                        type={type}
                        placeholder=""
                        ref={ref}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        id="floating_outlined"
                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none  focus:ring-0 peer ${inputStyles}`}
                    />

                    <label
                        htmlFor="floating_outlined"
                        className={`absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1  bg-white dark:bg-gray-900   ${labelStyles}`}
                    >
                        {label}
                    </label>
                </div>
            </div>
        );
    }
);

export default FormInput;
