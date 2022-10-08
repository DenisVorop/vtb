import React from 'react'
import styled from 'styled-components/macro'

import EventCard from '../../components/event-card/event-card'
import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'
import { device } from '../../utils/utils'

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
        max-width: ${({ w }) => w ? w : '916px'};
    }
`

interface IEventCardsProps {
    w?: string
    title: string
    count: number
}

const EventCards: React.FC<IEventCardsProps> = ({ w, title, count }) => {
    return (
        <Wrapper>
            <ActiveEvents>
                <Title variant={titleVariant.H4} color={Theme.color.ultramarine}>{count}</Title>
                <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>{title}</Title>
            </ActiveEvents>
            <Cards w={w}>
                {[1, 2, 3, 4, 5, 6].map(() => (
                    <EventCard />
                ))}
                <EventCard empty w="205px" />
            </Cards>
        </Wrapper>
    )
}

export default React.memo(EventCards)
