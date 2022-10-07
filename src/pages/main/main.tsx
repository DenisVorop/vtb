import React from 'react'
import styled from 'styled-components/macro'

import Button from '../../components/button/button'
import Checkbox from '../../components/checkbox/checkbox'
import Container from '../../components/container/container'
import InputWithLabel from '../../components/input-with-label/input-with-label'
import Input from '../../components/input/input'
import Popup from '../../components/popup/popup'
import ProgressBar from '../../components/progress-bar/progress-bar'
import Select from '../../components/select/select'
import Text from '../../components/text/text'
import Title from '../../components/title/title'
import ActivityChart from '../../features/activity-chart/activity-chart'

import Balance from '../../features/balance/balance'
import EventCards from '../../features/event-cards/event-cards'
import Level from '../../features/level/level'
import Nft from '../../features/nft/nft'
import OperationsTable from '../../features/operations-table/operations-table'
import Table from '../../features/transactions-table/table'

import { buttonVariant, textVariant, titleVariant } from '../../utils/consts'


const BlueText = styled(Text)`color: ${({ theme }) => theme.color.blue};`
const GreenText = styled(Text)`color: ${({ theme }) => theme.color.green};`
const LightGrayText = styled(Text)`color: ${({ theme }) => theme.color.light_gray};`
const OrangeText = styled(Text)`color: ${({ theme }) => theme.color.orange};`
const PinkText = styled(Text)`color: ${({ theme }) => theme.color.pink};`
const RedText = styled(Text)`color: ${({ theme }) => theme.color.red};`
const UltramarineText = styled(Text)`color: ${({ theme }) => theme.color.ultramarine};`
const VioletText = styled(Text)`color: ${({ theme }) => theme.color.violet};`
const YellowText = styled(Text)`color: ${({ theme }) => theme.color.yellow};`


