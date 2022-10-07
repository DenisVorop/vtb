import React from 'react'
import styled from 'styled-components/macro'

import { textVariant } from '../../utils/consts'

import Input from '../input/input'
import Text from '../text/text'


interface IWidth {
    w?: string
}
const Wrapper = styled.div<IWidth>`
    width: ${({ w }) => w ? w : '100%'};
`
const Label = styled(Text)`
    margin-bottom: 8px;
`
const Content = styled.div`
    display: flex;
    align-items: center;
`
const StyledInput = styled(Input) <IWidth>`
    width: ${({ w }) => w && w};
`


interface IInputProps {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string | number
    placeholder: string
    label?: string
    type?: string
    disabled?: boolean
    w?: string
    min?: string
    max?: string
}

const InputWithLabel: React.FC<IInputProps> = ({
    onChangeHandler,
    value,
    placeholder,
    label,
    type = 'text',
    disabled,
    w,
}) => {
    return (
        <Wrapper w={w}>
            {label && <Label variant={textVariant.T4}>{label}</Label>}
            <Content>
                <StyledInput
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    disabled={disabled}
                    w={w}
                />
            </Content>
        </Wrapper>
    )
}

export default React.memo(InputWithLabel)
