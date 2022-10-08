import React from 'react'
import styled from 'styled-components/macro'

import coin from '../../assets/images/coin.png'

const Icon = styled.div<ICoinProps>`
    width: ${({ w }) => w};
    height: ${({ h }) => h};
    border-radius: 50%;
    > img {
        width: 100%;
        height: auto;
    }
`

interface ICoinProps {
    w: string
    h: string
}

const Coin: React.FC<ICoinProps> = ({ w, h }) => {
    return <Icon w={w} h={h}><img src={coin} alt="coin" /></Icon>
}

export default React.memo(Coin)