const Main: React.FC = () => {
    const [selectedValue, setSelectedValue] = React.useState({ value: 'Отдел разработки' })
    const [selectedValues, setSelectedValues] = React.useState([{ value: 'Отдел разработки' }])
    const [isVisible, setIsVisible] = React.useState(false)
    const [percent, setPercent] = React.useState(20)
    return (
        <Container>
            <div style={{ padding: '40px 0px 100px 0' }}>
                <div style={{ maxWidth: 600 }}>
                    <Select
                        list={[
                            { value: 'Отдел разработки' },
                            { value: 'Отдел дизайна' },
                            { value: 'Отдел кадров' },
                        ]}
                        selectHandler={setSelectedValue}
                        selected={selectedValue}
                    />
                    <br />
                    <br />
                    <Select
                        label="Выберите, кому хотите начислить монеты"
                        list={[
                            { value: 'Отдел разработки' },
                            { value: 'Отдел дизайна' },
                            { value: 'Отдел кадров' },
                        ]}
                        selectHandler={setSelectedValue}
                        selected={selectedValue}
                    />
                    <br />
                    <br />
                    <Select
                        list={[
                            { value: 'Отдел разработки' },
                            { value: 'Отдел дизайна' },
                            { value: 'Отдел кадров' },
                            { value: 'Отдел маркетинга' },
                            { value: 'Отдел бюджетирования' },
                            { value: 'Отдел 1' },
                            { value: 'Отдел 2' },
                            { value: 'Отдел 3' },
                            { value: 'Отдел 4' },
                            { value: 'Отдел 5' },
                        ]}
                        selectHandler={setSelectedValues}
                        selected={selectedValues}
                        multiple
                    />
                </div>
                <br />
                <br />
                <BlueText>цветной текст</BlueText>
                <GreenText>цветной текст</GreenText>
                <LightGrayText>цветной текст</LightGrayText>
                <OrangeText>цветной текст</OrangeText>
                <PinkText>цветной текст</PinkText>
                <RedText>цветной текст</RedText>
                <UltramarineText>цветной текст</UltramarineText>
                <VioletText>цветной текст</VioletText>
                <YellowText>цветной текст</YellowText>
                <br />
                <br />
                <Text variant={textVariant.T1}>Это дефолтный текст</Text>
                <Text variant={textVariant.T2}>Это дефолтный текст</Text>
                <Text variant={textVariant.T3}>Это дефолтный текст</Text>
                <Text variant={textVariant.T4}>Это дефолтный текст</Text>
                <br />
                <br />
                <Title empty variant={titleVariant.H1}>Это дефолтный тайтл</Title>
                <Title empty variant={titleVariant.H2}>Это дефолтный тайтл</Title>
                <Title empty variant={titleVariant.H3}>Это дефолтный тайтл</Title>
                <Title empty variant={titleVariant.H4}>Это дефолтный тайтл</Title>
                <Title empty variant={titleVariant.H5}>Это дефолтный тайтл</Title>
                <Title empty variant={titleVariant.H6}>Это дефолтный тайтл</Title>
                <br />
                <br />
                <Button variant={buttonVariant.PRIMARY}>это основная кнопка</Button>
                <Button variant={buttonVariant.SECONDARY}>это второстепенная кнопка</Button>
                <Button variant={buttonVariant.PRIMARY} disabled>это основная disabled</Button>
                <Button variant={buttonVariant.SECONDARY} disabled>это второстепенная disabled</Button>
                <br />
                <br />
                <Input placeholder="placeholder" />
                <Input value="value in value in value in value" />
                <InputWithLabel placeholder="placeholder" onChangeHandler={() => { }} value="" label="Its label" />
                <br />
                <br />
                <div><Checkbox checked={false} disabled={false}>text</Checkbox></div>
                <div><Checkbox checked={true} disabled={false}>text</Checkbox></div>
                <div><Checkbox checked={false} disabled={true}>text</Checkbox></div>
                <div><Checkbox checked={true} disabled={true}>text</Checkbox></div>
                <br />
                <br />
                <Button variant={buttonVariant.PRIMARY} onClick={() => setIsVisible(true)}>Открыть попап</Button>
                <Popup
                    setIsVisible={setIsVisible}
                    isVisible={isVisible}
                >
                    <PopupContentWrapper>
                        <Title variant={titleVariant.H4}>Перечисление монет сотрудникам</Title>
                        <Select
                            label="Выберите, кому хотите начислить монеты"
                            list={[
                                { value: 'Отдел разработки' },
                                { value: 'Отдел дизайна' },
                                { value: 'Отдел кадров' },
                            ]}
                            selectHandler={setSelectedValues}
                            selected={selectedValues}
                            multiple
                        />
                        <Select
                            label="Тип пополнения"
                            list={[
                                { value: 'Отдел разработки' },
                                { value: 'Отдел дизайна' },
                                { value: 'Отдел кадров' },
                            ]}
                            selectHandler={setSelectedValue}
                            selected={selectedValue}
                        />
                        <Select
                            label="Сумма начисления"
                            list={[
                                { value: 2000 },
                                { value: 5000 },
                                { value: 7000 },
                            ]}
                            selectHandler={setSelectedValue}
                            selected={selectedValue}
                        />
                        <Button variant={buttonVariant.PRIMARY}>Пополнить</Button>
                    </PopupContentWrapper>
                </Popup>
                <br />
                <br />
                <Table />
                <br />
                <br />
                <ProgressBar percent={percent} />
                <Input onChange={(e: any) => setPercent(e.target.value)} value={percent} type="number" />
                <br />
                <br />
                <Balance />
                <br />
                <br />
                <Level />
                <br />
                <br />
                <EventCards />
                <br />
                <br />
                <OperationsTable />
                <br />
                <br />
                <ActivityChart />
                <br />
                <br />
                <Nft />
            </div>
        </Container >
    )
}

export default React.memo(Main)


const PopupContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
