import React from 'react'
import styled from 'styled-components/macro'

import Title from '../title/title'

const StyledTitle = styled(Title)`
    font-size: 10px;
`

const Image = styled.div<IImageNFTProps>`
    width: ${({ w }) => w};
    height: ${({ h }) => h};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.bg};
    display: flex;
    align-items: center;
    justify-content: center;
`

interface IImageNFTProps {
    w: string
    h: string
}

const ImageNFT: React.FC<IImageNFTProps> = ({ w, h }) => {
    return <Image w={w} h={h}><StyledTitle>NFT</StyledTitle></Image>
}

export default React.memo(ImageNFT)
