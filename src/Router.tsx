import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { RouterLayout } from './common/RouterLayout'
import { LoggedLayout } from './common/LoggedLayout'
import { ListUsersPage } from './pages/users'


export const HandleRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout/>}> 
                <Route path="/" element={<HomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
            </Route>
            <Route path="/user-app" element={<LoggedLayout/>}> 
                <Route path="users" element={<ListUsersPage/>}/>
            </Route>
        </Routes>
    )
}