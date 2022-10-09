import React from 'react'
import styled from 'styled-components/macro'


interface IToastContainer {
    type: string
}
const ToastContainer = styled.div<IToastContainer>`
    position: relative;
    backdrop-filter: blur(12px);
    border-radius: 8px;
    color: ${({ theme }) => theme.color.bg};
    border: ${({type, theme}) => `1px solid ${type === 'success' ? theme.color.light_gray : (type === 'danger') ? theme.color.red : theme.color.light_gray}`};
    background-color: ${({type, theme}) => type === 'success' ? theme.color_opacity.light_gray_80 : (type === 'danger') ? theme.color_opacity.red_80 : theme.color_opacity.light_gray_80};
    & > div {
        padding: 1rem;
    }
`

const Div = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`


interface INotification {
    id: number
    content: () => React.ReactNode
    type: string
    delay: number
}
interface IToastProps {
    onClose: (id: number) => void
    notification: INotification
}

const Toast: React.FC<IToastProps> = React.memo(({ notification, onClose }) => {
    React.useEffect(() => {
        const timeoutId = setTimeout(onClose, notification.delay)
        return () => clearTimeout(timeoutId)
    }, [])

    const [animation, setAnimation] = React.useState(0)

    React.useEffect(() => {
        setTimeout(() => {
            setAnimation(1)
        })
        setTimeout(() => {
            setAnimation(0)
        }, 4500)
    }, [])

    const renderItem = (content: () => React.ReactNode) => {
        if (typeof content === 'function') {
            return <span style={{ zIndex: 99999999999 }}>{content()}</span>
        } else {
            return <pre>{JSON.stringify(content, null, 1)}</pre>
        }
    }

    return (
        <ToastContainer type={notification.type} style={{ opacity: animation, transition: '.4s' }}>
            <Div style={{ zIndex: 99999999999 }}>
                {renderItem(notification.content)}
            </Div>
        </ToastContainer>
    )
})

Toast.displayName = 'Toast'

const ToastList = styled.ul`
    list-style: none;
    padding: 16px;
    position: fixed;
    bottom: 0;
    z-index: 99999999999;
    right: 0%;
    transform: translate(0%);
    li {
        margin: 0;
        padding-bottom: 8px;
    }
`

export interface INotifierProps {
    notifications: INotification[];
    onClose: (id: number) => void
}
const Notifier: React.FC<INotifierProps> = (props) => {
    const { notifications, onClose } = props
    return (
        (
            <ToastList>
                {notifications.map((notification: INotification) => (
                    <li key={notification.id} onClick={() => onClose(notification.id)}>
                        <Toast
                            onClose={() => onClose(notification.id)}
                            notification={notification}
                        />
                    </li>
                ))}
            </ToastList>
        )
    )
}

export default React.memo(Notifier)
