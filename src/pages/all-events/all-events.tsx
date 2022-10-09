import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import EventCard from '../../components/event-card/event-card'
import Title from '../../components/title/title'
import { useAppSelector } from '../../hooks/redux'

import { useGetAllActiveEventsQuery, useGetAllInactiveEventsQuery, useSetUserToEventMutation } from '../../services/events/events'
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

interface IAllEventsProps { }

const AllEvents: React.FC<IAllEventsProps> = () => {
    const { user } = useAppSelector(state => state.base)
    const { data: activeEvents } = useGetAllActiveEventsQuery(null)
    const { data: inactiveEvents } = useGetAllInactiveEventsQuery(null)
    const [setUserToEvent] = useSetUserToEventMutation()

    const setMember = React.useCallback((event_id: string) => {
        setUserToEvent({ id_event: event_id, id_user: user.user_id })
    }, [])

    const filteredActiveEvents = React.useMemo(() => {
        return activeEvents?.filter(item => item.TYPE?.length === 0)
    }, [activeEvents])
    const filteredInctiveEvents = React.useMemo(() => {
        return inactiveEvents?.filter(item => item.TYPE?.length === 0)
    }, [inactiveEvents])

    return (
        <Wrapper>
            <Title variant={titleVariant.H4}>Все ивенты</Title>
            <Cards>
                {filteredActiveEvents?.map((item: TEvent, index: number) => {
                    return (
                        <EventCard key={index} item={item}>
                            <Button
                                variant={buttonVariant.PRIMARY}
                                onClick={() => setMember(item._id!)}
                            >
                                Участвовать
                            </Button>
                        </EventCard>
                    )
                })}
                {filteredInctiveEvents?.map((item: TEvent, index: number) => {
                    return (
                        <EventCard disabled key={index} item={item}>
                            <Button disabled variant={buttonVariant.PRIMARY}>Завершено</Button>
                        </EventCard>
                    )
                })}
                <EventCard disabled>
                    <Button disabled variant={buttonVariant.PRIMARY}>Завершено</Button>
                </EventCard>
            </Cards>
        </Wrapper>
    )
}

export default React.memo(AllEvents)
