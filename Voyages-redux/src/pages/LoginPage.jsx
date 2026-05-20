import { Button, Card, Col, Row, Badge, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../features/auth/authSlice";


// login : admin 
// password : Admin@123

const loginSchema = yup.object({
    username: yup
        .string()
        .required("Le login est obligatoire"),
    password: yup
        .string()
        .required("Le mot de passe est obligatoire")
});
function LoginPage() {

    const navigate = useNavigate()
    // const [apiError, setApiError] = useState("")
    // const { login } = useAuth();

    const dispatch = useDispatch()
    const { status, error } = useSelector((state) => state.auth)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    })

    const onSubmit = async (data) => {
        // setApiError("");

        try {

            await dispatch(loginUser(data)).unwrap()
            // .unwrap() est une methode de Redux toolkit
            // Succès : rtourne les données (payload)
            // Echec : throw error

            // Exemple de réponse Redux :
            // {
            //     type: "auth.loginUser/fulfilled", // success
            //     payload: ...
            // }

            navigate("/profile")
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <Card className="mx-auto w-75 shadow-sm border-0">
            <Card.Body>
                <h1 className="mb-3 pb-3 border-bottom">Connexion</h1>
                {error && (
                    <Alert variant="danger">
                        {error} 
                    </Alert>
                )}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="username">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Votre login"
                            isInvalid={!!errors.username}
                            {...register("username")}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Votre Mot de passe"
                            isInvalid={!!errors.password}
                            {...register("password")}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="outline-primary"
                        className="mt-2"
                    >
                        Connexion
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default LoginPage
