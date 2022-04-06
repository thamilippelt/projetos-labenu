import { Button, TextField } from "@mui/material"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { signUp } from "../../services/user"
import { InputContainer, ScreenContainer } from "./styled"


const SignUpPage = () => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const history = useHistory()

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        signUp(form, clear, history)
    }
    return (
        <ScreenContainer>
            <div>
                <h1>Seja um Cookenuser!</h1>
                <h3>Cadastre-se aqui:</h3>
            </div>
            <InputContainer>
                <form onSubmit={onSubmitSignUp}>
                    <TextField
                        id="filled-basic"
                        label="Nome"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        value={form.name}
                        name={"name"}
                        onChange={onChange}
                        required
                        autoFocus
                        type={"text"}
                    />
                    <TextField id="filled-basic"
                        label="E-mail"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                        type={"email"}
                    />
                    <TextField id="filled-basic"
                        label="Senha"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        required
                        type={"password"}
                    />
                    <Button type={"submit"}
                        fullWidth
                        variant={"contained"}
                        margin={'normal'}
                    >
                        Cadastrar
                    </Button>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}

export default SignUpPage