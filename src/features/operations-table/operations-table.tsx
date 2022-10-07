import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import Coin from '../../components/coin/coin'
import Text from '../../components/text/text'
import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'

import { buttonVariant, textVariant, titleVariant } from '../../utils/consts'


const Wrapper = styled.div`
    background: ${({theme}) => theme.color_opacity.light_gray_4};
    box-shadow: 0px 4px 32px rgba(2, 9, 21, 0.2);
    backdrop-filter: blur(17px);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Operations = styled.div`

`

interface IOperationProps { }

const OperationsTable: React.FC<IOperationProps> = () => {
    return (
        <Wrapper>
            <Top>
                <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>Операции</Title>
                <Button variant={buttonVariant.TEXT}>Смотреть все</Button>
            </Top>
            <Operations>
                {[1, 2, 3, 4, 5].map(() => (
                    <Operation />
                ))}
            </Operations>
        </Wrapper>
    )
}

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: yellow;
    color: ${({ theme }) => theme.color.bg};
    font-size: 14px;
    width: 40px;
    height: 40px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    :not(:last-child) {
        border-bottom: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_20}`};
    }
`

const Info = styled.div`
    display: flex;
    gap: 12px;
`

const Oper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const Operation = React.memo(() => {
    return (
        <Content>
            <Info>
                <Icon>ВК</Icon>
                <div>
                    <Text variant={textVariant.T2}>Василий Крылов</Text>
                    <Text variant={textVariant.T4} color={Theme.color_opacity.light_gray_60}>29.09.2022 18:18</Text>
                </div>
            </Info>
            <Oper>
                <Title variant={titleVariant.H5}>+ 2400</Title>
                <Coin w="24px" h="24px" />
            </Oper>
        </Content>
    )
})

export default React.memo(OperationsTable)
