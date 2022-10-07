import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    svg:last-child {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
`

interface ICircleProps {
    circumference: number
    offset: number
}

const Circle = styled.circle<ICircleProps>`
    transform-origin: center;
    stroke-lineCap: round;
    transform: rotate(-90deg);
    stroke-dasharray: ${({ circumference }) => `${circumference} ${circumference}`};
    stroke-dashoffset: ${({ offset }) => offset};
    transition: all 0.3s ease 0s;
`

interface IProgressBarProps {
    strokeWidth?: number
    fill?: string
    stroke?: string
    svgWidth?: number
    svgHeight?: number
    percent?: number
    secondaryLineStroke?: string
    secondaryBackgroundFill?: string
}

const ProgressBar: React.FC<IProgressBarProps> = ({
    strokeWidth = 4,
    fill = 'transparent',
    stroke = '#fff',
    svgWidth = 120,
    svgHeight = 120,
    percent = 70,
    secondaryLineStroke = 'transparent',
    secondaryBackgroundFill = 'transparent',
}) => {
    const [circumference, setCircumference] = React.useState<number>(0)
    const [offset, setOffset] = React.useState<number>(0)
    const [radius, setRadius] = React.useState<number>(0)
    const [cx, setCx] = React.useState<number>(0)
    const [cy, setCy] = React.useState<number>(0)

    React.useEffect(() => {
        setRadius((svgWidth / 2) - (strokeWidth))
        setCx(svgWidth / 2)
        setCy(svgWidth / 2)
    }, [svgWidth, strokeWidth])

    React.useEffect(() => {
        setCircumference(2 * Math.PI * radius)
    }, [radius])

    React.useEffect(() => {
        setOffset(circumference - percent / 100 * circumference)
    }, [circumference, percent])

    const secondaryOffset = React.useMemo(() => circumference - 100 / 100 * circumference, [circumference])

    return (
        <Wrapper>
            <svg width={svgWidth} height={svgHeight}>
                <Circle
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill={fill}
                    circumference={circumference}
                    offset={offset}
                />
            </svg>
            <svg width={svgWidth} height={svgHeight}>
                <Circle
                    stroke={secondaryLineStroke}
                    strokeWidth={strokeWidth}
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill={secondaryBackgroundFill}
                    circumference={circumference}
                    offset={secondaryOffset}
                />
            </svg>
        </Wrapper>
    )
}

export default React.memo(ProgressBar)
