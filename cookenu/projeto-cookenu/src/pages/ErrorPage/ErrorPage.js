import { Typography } from '@mui/material'
import error from '../../assets/error.png'

const ErrorPage = () => {
    return(
        <div>
            <img src={error} />
            <Typography color={'primary'}>Erro 404 - Página não encontrada</Typography>
        </div>
    )
}

export default ErrorPage