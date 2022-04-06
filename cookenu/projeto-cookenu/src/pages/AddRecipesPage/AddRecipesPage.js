import { Button, TextField } from "@mui/material"
import useForm from "../../hooks/useForm"
import useProtectedPage from "../../hooks/useProtectedPage"
import { InputContainer, ScreenContainer } from "./styled"
import { createRecipe } from '../../services/recipe'

const AddRecipesPage = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({title: "", description: "", image:""})

        const onSubmitForm = (e) => {
        e.preventDefault()
        createRecipe(form, clear)
        
    }

    return (
        <ScreenContainer>
            <h1>Adicionar nova Receita</h1>
            <h3>Preencha todos os dados para adicionar uma nova receita</h3>
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField gutterBotton
                        id="filled-basic"
                        color={"primary"}
                        label="Título"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        name={"title"}
                        value={form.title}
                        required
                        type={"text"}
                        onChange={onChange}
                    />
                     <TextField 
                        id="filled-basic"
                        color={"primary"}
                        label="Descrição"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        name={"description"}
                        value={form.description}
                        required
                        type={"text"}
                        onChange={onChange}
                    />
                     <TextField 
                        id="filled-basic"
                        color={"primary"}
                        label="Foto"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        name={"image"}
                        value={form.image}
                        required
                        type={"text"}
                        onChange={onChange}
                    />
                    <Button type={"submit"}
                        fullWidth
                        variant={"contained"}
                        margin={'normal'}
                    >
                        Adicionar Receita
                    </Button>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}

export default AddRecipesPage