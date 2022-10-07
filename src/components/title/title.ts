import React from 'react'
import styled from 'styled-components/macro'

import { titleVariant } from '../../utils/consts'

interface ITitleProps {
    variant: string
    empty?: boolean
    color?: string
}
const Title = styled.div<ITitleProps>`
    font-family: 'Furore';
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0.04em;
    transition: all 0.3s ease 0s;
    ${({ variant }) => {
        switch (variant) {
            case titleVariant.H1:
                return {
                    fontSize: '64px',
                }
            case titleVariant.H2:
                return {
                    fontSize: '40px',
                }
            case titleVariant.H3:
                return {
                    fontSize: '32px',
                }
            case titleVariant.H4:
                return {
                    fontSize: '26px',
                }
            case titleVariant.H5:
                return {
                    fontSize: '20px',
                }
            case titleVariant.H6:
                return {
                    fontSize: '16px',
                }
        }
    }}
    -webkit-text-stroke: ${({ empty, theme }) => empty ? `.7px ${theme.color.light_gray}` : '.7px transparent'};
    color: ${({ empty, theme, color }) => empty
        ? 'transparent'
        : color
            ? color
            : theme.color.light_gray
    };
`

export default React.memo(Title)
