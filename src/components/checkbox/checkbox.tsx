import React from 'react'
import styled from 'styled-components/macro'

import check from '../../assets/images/check-checkbox.svg'

import { textVariant } from '../../utils/consts'

import Text from '../text/text'




const Label = styled.label`
    position: relative;
    padding-left: 24px;
    display: inline-flex;
    align-items: center;
`
const Input = styled.input`
    appearance: none;
    position: absolute;

    :focus + span {
        outline: ${({ theme }) => `2px solid ${theme.color.yellow}`};
    }
    :disabled + span {
        border: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
    }
    :hover + span {
        background-color: ${({ theme }) => `${theme.color_opacity.light_gray_10}`};
        cursor: pointer;
    }
    :checked + span {
        background-color: ${({ theme }) => theme.color.ultramarine};
        border: ${({ theme }) => `1px solid ${theme.color.ultramarine}`};
    }
    :checked:disabled + span, :checked:disabled:hover + span {
        background-color: ${({ theme }) => `${theme.color_opacity.ultramarine_60}`};
        border: ${({ theme }) => `1px solid ${theme.color_opacity.ultramarine_60}`};
    }
    :hover:checked + span {
        border: ${({ theme }) => `1px solid ${theme.color.light_gray}`};
    }
    :disabled:hover + span {
        background-color: ${({ theme }) => 'transparent'};
        border: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
        cursor: not-allowed;
    }
`
interface IBoxProps { checked: boolean }
const Box = styled.span<IBoxProps>`
    position: absolute;
    top: 3px;
    left: 0%;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.color.light_gray}`};
    transition: all 0.3s ease 0s;
    background-image: url(${props => props.checked ? check : ''});
    background-repeat:no-repeat;
    background-position: center center;
`

const StyledText = styled(Text)`
    user-select: none;
    white-space: nowrap;
`

interface ICheckboxProps {
    children: React.ReactNode
    checked: boolean
    disabled: boolean
}

const Checkbox: React.FC<ICheckboxProps> = ({ children, checked, disabled }) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)

    const handleChangeChecked = React.useCallback(() => {
        setIsChecked(!isChecked)
    }, [isChecked])

    return (
        <Label onClick={handleChangeChecked}>
            <Input type="checkbox" checked={checked} disabled={disabled} />
            <Box checked={checked} />
            <StyledText variant={textVariant.T2}>{children}</StyledText>
        </Label>
    )
}

export default React.memo(Checkbox)
