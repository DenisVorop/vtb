import React from 'react'
import styled from 'styled-components/macro'

import useHover from '../../hooks/use-hover'

import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'

import Title from '../title/title'


interface IWrapperProps {
    wrapper?: boolean
    isHovering?: boolean
    w?: string
}
const Wrapper = styled.div<IWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    border-radius: 16px;
    width: ${({ w }) => w};
    min-width: 88px;
    ${({ wrapper, theme }) => {
        if (wrapper) {
            return {
                border: `1px dashed ${theme.color_opacity.light_gray_10}`,
                flex: '1 1 auto',
                transition: 'all 0.3s ease 0s',
            }
        }
        return {}
    }}
    :hover {
        border: ${({ wrapper, theme, isHovering }) => wrapper && isHovering && `1px dashed ${theme.color_opacity.light_gray_40}`};
        cursor: pointer;
    }
`

interface IEmptyCardProps {
    children: React.ReactNode
    isHover?: boolean
    wrapper?: boolean
    w?: string
}

const EmptyCard: React.FC<IEmptyCardProps> = ({ children, wrapper, isHover, w }) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const hover = React.useMemo(() => {
        if (typeof isHover !== 'undefined') {
            return isHover
        }
        return isHovering
    }, [isHover, isHovering])

    return <Wrapper wrapper={wrapper} isHovering={hover} ref={ref} w={w}>
        <Title
            variant={titleVariant.H5}
            color={
                hover
                    ? Theme.color_opacity.light_gray_40
                    : Theme.color_opacity.light_gray_10
            }
        >
            {children}
        </Title>
    </Wrapper>
}

export default React.memo(EmptyCard)
