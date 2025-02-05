import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Nav = styled.nav`
    background: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    a {
        color: #fff;
        margin: 0 10px 0 0;
        font-weight: bold;
    }
`
