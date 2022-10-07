import React from 'react'

export const useKeyPress = (keyTarget: string): boolean => {
    const [isKeyPressed, setIsKeyPressed] = React.useState(false)

    const downHandler = (e: KeyboardEvent) => {
        if (e.key === keyTarget)
            setIsKeyPressed(true)
    }

    const upHandler = (e: KeyboardEvent) => {
        if (e.key === keyTarget)
            setIsKeyPressed(false)
    }

    React.useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)

        return () => {
            window.addEventListener('keydown', downHandler)
            window.addEventListener('keyup', upHandler)
        }

    }, [])

    return isKeyPressed
}
