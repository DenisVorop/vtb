import React from 'react'
import styled from 'styled-components/macro'

import { Theme } from '../../styles/theme'
import { TUserBalance } from '../../types/types'
import { titleVariant } from '../../utils/consts'
import { device } from '../../utils/utils'

import Coin from '../coin/coin'
import NFT from '../coin/nft'
import Title from '../title/title'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 24px 24px 24px 24px;
    background: linear-gradient(96.93deg, #A1C4FF -13.92%, #BEB2FE 115.95%);
    border: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
    border-radius: 16px;
    max-height: 200px;
    min-width: 200px;
    flex: 1 1 auto;
`

const Content = styled.div<{ isRow?: boolean }>`
    display: flex;
    flex-direction: row;
    gap: 24px;
    @media ${device.mobileL} {
        flex-direction: ${({ isRow }) => isRow ? 'row' : 'column'};
        gap: ${({ isRow }) => isRow ? '24px' : '8px'};
    }
`

const Balance = styled.div`
    display: flex;
    align-items: start;
    gap: 12px;
`

interface IBalanceCardProps {
    isRow?: boolean
    balance: TUserBalance
}

const BalanceCard: React.FC<IBalanceCardProps> = ({ isRow, balance }) => {
    return (
        <Wrapper>
            <Title color={Theme.color_opacity.bg_60} variant={titleVariant.H6}>Баланс</Title>
            <Content isRow={isRow}>
                <Balance>
                    <Coin w="32px" h="32px" />
                    <Title color={Theme.color.bg} variant={titleVariant.H3}>{balance.balance?.maticAmount}</Title>
                </Balance>
                <Balance>
                    <NFT w="32px" h="32px" />
                    <Title color={Theme.color.bg} variant={titleVariant.H3}>{balance.balance_nft?.length}</Title>
                </Balance>
            </Content>
        </Wrapper>
    )
}

export default React.memo(BalanceCard)
