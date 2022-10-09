import React from 'react'
import styled from 'styled-components/macro'

import { device } from '../../utils/utils'

const Container = styled.div`
    max-width: 1320px;
    padding: 24px 15px;
    box-sizing: content-box;
    margin: 0 auto;
    height: 100%;
    flex: 1 1 auto;
    @media ${device.tabletS} {
        padding: 32px 30px;
    }
`

export default React.memo(Container)
