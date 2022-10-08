import React from 'react'
import styled from 'styled-components/macro'

import { Exchange } from '../../assets/images/_images'

import BalanceCard from '../../components/balance-card/balance-card'
import Button from '../../components/button/button'

import { buttonVariant } from '../../utils/consts'
import { device } from '../../utils/utils'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1 1 auto;
    @media ${device.tabletS} {
        gap: 24px;
    }
`

const BtnContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

interface IBalanceProps { }

const Balance: React.FC<IBalanceProps> = () => {
    return (
        <Wrapper>
            <BalanceCard  />
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
