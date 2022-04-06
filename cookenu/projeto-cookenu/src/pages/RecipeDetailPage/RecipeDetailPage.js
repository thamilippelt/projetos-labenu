import useProtectedPage from "../../hooks/useProtectedPage"
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { RecipeContainer, RecipeImage, ScreenDetail } from "./styled"
import { Typography } from "@material-ui/core"

const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

    return (
        <ScreenDetail>
            {recipe &&
            <RecipeContainer>
                <RecipeImage src={recipe.image}/>
                <Typography align={'center'} variant={'h6'} color={'primary'}>{recipe && recipe.title}</Typography>
                <Typography align={'center'}>{recipe && recipe.description}</Typography>
            </RecipeContainer>}
        </ScreenDetail>
    )
}

export default RecipeDetailPage