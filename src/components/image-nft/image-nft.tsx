import React from 'react'
import styled from 'styled-components/macro'

import { getNFTImage } from '../../utils/utils'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const Image = styled.img`
`

interface IImageNFTProps {
    nftId: number
}
const ImageNFT: React.FC<IImageNFTProps> = ({ nftId }) => {
    return <Wrapper>
        <Image alt="nft" src={getNFTImage(nftId)} />
    </Wrapper>
}

export default React.memo(ImageNFT)
