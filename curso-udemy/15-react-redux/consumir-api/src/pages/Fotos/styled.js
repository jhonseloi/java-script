import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Title = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    label {
        background: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 180px;
        border: 5px dashed ${colors.primaryColor};
        margin: 30px auto;
        cursor: pointer;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 180px;
            height: 180px;
        }
    }

    input {
        display: none;
    }
`
