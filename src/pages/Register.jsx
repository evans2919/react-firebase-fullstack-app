import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FirebaseErrors } from "../components/utils/FirebaseErrors";
import FormError from "../components/utils/FormError";
import FormInput from "../components/FormInput";
import { FormValidations } from "../components/utils/FormValidations";

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
    } = useForm();

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
            <h1>Registrar</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                />
                {errors.email && <FormError errors={errors.email.message} />}
                <br />
                <br />
                <FormInput
                    type="password"
                    placeholder="Ingrese contraseña"
                    {...register("password", {
                        minLength: validateMinLength(6, "Mínimo 6 caracteres"),
                        validate: {
                            trim: validateTrim,
                        },
                    })}
                />
                {errors.password && (
                    <FormError errors={errors.password.message} />
                )}

                <br />
                <br />
                <FormInput
                    type="password"
                    placeholder="Repita password"
                    {...register("repassword", {
                        validate: {
                            equals: validateEquals(
                                getValues("password"),
                                "Las contraseñas no coinciden"
                            ),
                        },
                    })}
                />
                {errors.repassword && (
                    <FormError errors={errors.repassword.message} />
                )}

                <br />
                <br />

                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;
