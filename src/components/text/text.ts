import React from 'react'
import styled from 'styled-components/macro'

import { textVariant } from './../../utils/consts'

interface ITextProps {
    variant: string
}
const Text = styled.p<ITextProps>`
    font-family: 'Plex sans';
    font-weight: 400;
    line-height: 130%;
    ${({ variant }) => {
        switch (variant) {
            case textVariant.T1:
                return {
                    fontSize: '20px',
                }
            case textVariant.T2:
                return {
                    fontSize: '16px',
                }
            case textVariant.T3:
                return {
                    fontSize: '14px',
                }
            case textVariant.T4:
                return {
                    fontSize: '12px',
                }
        }
    }}
    color: ${({ color }) => color};
`

export default React.memo(Text)
