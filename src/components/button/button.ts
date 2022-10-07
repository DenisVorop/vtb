import React from 'react'
import styled from 'styled-components/macro'


interface IButtonProps {
    w?: string
    variant: string
    size?: string
}


const Button = styled.button<IButtonProps>`
    transition: background-color 0.3s ease 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    white-space: nowrap;

    font-family: 'Furore';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.04em;

    border-radius: 32px;
    border: ${({ theme }) => `1px solid ${theme.color.violet}`};
    padding: 12px 24px;
    width: ${({ w }) => w ? w : '100%'};

    ${({ variant, theme }) => {
        switch (variant) {
            case 'primary': {
                return {
                    color: theme.color.bg,
                    backgroundColor: theme.color.violet,
                }
            }
            case 'secondary': {
                return {
                    color: theme.color.light_gray,
                    backgroundColor: 'transparent',
                }
            }
            case 'text': {
                return {
                    padding: '0px',
                    border: 'none',
                    width: 'fit-content',
                    color: theme.color.ultramarine,
                    fontFamily: 'inherit',
                }
            }
        }
    }}
    :hover {
        cursor: pointer;
        border: ${({ theme }) => `1px solid ${theme.color_opacity.violet_80}`};
        ${({ variant, theme }) => {
        switch (variant) {
            case 'primary': {
                return {
                    background: `${theme.color_opacity.violet_80}`,
                }
            }
            case 'secondary': {
                return {
                    color: theme.color.light_gray,
                    background: `${theme.color_opacity.light_gray_10}`,
                }
            }
            case 'text': {
                return {
                    border: 'none',
                }
            }
        }
    }}
    }
    :disabled {
        cursor: not-allowed;
        border: ${({ theme }) => `2px solid ${theme.color_opacity.violet_40}`};
        ${({ variant, theme }) => {
        switch (variant) {
            case 'primary': {
                return {
                    color: `${theme.color_opacity.bg_60}`,
                    background: `${theme.color_opacity.violet_40}`,
                }
            }
            case 'secondary': {
                return {
                    background: 'transparent',
                    border: '2px solid rgba(207, 205, 211, 0.6)',
                    color: '#B6B3BD',
                }
            }
        }
    }}
    }
    :focus {
        outline: ${({ theme }) => `2px solid ${theme.color.yellow}`}
    }
    :active {
        outline: ${({ theme }) => `2px solid ${theme.color.yellow}`}
    }
    ${({ size }) => {
        switch (size) {
            case 'small': {
                return {
                    padding: '6px 12px',
                }
            }
        }
    }}
`

export default React.memo(Button)
