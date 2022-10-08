import 'styled-components'

interface IColor {
    red: string
    orange: string
    yellow: string
    green: string
    blue: string
    ultramarine: string
    violet: string
    pink: string
    light_gray: string
    bg: string
}

interface IColorOpacity {
    red_80: string
    red_40: string
    yellow_80: string
    yellow_40: string
    green_80: string
    green_40: string
    ultramarine_80: string
    ultramarine_60: string
    ultramarine_40: string
    violet_80: string
    violet_40: string
    light_gray_80: string
    light_gray_60: string
    light_gray_40: string
    light_gray_20: string
    light_gray_10: string
    light_gray_4: string
    bg_60: string
    ultramarine_20: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        color: IColor
        color_opacity: IColorOpacity
    }
}
