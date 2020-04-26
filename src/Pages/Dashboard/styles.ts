import styled from 'styled-components';
import { shade } from 'polished';

const COLOR_GREEN = '#04d361';
const COLOR_RED = '#c33030';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input,
    button {
        height: 70px;
    }

    input {
        flex: 1;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid ${(props) => (props.hasError ? COLOR_RED : '#fff')};

        &::placeholder {
            color: #a8a8b3;
        }

        &:focus {
            border: 2px solid
                ${(props) => (props.hasError ? COLOR_RED : COLOR_GREEN)};
        }
    }

    button {
        width: 210px;
        background-color: ${COLOR_GREEN};
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: ${shade(0.2, COLOR_GREEN)};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: ${COLOR_RED};
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a + a {
        margin-top: 16px;
    }

    a {
        display: block;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        background-color: #fff;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin: 0 16px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;
