import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import MyRoute from './MyRoute'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'

export default function Routes() {
    const location = useLocation()

    React.useEffect(() => {
        toast.success('Sucesso!')
        toast.error('Erro!')
    }, [location.pathname])

    return (
        <Switch>
            <MyRoute exact path="/" component={Login} />
            <MyRoute path="*" component={Page404} />
        </Switch>
    )
}
