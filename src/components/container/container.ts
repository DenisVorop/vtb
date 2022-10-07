import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    max-width: 1380px;
    padding: 0 30px;
    box-sizing: content-box;
    margin: 0 auto;
    height: 100%;
    flex: 1 1 auto;
`

export default React.memo(Container)
