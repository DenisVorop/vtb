import React from 'react'
import styled from 'styled-components/macro'

import { useNotification } from '../../hooks/use-notify'


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    :hover {
        cursor: pointer;
    }
`

interface ICopy {
    children: React.ReactNode
    color?: string
}

const Copy: React.FC<ICopy> = ({ children, color }) => {
    const copyRef = React.useRef<HTMLDivElement>(null)
    const { notify } = useNotification()

    const copyToClipboard = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        e.stopPropagation()

        if (copyRef && copyRef.current) {
            const arr = (copyRef.current.firstChild?.textContent || copyRef.current.innerText).split('')

            const idx = arr.indexOf('\n')
            idx !== -1 && arr.splice(idx)

            const index = arr.indexOf(' ')
            index !== -1 && arr.splice(index)

            navigator.clipboard
                .writeText(arr.join(''))
                .then(() => {
                    notify({
                        type: 'success',
                        content: () => 'Успешно скопировано',
                    })
                })
                .catch(() => {
                    notify({
                        type: 'danger',
                        content: () => 'Не скопировано',
                    })
                })
        }
    }, [copyRef])

    return (
        <Wrapper>
            <div style={{ whiteSpace: 'nowrap', color: `${color}` }} ref={copyRef} onClick={copyToClipboard}>
                {children}
            </div>
        </Wrapper>
    )
}

export default React.memo(Copy)
