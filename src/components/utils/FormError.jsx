/* eslint-disable react/prop-types */
const FormError = ({ errors }) => {
    return (
        <>
            {errors && (
                <p
                    id="outlined_error_help"
                    className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                    <span className="font-medium">Oops!</span> {errors.message}
                </p>
            )}
        </>
    );
};

export default FormError;
