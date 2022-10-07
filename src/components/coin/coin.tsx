import React from 'react'
import styled from 'styled-components/macro'

const Icon = styled.div<ICoinProps>`
    width: ${({ w }) => w};
    height: ${({ h }) => h};
    background-color: yellow;
    border-radius: 50%;
`

interface ICoinProps {
    w: string
    h: string
}

const Coin: React.FC<ICoinProps> = ({ w, h }) => {
    return (
        <Icon w={w} h={h} />
    )
}

export default React.memo(Coin)
