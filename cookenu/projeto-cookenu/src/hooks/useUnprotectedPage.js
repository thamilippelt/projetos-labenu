import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { goToRecipesList } from '../routes/coordinator'

const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            goToRecipesList(history)
        }
    }, [history]

    )
}

export default useUnprotectedPage