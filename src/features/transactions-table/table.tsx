import React from 'react'
import styled from 'styled-components/macro'

import { TablePlus } from '../../assets/images/_images'

import StyledTable from '../../components/table/table'
import Title from '../../components/title/title'
import { TUserTransaction } from '../../types/types'

import { titleVariant } from '../../utils/consts'



const theadList = [
    '',
    'ФИО',
    'Отдел',
    'Должность',
    'Дата',
    'Событие',
    'Сумма',
    'Статус',
]

const AddAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease 0s;
    width: 24px;
    height: 24px;
    svg {
        width: 100%;
        height:auto;
    }
    :hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 32px rgba(254, 254, 252, 0.4);
        cursor: pointer;
    }
`


interface ITableProps {
    list: TUserTransaction[] | any
}

const Table: React.FC<ITableProps> = ({ list }) => {
    return (
        <React.Fragment>
            {list.length
                ? <StyledTable>
                    <thead>
                        <tr>
                            {theadList.map((value: string, index: number) => (
                                <th key={index}>
                                    <Title variant={titleVariant.H6}>{value}</Title>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item: any, index: number) => (
                            <tr key={index}>
                                <td><AddAction><TablePlus /></AddAction></td>
                                <td>{item?.users?.from?.name}</td>
                                <td>{item?.users?.from?.department.name}</td>
                                <td>{item?.users?.from?.job_title}</td>
                                <td>{new Date(item?.info?.timestamp).toLocaleString()}</td>
                                <td>Перевод</td>
                                <td>{item?.info?.amount}</td>
                                <td>Выполнено</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
                : 'Транзакций нет'
            }
        </React.Fragment>
    )
}

export default React.memo(Table)
