import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormError from "../components/utils/FormError";
import { FirebaseErrors } from "../components/utils/FirebaseErrors";
import { FormValidations } from "../components/utils/FormValidations";
import Title from "../components/utils/Title";
import DefaultButton from "../components/utils/DefaultButton";

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
            <Title title="Iniciar sesión" />
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

                <DefaultButton buttonTitle="Iniciar sesión" type="submit" />
            </form>
        </>
    );
};

export default Login;
