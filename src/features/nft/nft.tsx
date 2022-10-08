import React from 'react'
import styled from 'styled-components/macro'

import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'

import Title from '../../components/title/title'
import ImageNFT from '../../components/image-nft/image-nft'
import EmptyCard from '../../components/empty-card/empty-card'
import { device } from '../../utils/utils'




const Wrapper = styled.div`
    padding: 24px;
    background: ${({ theme }) => theme.color_opacity.light_gray_8};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1 1 auto;
    @media ${device.tabletS} {
        flex: 0 1 auto;
    }
`

const List = styled.div<{ isFlex?: boolean }>`
    display: ${({ isFlex }) => isFlex ? 'flex' : 'grid'};
    grid-template-columns: repeat(3,1fr);
    gap: 8px;
    @media ${device.laptopM} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.laptopM} {
        grid-template-columns: repeat(4, 88px);
    }
`



interface INFTListProps {
    isFlex?: boolean
}
const NFTList: React.FC<INFTListProps> = ({ isFlex }) => {
    return (
        <Wrapper>
            <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>NFT</Title>
            <List isFlex={isFlex}>
                {[1, 2, 3, 4, 5, 6].map((nft, index: number) => (
                    <NFT
                        nft={nft}
                        nftId={index}
                        key={index}
                    />
                ))}
                <EmptyCard wrapper>NFT</EmptyCard>
            </List>
        </Wrapper>
    )
}

interface INFTWrapperProps {
    isEmpty?: boolean
}
const NFTWrapper = styled.div<INFTWrapperProps>`
    background: ${({ theme }) => theme.color.bg};
    border-radius: 16px;
    min-width: 88px;
    height: 102px;
    @media ${device.tabletS} {
        width: 88px;
        height: 88px;
    }
    div img {
        width: 80%;
        height: auto;
    }
`
interface INFTProps {
    nft: any
    nftId: number
}
const NFT: React.FC<INFTProps> = React.memo(({
    nft,
    nftId,
}) => {
    return (
        <NFTWrapper>
            <ImageNFT nftId={nftId} />
        </NFTWrapper>
    )
})

export default React.memo(NFTList)
