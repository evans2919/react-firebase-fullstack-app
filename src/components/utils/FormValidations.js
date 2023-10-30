export const FormValidations = () => {
    return {
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email incorrecto",
        },
        required: {
            value: true,
            message: "Campo obligatorio",
        },
        validateMinLength(minLengthValue, minLengthMessage) {
            return {
                value: minLengthValue,
                message: minLengthMessage,
            };
        },
        validateTrim(value) {
            if (!value.trim()) {
                return "Campo obligatorio";
            }
            return true;
        },

        validateEquals(value, validateMessage) {
            return (v) => v === value || validateMessage;
        },
    };
};
