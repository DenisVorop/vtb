import React from 'react'
import styled from 'styled-components/macro'

import Title from '../../components/title/title'
import Text from '../../components/text/text'
import {buttonVariant, textVariant, titleVariant} from '../../utils/consts'
import InputWithLabel from '../../components/input-with-label/input-with-label'
import Select from '../../components/select/select'
import Button from '../../components/button/button'
import TextareaWithLabel from '../../components/textarea-with-label/textarea-with-label'

interface INewEventProps {
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ContentWrapper = styled.div<{w?:string}>`
  display: flex;
  gap: 16px;
  width: ${({w}) => w ? w : 'fit-content'};
`

const EventDescription = styled.div`
  height: 180px;
`

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonWrapper = styled.div`
  margin-top: 24px;
`

const NewEvent: React.FC<INewEventProps> = () => {
  const [createEventFields, setCreateEventFields] = React.useState<{
    name: string
    description_short: string
    description: string
    membersAmount: string
    award: string
    duration: {}
    eventMembers: Array<{ value: string }>
  }>({
    name: '',
    description_short: '',
    description: '',
    membersAmount: '',
    award: '300',
    duration: {value: '7'},
    eventMembers: [{value: 'Отдел кадров'}, {value: 'Отдел разработки'}, {value: 'Отдел бюджетирования'}],
  })

  return (
    <Wrapper>
      <Title variant={titleVariant.H4}>Создание ивента</Title>
      <FieldsWrapper>
        <ContentWrapper>
          <InputWithLabel
            onChangeHandler={(e) => setCreateEventFields({...createEventFields, name: e.target.value})}
            value={createEventFields.name}
            placeholder="Название ивента"
            label="Название ивента"
            w="340px"
          />
          <InputWithLabel
            onChangeHandler={(e) => setCreateEventFields({...createEventFields, description_short: e.target.value})}
            value={createEventFields.description_short}
            placeholder="Краткое описание"
            label="Краткое описание (будет видно на карточках дашборда)"
          />
        </ContentWrapper>
        <ContentWrapper>
          <TextareaWithLabel
            onChangeHandler={(e) => setCreateEventFields({...createEventFields, description: e.target.value})}
            value={createEventFields.description}
            placeholder="Название ивента"
            label="Полное описание ивента (поддерживает разметку)"
            w="680px"
          />
          {/*<EventDescription>*/}
          {/*  <Text variant={textVariant.T4}>Вид поля описания ивента</Text>*/}
          {/*</EventDescription>*/}
        </ContentWrapper>
        <ContentWrapper w="680px">
        <Select
          label="Участники ивента"
          multiple
          selected={createEventFields.eventMembers}
          list={[{value: 'Отдел дизайна'}, {value: 'Отдел маркетинга'}, {value: 'Отдел кадров'}, {value: 'Отдел разработки'}, {value: 'Отдел бюджетирования'}]}
          selectHandler={(item) => setCreateEventFields({...createEventFields, eventMembers: item})}
        />
        </ContentWrapper>

        <ContentWrapper>
          <InputWithLabel
            onChangeHandler={(e) => setCreateEventFields({...createEventFields, membersAmount: e.target.value})}
            value={createEventFields.membersAmount}
            placeholder="15"
            label="Количество участников"
            w="148px"
          />
          <Select
            label="Длительность ивента"
            selected={createEventFields.duration}
            list={[{value: '7'}, {value: '14'}, {value: '21'}]}
            selectHandler={(item) => setCreateEventFields({...createEventFields, duration: item})}
            w="148px"
          />
          <InputWithLabel
            onChangeHandler={(e) => setCreateEventFields({...createEventFields, award: e.target.value})}
            value={createEventFields.award}
            placeholder="300"
            label="Награда"
            w="148px"
          />
        </ContentWrapper>
      </FieldsWrapper>
      <ButtonWrapper>
        <Button variant={buttonVariant.PRIMARY} w="fit-content">Создать ивент</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default React.memo(NewEvent)
