import React from 'react'
import styled from 'styled-components/macro'

import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'

import Title from '../../components/title/title'




const Wrapper = styled.div`
    padding: 24px;
    background: ${({ theme }) => theme.color_opacity.light_gray_4};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
`



interface INFTListProps { }
const NFTList: React.FC<INFTListProps> = () => {
    return (
        <Wrapper>
            <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>NFT</Title>
            <List>
                {[1, 2, 3, 4, 5].map((nft, index: number) => (
                    <NFT
                        nft={nft}
                        key={index}
                    />
                ))}
            </List>
        </Wrapper>
    )
}

interface INFTProps {
    nft: any
}
const NFT: React.FC<INFTProps> = React.memo(({
    nft,
}) => {
    return (
        <div>yo</div>
    )
})

export default React.memo(NFTList)
