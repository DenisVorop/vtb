import React from 'react'
import { createPortal } from 'react-dom'

import { INotifierProps } from '../components/notifier/notifier'


interface IInitialState {
    id: number
    content: () => React.ReactNode
    type: string
    delay: number
}

interface IContext {
    notifications: IInitialState[]
    notify: (rest: { type: string; content: () => string }, delay?: number) => void
}

export const NotifyContext = React.createContext<IContext>({} as IContext)

const initialState: IInitialState[] = []

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const REMOVE_ALL = 'REMOVE_ALL'

export const notifyReducer = (state: IInitialState[], action: any) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: +new Date(),
                    content: action.payload.content,
                    type: action.payload.type,
                    delay: action.payload.delay || 5000,
                },
            ]
        case REMOVE:
            return state.filter((t: IInitialState) => t.id !== action.payload.id)
        case REMOVE_ALL:
            return initialState
        default:
            return state
    }
}

export const NotifyProvider = React.memo((props: { Component: React.FC<INotifierProps>, children: React.ReactNode }) => {
    const { Component } = props

    const notifyRef = React.useRef<HTMLElement | null>(null)

    const [notifications, dispatchNotify] = React.useReducer(notifyReducer, initialState)

    const toastData = React.useMemo(() => ({
        notifications,
        notify: (rest: { type: string; content: () => string; }, delay = 0) => {
            dispatchNotify({ type: ADD, payload: rest })
        },
    }), [notifications])

    const onCloseHandle = React.useCallback((rest: number) => dispatchNotify({ type: REMOVE, payload: { id: rest } }), [])

    React.useEffect(() => {
        notifyRef.current = document.body
    }, [])

    return (
        <NotifyContext.Provider value={toastData}>
            {props.children}
            {notifyRef?.current &&
                createPortal(
                    <Component onClose={onCloseHandle} notifications={notifications} />,
                    notifyRef.current,
                )}
        </NotifyContext.Provider>
    )
})

export const useNotification = () => React.useContext(NotifyContext)
