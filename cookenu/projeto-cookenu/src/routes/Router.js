import { Switch, Route } from 'react-router-dom'
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage';
import SignUpPage from '../pages/SignUpPage/SignUp';


const Router = ({buttonText, setButtonText}) => {
    return (
        <div>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage buttonText={buttonText} setButtonText={setButtonText} />
                </Route>
                <Route exact path={"/adicionar-receita"}>
                    <AddRecipesPage />
                </Route>
                <Route exact path={"/"}>
                    <RecipesListPage />
                </Route>
                <Route exact path={"/detalhe/:id"}>
                    <RecipeDetailPage />
                </Route>
                <Route exact path={"/cadastro"}>
                    <SignUpPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>

        </div>
    )
}

export default Router;