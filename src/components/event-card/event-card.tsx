import React from 'react'
import styled from 'styled-components/macro'

import useHover from '../../hooks/use-hover'

import { Theme } from '../../styles/theme'

import { textVariant, titleVariant } from '../../utils/consts'

import Coin from '../coin/coin'
import EmptyCard from '../empty-card/empty-card'
import Text from '../text/text'
import Title from '../title/title'

interface IWrapperProps {
    isEmpty?: boolean
    w?: string
}
const Wrapper = styled.div<IWrapperProps>`
    padding: ${({ w }) => !w && '20px'};
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 205px;
    border-radius: 16px;
    background-color: #080F1B;
    border: ${({ isEmpty, theme }) => isEmpty && `1px dashed ${theme.color_opacity.light_gray_10}`};
    flex: 1 1 auto;
    transition: all 0.3s ease 0s;

    :hover {
        border: ${({ isEmpty, theme }) => isEmpty && `1px dashed ${theme.color_opacity.light_gray_40}`};
        cursor: pointer;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: fit-content;
    border-radius: 8px;
    overflow: hidden;
`

const Image = styled.div`
    background-color: ${({ theme }) => theme.color.green};
    width: 165px;
    height: 112px;
`

const Reward = styled.div`
    position: absolute;
    bottom: 4px;
    right: 4px;
    background: rgba(2, 9, 21, 0.6);
    border-radius: 8px;
    padding: 4px;
    display: flex;
    align-items: center;
    gap: 2px;
`

const EventInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: yellow;
    color: ${({ theme }) => theme.color.bg};
    font-size: 6px;
    width: 16px;
    height: 16px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

interface IEventCardProps {
    empty?: boolean
    w?: string
    children?: React.ReactNode
}

const EventCard: React.FC<IEventCardProps> = ({ empty, w, children }) => {
    const ref = React.useRef(null)
    const isHovering = useHover(ref)

    return (
        <Wrapper isEmpty={empty} ref={ref} w={w}>
            {empty
                ? <EmptyCard w={w} isHover={isHovering}>ИВЕНТ</EmptyCard>
                : <>
                    <UserInfo>
                        <Icon>АД</Icon>
                        <Text variant={textVariant.T4} color={Theme.color_opacity.light_gray_60}>Администратор</Text>
                    </UserInfo>
                    <ImageWrapper>
                        <Image></Image>
                        <Reward>
                            <Coin w="16px" h="16px" />
                            <Title variant={titleVariant.H6} color={Theme.color.light_gray}>1200</Title>
                        </Reward>
                    </ImageWrapper>
                    <EventInfo>
                        <Title variant={titleVariant.H6}>месячные продажи</Title>
                        <Text variant={textVariant.T4}>Награда тому, кто выполнит больше продаж</Text>
                    </EventInfo>
                    {children && children}
                </>
            }
        </Wrapper>
    )
}

export default React.memo(EventCard)
