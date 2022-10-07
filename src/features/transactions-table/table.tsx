import React from 'react'
import styled from 'styled-components/macro'

import { TablePlus } from '../../assets/images/_images'

import StyledTable from '../../components/table/table'
import Title from '../../components/title/title'

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

const tRowList = [
    {
        event: {
            name: 'Участие в событии',
        },
        user: {
            name: 'Дорофеев Николай Пётрович',
            department: 'Отдел продаж',
            job_title: 'Психолог',
        },
        date: '26.09.2022 13:52',
        sum: '4000',
        status: 'Выплачено',
    },
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


interface ITableProps { }

const Table: React.FC<ITableProps> = () => {
    return (
        <StyledTable>
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
                {[...tRowList, ...tRowList, ...tRowList].map((item, index: number) => (
                    <tr key={index}>
                        <td><AddAction><TablePlus /></AddAction></td>
                        <td>{item.user.name}</td>
                        <td>{item.user.department}</td>
                        <td>{item.user.job_title}</td>
                        <td>{item.date}</td>
                        <td>{item.event.name}</td>
                        <td>{item.sum}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

export default React.memo(Table)
