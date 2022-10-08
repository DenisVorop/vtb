import React from 'react'
import styled from 'styled-components/macro'

import Coin from '../../components/coin/coin'
import ProgressBar from '../../components/progress-bar/progress-bar'
import Text from '../../components/text/text'
import Title from '../../components/title/title'

import { Theme } from '../../styles/theme'
import { textVariant, titleVariant } from '../../utils/consts'
import { device } from '../../utils/utils'

const Wrapper = styled.div`
    padding: 24px;
    /* border: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`}; */
    filter: drop-shadow(0px 4px 32px rgba(2, 9, 21, 0.2));
    backdrop-filter: blur(17px);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background: ${({theme}) => theme.color_opacity.light_gray_8};
    width: 100%;
    @media ${device.tabletS} {
        width: auto;
    }
`

const ProgressBarContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    white-space: nowrap;
`

const CoinsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const PositionBlock = styled.div`
    position: relative;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
`

interface ILevelProps { }

const Level: React.FC<ILevelProps> = () => {
    return (
        <Wrapper>
            <PositionBlock>
                <ProgressBar
                    strokeWidth={14}
                    svgWidth={186}
                    svgHeight={186}
                    percent={70}
                    stroke={Theme.color.ultramarine}
                    secondaryLineStroke={Theme.color_opacity.light_gray_10}
                />
                <ProgressBarContent>
                    <Title variant={titleVariant.H6} color={Theme.color.ultramarine}>2 уровень</Title>
                    <FlexColumn>
                        <Flex>
                            <Coin w="24px" h="24px" />
                            <Title variant={titleVariant.H4}>1200</Title>
                        </Flex>
                        <div>
                            <Text variant={textVariant.T2} color={Theme.color_opacity.light_gray_80}>из 2500</Text>
                        </div>
                    </FlexColumn>
                </ProgressBarContent>
            </PositionBlock>
            <Content>
                <CoinsWrapper>
                    <Title variant={titleVariant.H6} color={Theme.color_opacity.light_gray_80}>300</Title>
                    <Coin w="16px" h="16px" />
                </CoinsWrapper>
                <div>
                    <Text variant={textVariant.T4}>за достижение 3 уровня</Text>
                </div>
            </Content>
        </Wrapper>
    )
}

export default React.memo(Level)
