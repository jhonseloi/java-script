import styled, { createGlobalStyle } from 'styled-components'
import { primaryColor, primaryDarkColor } from '../config/colors'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        background: ${primaryDarkColor};
        color: ${primaryDarkColor};
        font-family: sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        background: ${primaryColor};
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        border: none;
        border-radius: 4px;
        padding: 10px 15px;
    }

    a {
        color: ${primaryColor};
        text-decoration: none;
    }

    ul {
        list-style: none;
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
