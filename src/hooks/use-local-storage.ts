import React from 'react'

export const useLocalStorage = (initialValue: any, key: string): [any, React.Dispatch<any>] => {
    const getValue = () => {
        const storage = localStorage.getItem(key)

        if (storage) {
            return JSON.parse(storage)
        }

        return initialValue
    }

    const [value, setValue] = React.useState(getValue)

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
