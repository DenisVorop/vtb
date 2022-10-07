import React from 'react'
import styled from 'styled-components/macro'

const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    thead {
        th {
            padding: 12px 16px;
            text-align: left;
            :not(:last-child) {
                border-right: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
            }
            :first-child {
                border-right: none;
            }
        }
    }
    tbody {
        tr {
            td {
                padding: 12px 16px;
                text-align: left;
                :not(:first-child) {
                    border-top: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
                }
                :not(:last-child) {
                    border-right: ${({ theme }) => `1px solid ${theme.color_opacity.light_gray_40}`};
                }
                :first-child {
                    border-right: none;
                    width: 56px;
                }
            }
        }
    }
`

export default React.memo(Table)
