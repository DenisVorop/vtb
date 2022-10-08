import { path } from '../utils/consts'

import Auth from './auth/auth'
import Dashboard from './dashboard/dashboard'
import Components from './components/components'
import Profile from './profile/Profile'
import Logout from './logout/logout'
import Marketplace from './marketplace/marketplace'



interface IPages {
    element: React.ReactNode
    path: string
}

export const pages: IPages[] = [
    { element: <Components />, path: path.COMPONENTS },
    { element: <Auth />, path: path.AUTH },
    { element: <Dashboard />, path: path.DASHBOARD },
    { element: <Profile />, path: path.PROFILE },
    { element: <Profile />, path: `${path.PROFILE}/:id` },
    { element: <Logout />, path: path.LOGOUT },
    { element: <Marketplace />, path: path.MARKETPLACE },
]
