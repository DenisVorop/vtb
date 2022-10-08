import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

import { AddEventImage, DashboardImage, EventsImage, LogoutImage, ProgileImage, SettingsImage, StoreImage } from '../../assets/images/navbar/_images'
import { LogoImage } from '../../assets/images/_images'
import { path } from '../../utils/consts'

const Wrapper = styled.div`
    position: fixed;
    width: 48px;
    max-width: 48px;
    height: 100vh;
    border-radius: 0px 16px 16px 0px;
    background-color: ${({ theme }) => theme.color_opacity.ultramarine_20};
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`

const Logo = styled.div`

`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const AllLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 auto;
`

interface ILinkProps {
    isActive: boolean
}
const LinkWrapper = styled.div<ILinkProps>`
    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ theme, isActive }) => isActive ? `${theme.color.ultramarine}` : 'transparent'};
    transition: all 0.3s ease 0s;
    width: 32px;
    height: 32px;
    svg path {
            stroke: ${({ isActive, theme }) => isActive && theme.color.bg};
        }
    :hover {
        background-color: ${({ theme }) => theme.color_opacity.ultramarine_40};
        svg path {
            stroke: #fff;
        }
    }
`

const mainLinks = [
    { name: 'Дашборд', image: <DashboardImage />, path: path.DASHBOARD },
    { name: 'Личный кабинет', image: <ProgileImage />, path: path.PROFILE },
    { name: 'Маркетплейс', image: <StoreImage />, path: path.MARKETPLACE },
    { name: 'Все ивенты', image: <EventsImage />, path: path.ALL_EVENTS },
]

const secondaryLinks = [
    { name: 'Новый ивент', image: <AddEventImage />, path: path.NEW_EVENT },
    { name: 'Настройки', image: <SettingsImage />, path: path.SETTINGS },
    { name: 'Выход', image: <LogoutImage />, path: path.LOGOUT },
]

interface INavbarProps { }

const Navbar: React.FC<INavbarProps> = () => {
    const { pathname } = useLocation()
    const [path, setPath] = React.useState<string>(pathname)
    const handleChangePath = React.useCallback((linkPath: string) => {
        setPath(linkPath)
    }, [])
    React.useEffect(() => {
        setPath(pathname)
    }, [pathname])
    return (
        <Wrapper>
            <Logo>
                <LogoImage />
            </Logo>
            <AllLinks>
                <Links>
                    {mainLinks.map((item) => (
                        <LinkWrapper key={item.path} isActive={item.path === path} onClick={() => handleChangePath(item.path)}>
                            <Link to={item.path}>{item.image}</Link>
                        </LinkWrapper>
                    ))}
                </Links>
                <Links>
                    {secondaryLinks.map((item) => (
                        <LinkWrapper key={item.path} isActive={item.path === path} onClick={() => handleChangePath(item.path)}>
                            <Link to={item.path}>{item.image}</Link>
                        </LinkWrapper>
                    ))}
                </Links>
            </AllLinks>
        </Wrapper>
    )
}

export default React.memo(Navbar)
