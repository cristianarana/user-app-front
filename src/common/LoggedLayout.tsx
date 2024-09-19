import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageBar } from './PageBar';


export const LoggedLayout: React.FC <{}> = () => {
    return (
        <>
        <PageBar/>
        <Outlet/>
        </>
    )
}