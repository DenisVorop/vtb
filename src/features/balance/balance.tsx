import React from 'react'
import styled from 'styled-components/macro'

import BalanceCard from '../../components/balance-card/balance-card'
import Button from '../../components/button/button'
import { buttonVariant } from '../../utils/consts'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

interface IBalanceProps { }

const Balance: React.FC<IBalanceProps> = () => {
    return (
        <Wrapper>
            <BalanceCard />
            <Button variant={buttonVariant.PRIMARY}>Обменять</Button>
        </Wrapper>
    )
}

export default React.memo(Balance)
