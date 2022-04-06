import { Fab } from '@mui/material'
import styled from 'styled-components'

export const ScreenList = styled.div`
    text-align: center;
    color: #f58a42;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
    justify-content: space-between;
    align-items: center;
`
export const AddButton = styled(Fab)`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`