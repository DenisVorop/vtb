import React from 'react'
import styled from 'styled-components/macro'

import EventCard from '../../components/event-card/event-card'
import Popup from '../../components/popup/popup'
import Text from '../../components/text/text'
import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'
import { TEvent } from '../../types/types'
import { textVariant, titleVariant } from '../../utils/consts'
import { device } from '../../utils/utils'
import StaticContent from '../static-content/static-content'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: hidden;
`

const ActiveEvents = styled.div`
    display: flex;
    align-items: end;
    gap: 6px;
`

const Cards = styled.div<{ w?: string }>`
    display: flex;
    gap: 16px;
    max-width: 100%;
    overflow-x: auto;
    padding-bottom: 16px;
    @media ${device.laptopM} {
        max-width: ${({ w }) => w ? w : '750px'};
    }
`

interface IEventCardsProps {
    w?: string
    title: string
    count: number
    list: TEvent[]
}

const EventCards: React.FC<IEventCardsProps> = ({ w, title, count, list }) => {
    const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState({title: '', description: '', text: ''} as TEvent)
    const handler = React.useCallback((item: TEvent) => {
        setIsVisiblePopup(true)
        setSelectedItem(item)
    }, [])
    return (
        <Wrapper>
            <ActiveEvents>
                <Title variant={titleVariant.H4} color={Theme.color.ultramarine}>{count}</Title>
                <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>{title}</Title>
            </ActiveEvents>
            <Cards w={w}>
                {list.map((item: TEvent, index: number) => (
                    <EventCard key={index} item={item} handler={handler} />
                ))}
                <EventCard empty w="205px" item={{} as TEvent} handler={handler} />
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

export default React.memo(EventCards)
