import React from 'react'
import styled from 'styled-components/macro'

import { ChevronDown, Close } from '../../assets/images/_images'
import { textVariant } from '../../utils/consts'

import Text from '../text/text'


interface IIsActiveList {
    isActiveList: boolean
}
interface ISelectedOption extends IIsActiveList {
    isMultiple: boolean
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
const CustomSelectWrapper = styled.div<{w?:string}>`
	position: relative;
  width: ${({w}) => w};
`
const SelectedOption = styled.div<ISelectedOption>`
    display: flex;
    align-items: start;
    justify-content: space-between;
	padding: 8px 8px 8px 16px;
    height: ${({ isMultiple }) => isMultiple ? '100%' : '40px'};
    max-height: ${({ isMultiple }) => isMultiple ? '76px' : '40px'};
    overflow-y: ${({ isMultiple }) => isMultiple ? 'scroll' : 'hidden'};
    background-color: ${({ theme }) => theme.color.bg};
    border: ${({ theme }) => `1px solid ${theme.color.ultramarine}`};
    border-radius: ${({ isActiveList }) => isActiveList ? '4px 4px 0px 0px' : '4px'};
    :hover {
        cursor: pointer;
    }
`
const ChevronWrapper = styled.div<IIsActiveList>`
	transition: all 0.3s ease 0s;
	transform: ${({ isActiveList }) => isActiveList ? 'rotate(180deg)' : 'rotate(0deg)'};
    display: flex;
    align-items: center;
    justify-content: center;
`
const List = styled.div<IIsActiveList>`
	width: 100%;
	position: absolute;
	top: 100%;
	right: 0;
	transform: translateY(-1px);
	user-select: none;
	padding: 4px 0px;
	border: ${({ theme }) => `1px solid ${theme.color.ultramarine}`};
	border-radius: 4px;
	z-index: 2;
    transition: all 0.3s ease 0s;
    border-radius: 0px 0px 4px 4px;
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.light_gray};
`
const Option = styled.button`
	display: flex;
	align-items: center;
    width: 100%;
	gap: 8px;
	padding: 6px 16px;
	transition: all 0.3s ease 0s;
	:hover {
		cursor: pointer;
		background: ${({ theme }) => `${theme.color_opacity.ultramarine_40}`};
        /* background-color: rgba(161, 196, 255, 0.4); */
	}
    :disabled {
        color: ${({ theme }) => theme.color.bg};
        background: ${({ theme }) => `${theme.color_opacity.ultramarine_80}`};
        :hover {
            cursor: default;
        }
    }
`
const Options = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    flex-wrap: wrap;
    gap: 8px;
`



interface CustomSelectProps {
    list: any;
    selectHandler: (item: any) => void
    label?: string
    selected: any
    noSelect?: boolean
    multiple?: boolean
    w?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    list,
    selectHandler,
    label,
    selected,
    noSelect = false,
    multiple = false,
    w,
}) => {
    const [selectedItems, setSelectedItems] = React.useState(selected)
    const [isActiveList, setIsActiveList] = React.useState<boolean>(false)

    React.useEffect(() => {
        setSelectedItems(selected)
    }, [selected])

    const handleChangeSelectedItem = React.useCallback((item: any) => {
        setIsActiveList(false)
        multiple
            ? selectHandler([...selectedItems, item])
            : selectHandler(item)
    }, [selectHandler, selectedItems, multiple])

    const handleChangeActiveList = React.useCallback(() => {
        setIsActiveList(!isActiveList)
    }, [isActiveList])

    const openSelectList = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        handleChangeActiveList()
    }, [handleChangeActiveList])

    React.useEffect(() => {
        isActiveList
            ? document.body.addEventListener('click', handleChangeActiveList)
            : document.body.removeEventListener('click', handleChangeActiveList)
        return () => document.body.removeEventListener('click', handleChangeActiveList)
    }, [handleChangeActiveList, isActiveList])

    return (
        <Wrapper>
            {label && <Text variant={textVariant.T4}>{label}</Text>}
            {!noSelect && (
                <CustomSelectWrapper w={w}>
                    <SelectedOption onClick={openSelectList} isActiveList={isActiveList} isMultiple={multiple}>
                        <Options>
                            {
                                multiple
                                    ? selectedItems.map((item: any, index: number) => <MultipleOption key={index}>{item.value}</MultipleOption>)
                                    : selectedItems.value
                            }
                        </Options>
                        <ChevronWrapper isActiveList={isActiveList}>
                            <ChevronDown />
                        </ChevronWrapper>
                    </SelectedOption>
                    {isActiveList && list.length
                        ? (
                            <List isActiveList={isActiveList}>
                                {list
                                    .map((item: any, index: number) => (
                                        <Option
                                            key={index}
                                            onClick={() => handleChangeSelectedItem(item)}
                                            disabled={
                                                multiple
                                                    ? selectedItems.find((selectedItem: any) => selectedItem.value === item.value)
                                                    : selectedItems.value === item.value
                                            }
                                        >
                                            <Text variant={textVariant.T2}>{item.value}</Text>
                                        </Option>
                                    ))
                                }
                            </List>
                        )
                        : null
                    }
                </CustomSelectWrapper>
            )}
        </Wrapper>
    )
}


const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.bg};
    background-color: ${({ theme }) => theme.color.ultramarine};
`

interface IMultipleOptionProps {
    children: React.ReactNode
}
const MultipleOption: React.FC<IMultipleOptionProps> = React.memo(({ children }) => {
    const removeOptionHandler = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
    }, [])

    return (
        <OptionWrapper onClick={removeOptionHandler}>
            <Text variant={textVariant.T3}>
                {children}
            </Text>
            <Close />
        </OptionWrapper>
    )
})


export default React.memo(CustomSelect)
