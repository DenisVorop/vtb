import React from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'

import Title from '../../components/title/title'
import { buttonVariant, path, titleVariant } from '../../utils/consts'
import InputWithLabel from '../../components/input-with-label/input-with-label'
import Select from '../../components/select/select'
import Button from '../../components/button/button'
import TextareaWithLabel from '../../components/textarea-with-label/textarea-with-label'
import { useAppSelector } from '../../hooks/redux'
import { useCreateEventMutation } from '../../services/events/events'
import { TEvent } from '../../types/types'
import StaticContent from '../../features/static-content/static-content'

interface INewEventProps {
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ContentWrapper = styled.div<{ w?: string }>`
  display: flex;
  gap: 16px;
  width: ${({ w }) => w ? w : 'fit-content'};
`

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonWrapper = styled.div`
  margin-top: 24px;
`

const Content = styled.div`
  display: flex;
  gap: 48px;
`

const Board = styled.div`
  flex: 1 1 auto;
  background: rgba(254,254,252,0.08);
  box-shadow: 0px 4px 32px rgb(2 9 21 / 20%);
  backdrop-filter: blur(17px);
  border-radius: 16px;
  padding: 24px;
`






const day = 86400

const NewEvent: React.FC<INewEventProps> = () => {
  const [createEvent, { isLoading, isError, isSuccess }] = useCreateEventMutation()
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.base)
  const [createEventFields, setCreateEventFields] = React.useState<{
    title: string
    description: string
    text: string
    membersAmount: string
    award: string
    duration: { value: '7' }
    eventMembers: Array<{ value: string }>
  }>({
    title: '',
    description: '',
    text: '<div class=\'wrapper\'><div class=\'title\'>Здесь можно создавать описание ивента с помощью такой раметки</div><p>Благодаря этому можно стилизовать описания задачи для конкретного ивента и сразу видеть, что выходит.</p><ul><li>Это пункт №1</li><li>Это пункт №2</li><li>Это пункт №3</li></ul><img src=\'https://www.vtb.ru/-/media/headlesscms/main/suggest-bank/creditcard.png\' /></div>',
    membersAmount: '',
    award: '300',
    duration: { value: '7' },
    eventMembers: [{ value: 'Отдел кадров' }, { value: 'Отдел разработки' }, { value: 'Отдел бюджетирования' }],
  })


  const event: TEvent = React.useMemo(() => {
    return {
      id: Date.now(),
      title: createEventFields.title,
      description: createEventFields.description,
      text: createEventFields.text,
      filter_params: [''],
      max_count_members: +createEventFields.membersAmount,
      all_members: [],
      approved_members: [],
      date_start: new Date(Date.now()).toLocaleString(),
      date_end: new Date(Date.now() + (day * +createEventFields.duration.value)).toLocaleString(),
      timestamp_start: Date.now(),
      timestamp_end: Date.now() + (day * +createEventFields.duration.value),
      creator: {
        id: user.user_id,
        role: user.role.find(r => r === 'admin') || 'user',
      },
      rewards: [{
        rub: 100,
        nfts: [],
      }],
      user_must_send_reports: true,
      status: '',
    }
  }, [createEventFields, user])

  const handleCreateEvent = React.useCallback(() => {
    createEvent(event)
  }, [event])

  const contentStatic = React.useMemo(() => {
    return [{ text: createEventFields.text }]
  }, [createEventFields.text])

  const isAdmin = React.useMemo(() => !!user.role.find(f => f === 'admin'), [user])

  React.useEffect(() => {
    if (!isAdmin) {
      navigate(path.DASHBOARD)
    }
  }, [user])
  return (
    <Wrapper>
      {isAdmin
        ? <>
          <Title variant={titleVariant.H4}>Создание ивента</Title>
          <Content>
            <div>
              <FieldsWrapper>
                <ContentWrapper>
                  <InputWithLabel
                    onChangeHandler={(e) => setCreateEventFields({ ...createEventFields, title: e.target.value })}
                    value={createEventFields.title}
                    placeholder="Название ивента"
                    label="Название ивента"
                    w="340px"
                  />
                  <InputWithLabel
                    onChangeHandler={(e) => setCreateEventFields({ ...createEventFields, description: e.target.value })}
                    value={createEventFields.description}
                    placeholder="Краткое описание"
                    label="Краткое описание (будет видно на карточках дашборда)"
                  />
                </ContentWrapper>
                <ContentWrapper>
                  <TextareaWithLabel
                    onChangeHandler={(e) => setCreateEventFields({ ...createEventFields, text: e.target.value })}
                    value={createEventFields.text}
                    placeholder="Название ивента"
                    label="Полное описание ивента (поддерживает разметку)"
                    w="680px"
                  />
                </ContentWrapper>
                <ContentWrapper w="680px">
                  <Select
                    label="Участники ивента"
                    multiple
                    selected={createEventFields.eventMembers}
                    list={[{ value: 'Отдел дизайна' }, { value: 'Отдел маркетинга' }, { value: 'Отдел кадров' }, { value: 'Отдел разработки' }, { value: 'Отдел бюджетирования' }]}
                    selectHandler={(item) => setCreateEventFields({ ...createEventFields, eventMembers: item })}
                  />
                </ContentWrapper>

                <ContentWrapper>
                  <InputWithLabel
                    onChangeHandler={(e) => setCreateEventFields({ ...createEventFields, membersAmount: e.target.value })}
                    value={createEventFields.membersAmount}
                    placeholder="15"
                    label="Количество участников"
                    w="148px"
                  />
                  <Select
                    label="Длительность ивента"
                    selected={createEventFields.duration}
                    list={[{ value: '7' }, { value: '14' }, { value: '21' }]}
                    selectHandler={(item) => setCreateEventFields({ ...createEventFields, duration: item })}
                    w="148px"
                  />
                  <InputWithLabel
                    onChangeHandler={(e) => setCreateEventFields({ ...createEventFields, award: e.target.value })}
                    value={createEventFields.award}
                    placeholder="300"
                    label="Награда"
                    w="148px"
                  />
                </ContentWrapper>
              </FieldsWrapper>
              <ButtonWrapper>
                <Button
                  variant={buttonVariant.PRIMARY}
                  w="fit-content"
                  onClick={handleCreateEvent}
                >
                  Создать ивент
                </Button>
              </ButtonWrapper>
            </div>
            <Board>
              <StaticContent content={contentStatic} />
            </Board>
          </Content>
        </>
        : null}
    </Wrapper>
  )
}

export default React.memo(NewEvent)
