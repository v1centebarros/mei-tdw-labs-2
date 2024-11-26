import styled, { css } from 'styled-components';

export const TodoApp = styled.div`
    background: #fff;
    margin: 2rem 0 4rem 0;
    padding: 1rem;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 550px) {
        padding: 4rem;
    }

    > * {
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
    }

    > form {
        max-width: 100%;
    }

    > h1 {
        display: block;
        max-width: 100%;
        text-align: center;
        margin: 0 0 1rem;
    }
`;

export const InputLg = styled.input`
    padding: 2rem;
    border: 2px solid #00bafd;

    &:focus {
        border-color: #174945;
        box-shadow: inset 0 0 0 2px;
    }

    display: inline-block;
    width: 100%;
    font-size: 1.9rem;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 620px) {
        font-size: 2.4rem;
    }
`;

const buttonStyles = css`
    padding: 0.8rem 1rem 0.7rem;
    border: 0.2rem solid #4d4d4d;
    cursor: pointer;
    text-transform: capitalize;
`;

const primaryStyles = css`
    color: #206924;
    background-color: #4b8030;
`;

const dangerStyles = css`
    color: #fff;
    background-color: #caae3c;
    border-color: #bd9121;
`;

export const Button = styled.button`
    ${buttonStyles}
    ${({ primary }) => primary && primaryStyles}
    ${({ danger }) => danger && dangerStyles}
`;