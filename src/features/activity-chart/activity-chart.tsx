import React from 'react'
import styled from 'styled-components/macro'

import BarChart from '../../components/bar-chart/bar-chart'
import Title from '../../components/title/title'
import { Theme } from '../../styles/theme'
import { titleVariant } from '../../utils/consts'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    background: ${({ theme }) => theme.color_opacity.light_gray_4};
    box-shadow: 0px 4px 32px rgba(2, 9, 21, 0.2);
    backdrop-filter: blur(17px);
    border-radius: 16px;
    max-width: 400px;
`

interface IActivityChartProps { }

const ActivityChart: React.FC<IActivityChartProps> = () => {
    return (
        <Wrapper>
            <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_60}>Активность за неделю</Title>
            <BarChart h={186} />
        </Wrapper>
    )
}

export default React.memo(ActivityChart)
