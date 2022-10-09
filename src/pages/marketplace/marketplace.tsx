import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import EventCard from '../../components/event-card/event-card'
import Title from '../../components/title/title'

import { useGetAllActiveEventsQuery, useGetAllInactiveEventsQuery } from '../../services/events/events'
import { useGetAllMarketQuery } from '../../services/market/market'
import { TEvent } from '../../types/types'

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
    const { data: allMarket } = useGetAllMarketQuery({ 'TYPE': ['market_item'] })
    console.log(allMarket)
    return (
        <Wrapper>
            <Title variant={titleVariant.H4}>Маркетплейс</Title>
            <Cards>
                {allMarket?.map((item: any) => {
                    return (
                        <EventCard item={item}>
                            <Button
                                variant={buttonVariant.PRIMARY}
                            >
                                Купить
                            </Button>
                        </EventCard>
                    )
                })}
                {/* {allMarket?.map(() => {
                    return (
                        <EventCard disabled>
                            <Button variant={buttonVariant.PRIMARY}>Закончилось</Button>
                        </EventCard>
                    )
                })} */}
                <EventCard disabled>
                    <Button variant={buttonVariant.PRIMARY}>Закончилось</Button>
                </EventCard>
            </Cards>
        </Wrapper>
    )
}

export default React.memo(Marketplace)
