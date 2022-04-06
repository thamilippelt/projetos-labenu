import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator';

export const login = (body, clear, history, setButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
            setButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/signUp`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}