import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Form = styled.p`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 10px;
    }
`

export const ProfilePicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px;
    position: relative;
    margin-top: 20px;

    img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }

    a {
        background: ${colors.primaryColor};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        position: absolute;
        bottom: 0;
        border: none;
        border-radius: 50%;
    }
`

export const Title = styled.h1`
    text-align: center;
`
