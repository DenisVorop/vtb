import React from 'react'
import styled from 'styled-components/macro'

import { Exchange } from '../../assets/images/_images'

import BalanceCard from '../../components/balance-card/balance-card'
import Button from '../../components/button/button'
import { TUserBalance } from '../../types/types'

import { buttonVariant } from '../../utils/consts'
import { device } from '../../utils/utils'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 0 0 auto;
    @media ${device.tabletS} {
        gap: 24px;
    }
`

const BtnContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

interface IBalanceProps {
    balance: TUserBalance
}

const Balance: React.FC<IBalanceProps> = ({ balance }) => {
    return (
        <Wrapper>
            <BalanceCard balance={balance} />
            <Button variant={buttonVariant.PRIMARY}>
                <BtnContent>
                    <div>Обменять</div>
                    <Exchange />
                </BtnContent>
            </Button>
        </Wrapper>
    )
}

export default React.memo(Balance)
