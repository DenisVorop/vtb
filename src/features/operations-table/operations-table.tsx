import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import Coin from '../../components/coin/coin'
import Text from '../../components/text/text'
import Title from '../../components/title/title'
import { useAppSelector } from '../../hooks/redux'
import { useGetUserTransactionsQuery } from '../../services/transactions/transactions'
import { Theme } from '../../styles/theme'
import { TUserTransaction } from '../../types/types'

import { buttonVariant, path, textVariant, titleVariant } from '../../utils/consts'


const Wrapper = styled.div`
    background: ${({ theme }) => theme.color_opacity.light_gray_4};
    box-shadow: 0px 4px 32px rgba(2, 9, 21, 0.2);
    backdrop-filter: blur(17px);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1 1 auto;
    /* min-width: 360px; */
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Operations = styled.div`

`

interface IOperationsProps { }

const OperationsTable: React.FC<IOperationsProps> = () => {
    const navigate = useNavigate()
    const navigateTo = React.useCallback(() => {
        navigate(path.PROFILE)
    }, [])
    const { user } = useAppSelector(state => state.base)
    const { data } = useGetUserTransactionsQuery(user.user_id)
    return (
        <Wrapper>
            <Top>
                <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>Операции</Title>
                <Button variant={buttonVariant.TEXT} onClick={navigateTo}>Смотреть все</Button>
            </Top>
            <Operations>
                {data?.length
                    ? data.map((item: TUserTransaction, index: number) => (
                        <Operation item={item} />
                    ))
                    : <span>Транзакций нет</span>
                }
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

interface IOperationProps {
    item: TUserTransaction
}
const Operation: React.FC<IOperationProps> = React.memo(({ item }) => {
    //todo !!! change user_to -> user_from
    return (
        <Content>
            <Info>
                <Icon>ВК</Icon>
                <div>
                    <Text variant={textVariant.T2}>{item.user_to?.name}</Text>
                    <Text variant={textVariant.T4} color={Theme.color_opacity.light_gray_60}>{item.date}</Text>
                </div>
            </Info>
            <Oper>
                <Title variant={titleVariant.H5}>+ {item.value_matic}</Title>
                <Coin w="24px" h="24px" />
            </Oper>
        </Content>
    )
})

export default React.memo(OperationsTable)
