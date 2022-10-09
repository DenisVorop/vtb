import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import EventCard from '../../components/event-card/event-card'
import Popup from '../../components/popup/popup'
import Title from '../../components/title/title'
import StaticContent from '../../features/static-content/static-content'
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
    const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState({} as TEvent)

    const setMember = React.useCallback((event_id: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setUserToEvent({ id_event: event_id, id_user: user.user_id })
    }, [])

    const filteredActiveEvents = React.useMemo(() => {
        return activeEvents?.filter(item => item.TYPE?.length === 0)
    }, [activeEvents])
    const filteredInctiveEvents = React.useMemo(() => {
        return inactiveEvents?.filter(item => item.TYPE?.length === 0)
    }, [inactiveEvents])

    const handler = React.useCallback((item: TEvent) => {
        setIsVisiblePopup(true)
        setSelectedItem(item)
    }, [])

    return (
        <Wrapper>
            <Title variant={titleVariant.H4}>Все ивенты</Title>
            <Cards>
                {filteredActiveEvents?.map((item: TEvent, index: number) => {
                    return (
                        <EventCard key={index} item={item} handler={handler}>
                            <Button
                                variant={buttonVariant.PRIMARY}
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setMember(item._id!, e)}
                            >
                                Участвовать
                            </Button>
                        </EventCard>
                    )
                })}
                {filteredInctiveEvents?.map((item: TEvent, index: number) => {
                    return (
                        <EventCard disabled key={index} item={item} handler={handler}>
                            <Button disabled variant={buttonVariant.PRIMARY}>Завершено</Button>
                        </EventCard>
                    )
                })}
            </Cards>

            <Popup isVisible={isVisiblePopup} setIsVisible={setIsVisiblePopup}>
            <div>
                    {selectedItem.title}
                </div>
                <div>
                    {selectedItem.description}
                </div>
                <div>
                    <StaticContent content={[{ text: selectedItem.text }]} />
                </div>
            </Popup>
        </Wrapper>
    )
}

export default React.memo(AllEvents)
