import React from 'react'
import styled from 'styled-components/macro'

import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'
import Coin from '../coin/coin'

import Title from '../title/title'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 24px 24px 48px 24px;
    background: linear-gradient(96.93deg, #A1C4FF -13.92%, #BEB2FE 115.95%);
    border: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
    border-radius: 16px;
    max-height: 200px;
    max-width: 200px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Balance = styled.div`
    display: flex;
    align-items: start;
    gap: 12px;
`

const balances = [
    { name: 'coins', balance: 1200 },
    { name: 'nft', balance: 5 },
]

interface IBalanceCardProps { }

const BalanceCard: React.FC<IBalanceCardProps> = () => {
    return (
        <Wrapper>
            <Title color={Theme.color_opacity.bg_60} variant={titleVariant.H6}>Баланс</Title>
            <Content>
                {balances.map(item => (
                    <Balance key={item.name}>
                        <Coin w="32px" h="32px" />
                        <Title color={Theme.color.bg} variant={titleVariant.H3}>{item.balance}</Title>
                    </Balance>
                ))}
            </Content>
        </Wrapper>
    )
}

export default React.memo(BalanceCard)
