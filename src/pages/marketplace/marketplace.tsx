import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import EventCard from '../../components/event-card/event-card'
import Title from '../../components/title/title'

import { buttonVariant, titleVariant } from '../../utils/consts'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
`

interface IMarketplaceProps { }

const Marketplace: React.FC<IMarketplaceProps> = () => {
    return (
        <Wrapper>
            <Title variant={titleVariant.H4}>Маркетплейс</Title>
            <Cards>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                    return (
                        <EventCard>
                            <Button variant={buttonVariant.PRIMARY}>Купить</Button>
                        </EventCard>
                    )
                })}
            </Cards>
        </Wrapper>
    )
}

export default React.memo(Marketplace)
