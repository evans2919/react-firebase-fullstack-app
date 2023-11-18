import { useUserContext } from "../../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FirebaseErrors } from "../components/utils/FirebaseErrors";
import FormError from "../components/utils/FormError";
import FormInput from "../components/FormInput";
import { FormValidations } from "../components/utils/FormValidations";
import Title from "../components/utils/Title";
import DefaultButton from "../components/utils/DefaultButton";

const Register = () => {
    const { registerUser } = useUserContext();
    const navigate = useNavigate();
    const {
        patternEmail,
        required,
        validateTrim,
        validateMinLength,
        validateEquals,
    } = FormValidations();

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "evans@evans.com",
            password: "1234567",
            repassword: "1234567",
        },
    });

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password);
            navigate("/");
        } catch (error) {
            console.log(error.code);
            const { code, message } = FirebaseErrors(error);
            setError(code, { message });
        }
    };

    return (
        <>
            <Title title="Registro" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    error={errors.email}
                    type="email"
                    label="Ingrese email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                />
                <FormError errors={errors.email} />

                <FormInput
                    error={errors.password}
                    type="password"
                    label="Ingrese contraseña"
                    {...register("password", {
                        minLength: validateMinLength(6, "Mínimo 6 caracteres"),
                        validate: {
                            trim: validateTrim,
                        },
                    })}
                />

                <FormError errors={errors.password} />

                <FormInput
                    error={errors.repassword}
                    type="password"
                    label="Repita contraseña"
                    {...register("repassword", {
                        validate: {
                            equals: validateEquals(
                                getValues("password"),
                                "Las contraseñas no coinciden"
                            ),
                        },
                    })}
                />

                <FormError errors={errors.repassword} />

                <DefaultButton
                    buttonTitle="Registrarse"
                    buttonStyle="purple"
                    type="submit"
                />
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                    ¿Ya tienes cuenta?{" "}
                    <NavLink
                        to="/login"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        Inicia sesión
                    </NavLink>
                </div>
            </form>
        </>
    );
};

export default Register;
