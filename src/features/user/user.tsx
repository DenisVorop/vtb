import React from 'react'
import styled from 'styled-components/macro'

import Coin from '../../components/coin/coin'
import Text from '../../components/text/text'
import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'
import { TUser } from '../../types/types'
import { textVariant, titleVariant } from '../../utils/consts'


const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.ultramarine};
    color: ${({ theme }) => theme.color.bg};
    font-size: 14px;
    width: 40px;
    height: 40px;

`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1 1 auto;
`

const Info = styled.div`
    display: flex;
    gap: 12px;
    flex: 1 1 auto;
`

interface IUserProps {
    children: React.ReactNode
    user: TUser
}

const User: React.FC<IUserProps> = ({ children, user}) => {
    return (
        <Content>
            <Info>
                <Icon>ВК</Icon>
                <div>
                    <Title variant={titleVariant.H5}>{user.name}</Title>
                    <Text variant={textVariant.T2} color={Theme.color_opacity.light_gray_60}>{user.job_title}</Text>
                </div>
            </Info>
            {children}
        </Content>
    )
}

export default React.memo(User)
