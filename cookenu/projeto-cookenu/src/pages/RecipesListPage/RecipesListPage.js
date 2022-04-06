import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import RecipeCard from '../../RecipeCard/RecipeCard';
import { ScreenList, AddButton } from './styled';
import { BASE_URL } from '../../constants/urls'
import { Add } from '@material-ui/icons';
import { goToAddRecipes, goToRecipeDatail  } from '../../routes/coordinator';
import { useHistory } from 'react-router';


const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()

    const onClickCard = (id) => {
        goToRecipeDatail(history, id)
    }

    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    const recipesList = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
            />)
    })

    return (
        <ScreenList>
            {recipesList}
            <AddButton
                color={'primary'}
                onClick={() => goToAddRecipes(history)}
            >
                <Add />
            </AddButton>
        </ScreenList>
    )
}

export default RecipesListPage