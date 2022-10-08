import React from 'react'
import styled from 'styled-components/macro'

interface INewEventProps {}

const NewEvent: React.FC<INewEventProps> = () => {
    return (
        <div>new event page</div>
    )
}

export default React.memo(NewEvent)
