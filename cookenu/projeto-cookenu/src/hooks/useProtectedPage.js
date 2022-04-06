import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { goToLogin } from '../routes/coordinator'
const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            goToLogin(history)
        }
    }, [history]

    )
}

export default useProtectedPage