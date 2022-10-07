import React from 'react'
import styled from 'styled-components/macro'

import EventCard from '../../components/event-card/event-card'
import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ActiveEvents = styled.div`
    display: flex;
    align-items: end;
    gap: 6px;
`

const Cards = styled.div`
    display: flex;
    gap: 16px;
`

interface IEventCardsProps { }

const EventCards: React.FC<IEventCardsProps> = () => {
    return (
        <Wrapper>
            <ActiveEvents>
                <Title variant={titleVariant.H4} color={Theme.color.ultramarine}>3</Title>
                <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>Активных ивента</Title>
            </ActiveEvents>
            <Cards>
                {[1, 2, 3, 4, 5].map(() => (
                    <EventCard />
                ))}
                <EventCard empty />
            </Cards>
        </Wrapper>
    )
}

export default React.memo(EventCards)
