import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    const { registerUser } = useUserContext();
    const navigate = useNavigate();

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
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("email", { message: "Email en uso" });
                    break;

                case "auth/invalid-email":
                    setError("email", {
                        message: "Formato de email no valido",
                    });
                    break;
                default:
                    console.log("Hubo un error en el servidor");
            }
        }
    };

    return (
        <>
            <h1>Registrar</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Campo obligatorio",
                        },
                        pattern: {
                            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                            message: "Formato de email incorrecto",
                        },
                    })}
                />
                {errors.email && errors.email.message}
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Ingrese contraseña"
                    {...register("password", {
                        setValueAs: (value) => value.trim(),
                        minLength: {
                            value: 6,
                            message: "Mínimo 6 caracteres",
                        },
                        validate: {
                            trim: (value) => {
                                if (!value.trim()) {
                                    return "Campo obligatorio";
                                }
                                return true;
                            },
                        },
                    })}
                />
                {errors.password && errors.password.message}

                <br />
                <br />
                <input
                    type="password"
                    placeholder="Repita contraseña"
                    {...register("repassword", {
                        validate: {
                            equals: (value) =>
                                value === getValues("password") ||
                                "Las contraseñas no coinciden",
                        },
                    })}
                />
                {errors.repassword && errors.repassword.message}
                <br />
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;
