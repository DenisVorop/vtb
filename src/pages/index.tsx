import { path } from '../utils/consts'

import Auth from './auth/auth'
import Main from './main/main'



interface IPages {
    element: React.ReactNode
    path: string
}

export const pages: IPages[] = [
    { element: <Main />, path: path.MAIN },
    { element: <Auth />, path: path.AUTH },
]
