import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;

    div {
        background: #000000;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    span {
        z-index: 2;
    }
`
