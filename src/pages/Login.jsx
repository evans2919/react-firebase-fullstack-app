import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormError from "../components/utils/FormError";
import { FirebaseErrors } from "../components/utils/FirebaseErrors";
import { FormValidations } from "../components/utils/FormValidations";

const Login = () => {
    const { loginUser } = useUserContext();
    const navigate = useNavigate();
    const { patternEmail, required, validateTrim, validateMinLength } =
        FormValidations();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();
    const onSubmit = async ({ email, password }) => {
        try {
            await loginUser(email, password);
            navigate("/");
        } catch (error) {
            console.log(error.code);
            const { code, message } = FirebaseErrors(error);
            setError(code, { message });
        }
    };

    return (
        <>
            <h1>Login</h1>
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

                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
