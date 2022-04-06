import { ButtonSignUp, ImgLogin, InputContainer, ScreenContainer } from './styled';
import img from '../../assets/img-cooking.jpg'
import { Button, TextField } from '@mui/material';
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator'
import { login } from '../../services/user';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';



const LoginPage = ({buttonText, setButtonText}) => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitLogin = (e) => {
        e.preventDefault()
        login(form, clear, history, setButtonText)
    }

    

    return (
        <ScreenContainer>
            <ImgLogin src={img} />
            <h1>Login</h1>
            <InputContainer buttonText={buttonText} setButtonText={setButtonText}>
                <form onSubmit={onSubmitLogin}>
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
                        Login
                    </Button>
                </form>
            </InputContainer>
            <ButtonSignUp>
                <Button 
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    margin={'normal'}
                >
                    Cadastre-se aqui!
                </Button>
            </ButtonSignUp>
        </ScreenContainer>
    )
}

export default LoginPage