import React from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'

import { Check } from '../../assets/images/_images'
import { textVariant, titleVariant } from '../../utils/consts'
import { Theme } from '../../styles/theme'

import Container from '../../components/container/container'
import Text from '../../components/text/text'
import Title from '../../components/title/title'

import { useAuth } from '../../services/hooks/use-auth'
import { useAppSelector } from '../../hooks/redux'


const userList = [
    'Статистика по участию в событиях',
    'Начисление NFT-сертификатов/монет коллегам к качестве благодарности',
    'Обмен NFT-сертификатов/монет в маркетплейсе',
    'Просмотр своих NFT-сертификатов/монет их начисления и списания',
    'Просмотр NFT-сертификатов/монет коллег их начисления и списания',
    'Обмен NFT-сертификатов/монет коллег на рубли Банка России',
]
const adminList = [
    'Пополнение баланса пользователей',
    'Создание новых событий с выбором нужных  отделов/коллег',
]




const Wrapper = styled.div`
    padding-top: 40px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    max-width: 914px;
    margin: 0 auto;
`

const Cards = styled.div`
    display: flex;
    gap: 40px;
`

const Login: React.FC = () => {
    const [, auth] = useAuth('auth')

    const handleUserRole = React.useCallback(() => {
        auth(1)
    }, [auth])
    const handleAdminRole = React.useCallback(() => {
        auth(2)
    }, [auth])

    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title variant={titleVariant.H2} empty>Войти как</Title>
                    <Cards>
                        <Card
                            list={userList}
                            bg="linear-gradient(99.41deg, #FFC5FF 7.77%, #BEB2FE 130.55%)"
                            title="Пользователь"
                            onClickHandler={handleUserRole}
                        />
                        <Card
                            list={adminList}
                            bg="linear-gradient(93.82deg, #FFC5FF -37.57%, #BEB2FE 39.45%, #A1C4FF 125.16%)"
                            title="Администратор"
                            onClickHandler={handleAdminRole}
                        />
                    </Cards>
                </Content>
            </Wrapper>
        </Container>
    )
}

interface IContentCardProps {
    bg: string
}
const ContentCard = styled.div<IContentCardProps>`
    background: ${({ bg }) => bg};
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 50%;
    transition: all 0.3s ease 0s;
    :hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 32px rgba(254, 254, 252, 0.4);
        cursor: pointer;
    }
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const ListItem = styled.div`
    display: flex;
    gap: 8px;
`

interface ICardProps {
    bg: string
    list: string[]
    title: string
    onClickHandler: () => void
}
const Card: React.FC<ICardProps> = React.memo(({ bg, list, title, onClickHandler }) => {
    return (
        <ContentCard bg={bg} onClick={onClickHandler}>
            <Title color={Theme.color.bg} variant={titleVariant.H4}>{title}</Title>
            <List>
                {list.map((item: string, idx: number) => {
                    return (
                        <ListItem key={idx}>
                            <div><Check /></div>
                            <Text color={Theme.color.bg} variant={textVariant.T2}>{item}</Text>
                        </ListItem>
                    )
                })}
            </List>
        </ContentCard>
    )
})

export default React.memo(Login)
