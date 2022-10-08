import React from 'react'
import styled from 'styled-components/macro'

import Container from '../../components/container/container'
import Title from '../../components/title/title'

import ActivityChart from '../../features/activity-chart/activity-chart'
import Balance from '../../features/balance/balance'
import Desktop from '../../features/desktop/desktop'
import EventCards from '../../features/event-cards/event-cards'
import Level from '../../features/level/level'
import Mobile from '../../features/mobile/mobile'
import Nft from '../../features/nft/nft'
import OperationsTable from '../../features/operations-table/operations-table'
import Tablet from '../../features/tablet/Tablet'
import { useAppSelector } from '../../hooks/redux'

import { titleVariant } from '../../utils/consts'
import { device } from '../../utils/utils'




const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Row = styled.div`
    > div:not(:last-child) {
        margin: 0px 0px 24px 0px;
    }
    @media ${device.mobileL} {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        > div:not(:last-child) {
            margin: 0;
        }
    }
`

const Reverse = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    flex-wrap: wrap;
    @media ${device.mobileL} {
        flex-direction: row;
        flex: 1 1 auto;
    }
`


interface IDashboardProps { }

const Dashboard: React.FC<IDashboardProps> = () => {
    const {user} = useAppSelector(state => state.base)
    return (
        <Wrapper>
            <Title variant={titleVariant.H4}>{user.name}, time to adventures!</Title>
            <Content>
                <Row>
                    <Balance />
                    <Level />
                    <Desktop>
                        <Nft />
                    </Desktop>
                    <Tablet more>
                        <ActivityChart />
                    </Tablet>
                </Row>
                <Row>
                    <EventCards title="Активных ивента" count={3} />
                    <Reverse>
                        <OperationsTable />
                        <Mobile>
                            <ActivityChart />
                        </Mobile>
                        <Tablet less>
                            <Nft />
                        </Tablet>
                    </Reverse>
                </Row>
            </Content>
        </Wrapper>
    )
}

export default React.memo(Dashboard)
