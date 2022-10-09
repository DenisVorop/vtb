import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import EventCard from '../../components/event-card/event-card'
import Popup from '../../components/popup/popup'
import Text from '../../components/text/text'
import Title from '../../components/title/title'
import StaticContent from '../../features/static-content/static-content'

import { useGetAllActiveEventsQuery, useGetAllInactiveEventsQuery } from '../../services/events/events'
import { useGetAllMarketQuery } from '../../services/market/market'
import { TEvent } from '../../types/types'

import { buttonVariant, textVariant, titleVariant } from '../../utils/consts'

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
    const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState({ title: '', description: '', text: '' } as TEvent)
    const handler = React.useCallback((item: TEvent) => {
        setIsVisiblePopup(true)
        setSelectedItem(item)
    }, [])
    return (
        <Wrapper>
            <Title variant={titleVariant.H4}>Маркетплейс</Title>
            <Cards>
                {allMarket?.map((item: TEvent) => {
                    return (
                        <EventCard item={item} handler={handler}>
                            <Button
                                variant={buttonVariant.PRIMARY}
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
                            >
                                Купить
                            </Button>
                        </EventCard>
                    )
                })}
                <EventCard disabled handler={handler}>
                    <Button variant={buttonVariant.PRIMARY}>Закончилось</Button>
                </EventCard>
            </Cards>

            <Popup isVisible={isVisiblePopup} setIsVisible={setIsVisiblePopup}>
                <Title variant={titleVariant.H4}>
                    {selectedItem.title}
                </Title>
                <Text variant={textVariant.T1}>
                    {selectedItem.description}
                </Text>
                <Text variant={textVariant.T2}>
                    <StaticContent content={[{ text: selectedItem.text || '' }]} />
                </Text>
            </Popup>
        </Wrapper>
    )
}

export default React.memo(Marketplace)
