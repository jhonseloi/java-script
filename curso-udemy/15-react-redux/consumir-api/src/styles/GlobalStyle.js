import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        background: ${colors.primaryDarkColor};
        color: ${colors.primaryDarkColor};
        font-family: sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        background: ${colors.primaryColor};
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        border: none;
        border-radius: 4px;
        padding: 10px 15px;
    }

    a {
        color: ${colors.primaryColor};
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successColor};
        color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: ${colors.errorColor};
        color: #fff;
    }
`

export const Container = styled.section`
    max-width: 350px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
`
