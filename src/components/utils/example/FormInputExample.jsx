/* eslint-disable react/prop-types */
import FormError from "../FormError";
import { FormValidations } from "../FormValidations";

const FormInputExample = ({
    register,
    getValues,
    errors,
    inputRegister,
    inputType,
    placeholder,
    isRequired,
    emailPattern,
    validateTrim,
    validateEquals,
    validateEqualsValue,
    validateEqualsMessage,
    validateMinLength,
    minLengthValue,
    minLengthMessage,
}) => {
    const { patternEmail, required } = FormValidations();

    const validationMinLength = validateMinLength
        ? {
              value: minLengthValue,
              message: minLengthMessage,
          }
        : {};

    return (
        <>
            <input
                type={inputType}
                placeholder={placeholder}
                {...register(inputRegister, {
                    setValueAs: (value) => value.trim(),
                    required: isRequired ? required : {},
                    pattern: emailPattern ? patternEmail : {},
                    minLength: validationMinLength,
                    validate: {
                        trim: (value) => {
                            if (validateTrim) {
                                if (!value.trim()) {
                                    return "Campo obligatorio";
                                }
                                return true;
                            }
                        },
                        equals: (value) => {
                            if (getValues && validateEquals) {
                                if (value === getValues(validateEqualsValue)) {
                                    return true;
                                }
                                return validateEqualsMessage;
                            }
                        },
                    },
                })}
            />
            {errors[inputRegister] && (
                <FormError errors={errors[inputRegister].message} />
            )}
        </>
    );
};

export default FormInputExample;
