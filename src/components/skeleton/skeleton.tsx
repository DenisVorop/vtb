import React from 'react'
import styled from 'styled-components/macro'

interface ISkeletonProps {
    w?: string
    h: string
}

const Skeleton = styled.div<ISkeletonProps>`
    width: ${({ w }) => w ? w : '100%'};
    height: ${({ h }) => h && h};
`

export default React.memo(Skeleton)
