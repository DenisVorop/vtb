import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'

import useHover from '../../hooks/use-hover'

import { Theme } from '../../styles/theme'
import { TEvent } from '../../types/types'

import { path, textVariant, titleVariant } from '../../utils/consts'

import Coin from '../coin/coin'
import EmptyCard from '../empty-card/empty-card'
import Text from '../text/text'
import Title from '../title/title'

interface IWrapperProps {
  isEmpty?: boolean
  w?: string
  disabled?: boolean
}

const Wrapper = styled.div<IWrapperProps>`
  padding: ${({ w }) => !w && '20px'};
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 205px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color_opacity.light_gray_8};
  border: ${({ isEmpty, theme }) => isEmpty && `1px dashed ${theme.color_opacity.light_gray_10}`};
  flex: 1 1 auto;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 4px 32px rgba(2, 9, 21, 0.2);
  backdrop-filter: blur(17px);

  opacity: ${({ disabled }) => disabled ? .7 : 1};

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
  flex: 1 1 auto;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.ultramarine};
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
  item?: TEvent
  disabled?: boolean
  handler: (item: TEvent)=>void
}

const EventCard: React.FC<IEventCardProps> = ({ empty, w, children, item, disabled, handler }) => {
  const ref = React.useRef(null)
  const isHovering = useHover(ref)
  const navigate = useNavigate()

  const isAdmin = React.useMemo(() => item?.creator?.role === 'admin', [item])

  const handleNavigate = React.useCallback((item: TEvent) => {
    empty && navigate(path.ALL_EVENTS)
    !empty && handler(item)
  }, [empty])

  return (
    <Wrapper isEmpty={empty} ref={ref} w={w} disabled={disabled} onClick={() => handleNavigate(item!)}>
      {empty
        ? <EmptyCard w={w} isHover={isHovering}>ИВЕНТ</EmptyCard>
        : <>
          <UserInfo>
            <Icon>{isAdmin ? 'АД' : 'Ю'}</Icon>
            <Text variant={textVariant.T4} color={Theme.color_opacity.light_gray_60}>{isAdmin ? 'Администратор' : `${item?.creator?.role} ID: ${item?.creator?.id}`}</Text>
          </UserInfo>
          <ImageWrapper>
            <Image></Image>
            <Reward>
              <Coin w="16px" h="16px" />
              <Title variant={titleVariant.H6} color={Theme.color.light_gray}>{item?.rewards.map(r => r.rub)}</Title>
            </Reward>
          </ImageWrapper>
          <EventInfo>
            <Title variant={titleVariant.H6}>{item?.title || 'Пустой заголовок'}</Title>
            <Text variant={textVariant.T4} color={Theme.color_opacity.light_gray_80}>{item?.description || 'А здесь описание пустое'}</Text>
          </EventInfo>
          {children}
        </>
      }
    </Wrapper>
  )
}

export default React.memo(EventCard)
