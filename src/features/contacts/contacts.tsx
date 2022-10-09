import React from 'react'
import styled from 'styled-components/macro'

import { MailIcon, PhoneIcon, TelegramIcon } from '../../assets/images/_images'
import Copy from '../../components/copy/copy'
import Text from '../../components/text/text'

import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'
import { TContacts } from '../../types/types'
import { textVariant, titleVariant } from '../../utils/consts'



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: ${({ theme }) => theme.color_opacity.light_gray_8};
    box-shadow: 0px 4px 32px rgba(2, 9, 21, 0.2);
    backdrop-filter: blur(17px);
    border-radius: 16px;
    padding: 24px;
    flex: 1 1 auto;
`

const List = styled.div`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`

const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`


interface IContactsProps {
    contacts: TContacts
}

const Contacts: React.FC<IContactsProps> = ({ contacts }) => {
    return (
        <Wrapper>
            <Title variant={titleVariant.H6}>Контакты</Title>
            <List>
                <Contact>
                    <div><PhoneIcon /></div>
                    <Text variant={textVariant.T2} color={Theme.color.ultramarine}>
                        <Copy>
                            {contacts.is_show_phone ? 'Скрыто' : contacts.phone}
                        </Copy>
                    </Text>
                </Contact>
                <Contact>
                    <div><TelegramIcon /></div>
                    <Text variant={textVariant.T2} color={Theme.color.ultramarine}>
                        <Copy>
                            {contacts.is_show_telegram ? 'Скрыто' : contacts.telegram}
                        </Copy>
                    </Text>
                </Contact>
                <Contact>
                    <div><MailIcon /></div>
                    <Text variant={textVariant.T2} color={Theme.color.ultramarine}>
                        <Copy>
                            {contacts.is_show_email ? 'Скрыто' : contacts.email}
                        </Copy>
                    </Text>
                </Contact>
            </List>
        </Wrapper>
    )
}

export default React.memo(Contacts)
