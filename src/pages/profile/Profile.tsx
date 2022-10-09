import React from 'react'
import styled from 'styled-components/macro'
import { useLocation } from 'react-router-dom'

import { buttonVariant, titleVariant } from '../../utils/consts'

import User from '../../features/user/user'
import NFTList from '../../features/nft/nft'
import EventCards from '../../features/event-cards/event-cards'
import Table from '../../features/transactions-table/table'
import Contacts from '../../features/contacts/contacts'

import Title from '../../components/title/title'
import Button from '../../components/button/button'
import BalanceCard from '../../components/balance-card/balance-card'
import Popup from '../../components/popup/popup'
import InputWithLabel from '../../components/input-with-label/input-with-label'

import { useAppSelector } from '../../hooks/redux'
import { useGetUserBalanceQuery, useGetUserQuery } from '../../services/user/user'
import { useGetUserTransactionsQuery } from '../../services/transactions/transactions'
import { TUserBalance } from '../../types/types'
import { useGetActiveEventsFromUserQuery, useGetInactiveEventsFromUserQuery } from '../../services/events/events'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1 1 auto;
`

const TableWrapper = styled.div`
    box-shadow: 0px 4px 32px rgba(2, 9, 21, 0.2);
    backdrop-filter: blur(17px);
    padding: 24px;
    background-color: ${({ theme }) => theme.color_opacity.light_gray_8};
    border-radius: 12px;
`

interface IProfileProps { }

const Profile: React.FC<IProfileProps> = () => {
    const { pathname } = useLocation()

    const id = React.useMemo(() => +pathname.split('/profile/')?.[1], [pathname])

    const { user } = useAppSelector(state => state.base)
    const { data: userInfo } = useGetUserQuery(id)
    const { data: transactions } = useGetUserTransactionsQuery(id ? id : user.user_id)
    const { data: balance } = useGetUserBalanceQuery(id ? id : user.user_id)
    const { data: inactiveEventsFromUser } = useGetInactiveEventsFromUserQuery(id ? id : user.user_id)
    const { data: activeEventsFromUser } = useGetActiveEventsFromUserQuery(id ? id : user.user_id)

    const [isVisiblePopup, setIsVisiblePopup] = React.useState<boolean>(false)
    const [createTransferFields, setCreateTransferFields] = React.useState<{
        phone: string
        amount: string
    }>({ phone: '', amount: '' })
    const [confirmField, setConfirmField] = React.useState<string>('')

    const handleConfirm = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmField(e.target.value)
    }, [])

    const contacts = React.useMemo(() => {
        if (userInfo?.user_id) {
            return {
                phone: userInfo.phone,
                is_show_phone: userInfo.is_show_phone,
                telegram: userInfo.telegram,
                is_show_telegram: userInfo.is_show_telegram,
                email: userInfo.email,
                is_show_email: userInfo.is_show_email,
            }
        }
        return {
            phone: user.phone,
            is_show_phone: user.is_show_phone,
            telegram: user.telegram,
            is_show_telegram: user.is_show_telegram,
            email: user.email,
            is_show_email: user.is_show_email,
        }
    }, [user, userInfo])

    return (
        <React.Fragment>
            <Wrapper>
                <Title variant={titleVariant.H4}>Личный кабинет</Title>
                <Content>
                    <Row>
                        <User user={userInfo?.user_id ? userInfo : user}>
                            <Button
                                variant={buttonVariant.PRIMARY}
                                onClick={() => setIsVisiblePopup(true)}
                            >
                                Отправить благодарность
                            </Button>
                        </User>
                        <BalanceCard isRow balance={balance ? balance : {} as TUserBalance} />
                        <Contacts contacts={contacts} />
                    </Row>
                    <Row>
                        <NFTList isFlex />
                    </Row>
                    <EventCards
                        count={activeEventsFromUser?.length || 0}
                        title="активных ивентов"
                        w="100%"
                        list={activeEventsFromUser || []}
                    />
                    <EventCards
                        count={inactiveEventsFromUser?.length || 0}
                        title="пройденных ивентов"
                        w="100%"
                        list={inactiveEventsFromUser || []}
                    />
                    {transactions && <TableWrapper><Table list={transactions} /></TableWrapper>}
                </Content>
            </Wrapper>

            <Popup isVisible={isVisiblePopup} setIsVisible={setIsVisiblePopup}>
                <Title empty variant={titleVariant.H4}>Перечисление благодарности</Title>
                <InputWithLabel
                    onChangeHandler={e => setCreateTransferFields({ ...createTransferFields, phone: e.target.value })}
                    value={createTransferFields.phone}
                    placeholder="+7 (923) 872-89-32"
                    label="Номер телефона"
                />
                <InputWithLabel
                    onChangeHandler={e => setCreateTransferFields({ ...createTransferFields, amount: e.target.value })}
                    value={createTransferFields.amount}
                    placeholder="400"
                    label="Сумма перевода"
                    type="number"
                />
                <InputWithLabel
                    onChangeHandler={handleConfirm}
                    value={confirmField}
                    placeholder="ХОЧУ ПЕРЕВЕСТИ"
                    label="Для подтверждения платежа введите в поле ХОЧУ ПЕРЕВЕСТИ"
                />
                <Button variant={buttonVariant.PRIMARY} disabled={confirmField !== 'ХОЧУ ПЕРЕВЕСТИ'}>Перевести</Button>
            </Popup>
        </React.Fragment>
    )
}

export default React.memo(Profile)
