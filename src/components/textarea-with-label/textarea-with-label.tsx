import React from 'react'
import styled from 'styled-components/macro'

import { textVariant } from '../../utils/consts'

import Textarea from '../textarea/textarea'
import Text from '../text/text'


interface IWidth {
    w?: string
    h?:string
}
const Wrapper = styled.div<IWidth>`
  width: ${({ w }) => w ? w : '100%'};
  height: ${({ h }) => h ? h : '100%'};
`
const Label = styled(Text)`
    margin-bottom: 8px;
`
const Content = styled.div`
    display: flex;
    align-items: center;
`
const StyledTextarea = styled(Textarea) <IWidth>`
    width: ${({ w }) => w && w};
    height: ${({ h }) => h ? `calc(${h} - 16px)` : '100%'};
`


interface ITextareaProps {
    onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    value: string
    placeholder: string
    label?: string
    disabled?: boolean
    w?: string
    min?: string
    max?: string
    h?:string
}

const TextareaWithLabel: React.FC<ITextareaProps> = ({
    onChangeHandler,
    value,
    placeholder,
    label,
    disabled,
    w,
    h='180px',
}) => {
    return (
        <Wrapper w={w} h={h}>
            {label && <Label variant={textVariant.T4}>{label}</Label>}
            <Content>
                <StyledTextarea
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    disabled={disabled}
                    w={w}
                    h={h}
                />
            </Content>
        </Wrapper>
    )
}

export default React.memo(TextareaWithLabel)
